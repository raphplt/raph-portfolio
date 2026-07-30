import "server-only";

import {
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";

import postgres from "postgres";

const GAME_TOKEN_MAX_AGE_MS = 20 * 60 * 1000;
const GAME_TOKEN_CLOCK_TOLERANCE_MS = 5_000;
const SCORE_LIMIT_PER_SECOND = 800;
const SCORE_LIMIT_BASE = 500;

type SqlClient = ReturnType<typeof postgres>;

type GlobalWithCoreRunner = typeof globalThis & {
  coreRunnerSchema?: Promise<void>;
  coreRunnerSql?: SqlClient;
};

const globalWithCoreRunner = globalThis as GlobalWithCoreRunner;

export class CoreRunnerConfigurationError extends Error {}

function getSecret() {
  const secret =
    process.env.CORE_RUNNER_SECRET ?? process.env.DATABASE_URL;
  if (!secret || secret.length < 24) {
    throw new CoreRunnerConfigurationError(
      "DATABASE_URL or CORE_RUNNER_SECRET must contain at least 24 characters.",
    );
  }
  return secret;
}

function getSql() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new CoreRunnerConfigurationError("DATABASE_URL is not configured.");
  }

  globalWithCoreRunner.coreRunnerSql ??= postgres(connectionString, {
    idle_timeout: 20,
    max: 3,
    prepare: false,
  });
  return globalWithCoreRunner.coreRunnerSql;
}

async function ensureSchema() {
  const sql = getSql();
  globalWithCoreRunner.coreRunnerSchema ??= (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS core_runner_scores (
        session_id TEXT PRIMARY KEY,
        nickname VARCHAR(12) NOT NULL,
        score INTEGER NOT NULL CHECK (score >= 0),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS core_runner_scores_ranking
      ON core_runner_scores (score DESC, created_at ASC)
    `;
  })();
  await globalWithCoreRunner.coreRunnerSchema;
}

function sign(payload: string) {
  return createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");
}

export function issueGameToken(now = Date.now()) {
  const sessionId = randomBytes(16).toString("hex");
  const payload = `${sessionId}.${now}`;
  return {
    token: `${payload}.${sign(payload)}`,
    startedAt: now,
  };
}

export function verifyGameToken(token: string, score: number, now = Date.now()) {
  const [sessionId, startedAtRaw, receivedSignature, ...rest] =
    token.split(".");
  if (
    rest.length > 0 ||
    !/^[a-f0-9]{32}$/.test(sessionId ?? "") ||
    !/^\d{13}$/.test(startedAtRaw ?? "") ||
    !receivedSignature
  ) {
    return null;
  }

  const payload = `${sessionId}.${startedAtRaw}`;
  const expectedSignature = Buffer.from(sign(payload));
  const candidateSignature = Buffer.from(receivedSignature);
  if (
    expectedSignature.length !== candidateSignature.length ||
    !timingSafeEqual(expectedSignature, candidateSignature)
  ) {
    return null;
  }

  const startedAt = Number(startedAtRaw);
  const durationMs = now - startedAt;
  if (
    durationMs < -GAME_TOKEN_CLOCK_TOLERANCE_MS ||
    durationMs > GAME_TOKEN_MAX_AGE_MS
  ) {
    return null;
  }

  const elapsedSeconds = Math.max(1, durationMs / 1000);
  const maximumPlausibleScore =
    SCORE_LIMIT_BASE + elapsedSeconds * SCORE_LIMIT_PER_SECOND;
  if (
    !Number.isSafeInteger(score) ||
    score < 0 ||
    score > maximumPlausibleScore
  ) {
    return null;
  }

  return { sessionId, startedAt, durationMs };
}

export function normalizeNickname(value: unknown) {
  if (typeof value !== "string") return null;
  const nickname = value
    .normalize("NFKC")
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .trim()
    .slice(0, 12);
  return nickname.length > 0 ? nickname : null;
}

export async function getLeaderboard() {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<
    { name: string; score: number; date: Date }[]
  >`
    SELECT
      nickname AS name,
      score,
      created_at AS date
    FROM core_runner_scores
    ORDER BY score DESC, created_at ASC
    LIMIT 10
  `;
  return rows.map((row) => ({
    name: row.name,
    score: row.score,
    date: row.date.toISOString(),
  }));
}

export async function saveLeaderboardScore({
  nickname,
  score,
  sessionId,
}: {
  nickname: string;
  score: number;
  sessionId: string;
}) {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<
    { name: string; score: number; date: Date }[]
  >`
    INSERT INTO core_runner_scores (session_id, nickname, score)
    VALUES (${sessionId}, ${nickname}, ${score})
    ON CONFLICT (session_id) DO NOTHING
    RETURNING nickname AS name, score, created_at AS date
  `;
  if (rows.length === 0) return null;
  return {
    name: rows[0].name,
    score: rows[0].score,
    date: rows[0].date.toISOString(),
  };
}
