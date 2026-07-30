import { NextRequest, NextResponse } from "next/server";

import {
  CoreRunnerConfigurationError,
  getLeaderboard,
  normalizeNickname,
  saveLeaderboardScore,
  verifyGameToken,
} from "@/lib/core-runner-server";

export const runtime = "nodejs";

function serviceUnavailable() {
  return NextResponse.json(
    { error: "Leaderboard service is not configured." },
    { status: 503 },
  );
}

export async function GET() {
  try {
    return NextResponse.json(
      { scores: await getLeaderboard() },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    if (error instanceof CoreRunnerConfigurationError) {
      return serviceUnavailable();
    }
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      nickname?: unknown;
      score?: unknown;
      token?: unknown;
    };
    const nickname = normalizeNickname(body.nickname);
    const score = body.score;
    const token = body.token;
    if (
      !nickname ||
      typeof score !== "number" ||
      typeof token !== "string"
    ) {
      return NextResponse.json({ error: "Invalid score." }, { status: 400 });
    }

    const game = verifyGameToken(token, score);
    if (!game) {
      return NextResponse.json(
        { error: "Invalid or expired game session." },
        { status: 400 },
      );
    }

    const saved = await saveLeaderboardScore({
      nickname,
      score,
      sessionId: game.sessionId,
    });
    if (!saved) {
      return NextResponse.json(
        { error: "This game was already submitted." },
        { status: 409 },
      );
    }

    return NextResponse.json({ score: saved }, { status: 201 });
  } catch (error) {
    if (error instanceof CoreRunnerConfigurationError) {
      return serviceUnavailable();
    }
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
    }
    throw error;
  }
}
