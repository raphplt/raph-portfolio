"use client";

import { Pause, Play, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

export type GameLabels = {
  title: string;
  subtitle: string;
  intro: string;
  start: string;
  close: string;
  pause: string;
  resume: string;
  score: string;
  best: string;
  lives: string;
  gameOver: string;
  finalScore: string;
  replay: string;
  controls: string;
  objective: string;
  leaderboard: string;
  emptyLeaderboard: string;
  nickname: string;
  nicknamePlaceholder: string;
  saveScore: string;
  scoreSaved: string;
  closeLeaderboard: string;
  leaderboardUnavailable: string;
  savingScore: string;
  saveScoreError: string;
};

type Phase = "intro" | "playing" | "paused" | "gameover";
type FallingObject = {
  id: number;
  type: "core" | "meteor";
  x: number;
  y: number;
  radius: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
};
type Star = { x: number; y: number; size: number; speed: number; alpha: number };
type ScoreEntry = { name: string; score: number; date: string };

const WIDTH = 960;
const HEIGHT = 560;
const PLAYER_Y = HEIGHT - 64;

const INK = "#0b0a09";
const INK_2 = "#16130f";
const PAPER = "#e9e5dc";
const ACCENT = "#ff4a1a";
const GRID_LINE = "rgba(233, 229, 220, 0.045)";

function createStars(): Star[] {
  return Array.from({ length: 85 }, () => ({
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
    size: Math.random() * 1.7 + 0.35,
    speed: Math.random() * 34 + 16,
    alpha: Math.random() * 0.58 + 0.18,
  }));
}

export function SpaceArcade({
  labels,
  onRequestClose,
  open,
}: {
  labels: GameLabels;
  onRequestClose: () => void;
  open: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>("intro");
  const playerXRef = useRef(WIDTH / 2);
  const objectsRef = useRef<FallingObject[]>([]);
  const starsRef = useRef<Star[]>([]);
  const keysRef = useRef(new Set<string>());
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const elapsedRef = useRef(0);
  const spawnRef = useRef(0);
  const invulnerableRef = useRef(0);
  const nextObjectIdRef = useRef(0);
  const scorePaintRef = useRef(0);
  const sessionTokenRef = useRef<string | null>(null);
  const [phase, setPhase] = useState<Phase>("intro");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [best, setBest] = useState(0);
  const [leaderboard, setLeaderboard] = useState<ScoreEntry[]>([]);
  const [nickname, setNickname] = useState("");
  const [scoreSaved, setScoreSaved] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboardStatus, setLeaderboardStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");
  const [savingScore, setSavingScore] = useState(false);
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    starsRef.current = createStars();
  }, []);

  const loadLeaderboard = useCallback(async () => {
    setLeaderboardStatus("loading");
    try {
      const response = await fetch("/api/core-runner/scores", {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Leaderboard unavailable");
      const data = (await response.json()) as { scores?: ScoreEntry[] };
      const scores = Array.isArray(data.scores) ? data.scores.slice(0, 10) : [];
      setLeaderboard(scores);
      setBest((currentBest) =>
        Math.max(currentBest, scores[0]?.score ?? 0),
      );
      setLeaderboardStatus("ready");
    } catch {
      setLeaderboardStatus("error");
    }
  }, []);

  useEffect(() => {
    const saved = Number.parseInt(
      window.localStorage.getItem("rp-core-runner-best") ?? "0",
      10,
    );
    let frame = 0;
    frame = window.requestAnimationFrame(() => {
      setBest(Number.isFinite(saved) ? saved : 0);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => {
      void loadLeaderboard();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [loadLeaderboard, open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const changePhase = useCallback((next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const startGame = useCallback(() => {
    playerXRef.current = WIDTH / 2;
    objectsRef.current = [];
    keysRef.current.clear();
    scoreRef.current = 0;
    livesRef.current = 3;
    elapsedRef.current = 0;
    spawnRef.current = 0;
    invulnerableRef.current = 0;
    scorePaintRef.current = 0;
    setScore(0);
    setLives(3);
    setNickname("");
    setScoreSaved(false);
    setSaveError(false);
    setSavingScore(false);
    setShowLeaderboard(false);
    sessionTokenRef.current = null;
    void fetch("/api/core-runner/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Session unavailable");
        return (await response.json()) as { token?: string };
      })
      .then((data) => {
        sessionTokenRef.current =
          typeof data.token === "string" ? data.token : null;
      })
      .catch(() => {
        sessionTokenRef.current = null;
      });
    changePhase("playing");
  }, [changePhase]);

  const finishGame = useCallback(() => {
    const finalScore = Math.floor(scoreRef.current);
    setScore(finalScore);
    setBest((currentBest) => {
      const nextBest = Math.max(currentBest, finalScore);
      window.localStorage.setItem("rp-core-runner-best", String(nextBest));
      return nextBest;
    });
    setNickname("");
    setScoreSaved(false);
    changePhase("gameover");
  }, [changePhase]);

  const togglePause = useCallback(() => {
    if (phaseRef.current === "playing") {
      keysRef.current.clear();
      changePhase("paused");
    } else if (phaseRef.current === "paused") {
      changePhase("playing");
    }
  }, [changePhase]);

  useEffect(() => {
    if (!open) return;
    const keys = keysRef.current;

    function onKeyDown(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement) return;
      const key = event.key.toLowerCase();
      if (
        ["arrowleft", "arrowright", "a", "d", "q", "p", " "].includes(key)
      ) {
        event.preventDefault();
      }

      if (
        key === " " &&
        !showLeaderboard &&
        ["intro", "gameover"].includes(phaseRef.current)
      ) {
        startGame();
        return;
      }
      if (key === "p" && ["playing", "paused"].includes(phaseRef.current)) {
        togglePause();
        return;
      }
      keys.add(key);
    }

    function onKeyUp(event: KeyboardEvent) {
      keys.delete(event.key.toLowerCase());
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      keys.clear();
    };
  }, [open, showLeaderboard, startGame, togglePause]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    function drawShip(ctx: CanvasRenderingContext2D, time: number) {
      const x = playerXRef.current;
      const flashing =
        invulnerableRef.current > 0 && Math.floor(time / 80) % 2 === 0;
      if (flashing) ctx.globalAlpha = 0.25;

      ctx.save();
      ctx.translate(x, PLAYER_Y);
      const flame = 17 + Math.sin(time / 55) * 5;
      const flameGradient = ctx.createLinearGradient(0, 12, 0, 12 + flame);
      flameGradient.addColorStop(0, ACCENT);
      flameGradient.addColorStop(1, "rgba(255, 74, 26, 0)");
      ctx.fillStyle = flameGradient;
      ctx.beginPath();
      ctx.moveTo(-7, 12);
      ctx.lineTo(0, 12 + flame);
      ctx.lineTo(7, 12);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = PAPER;
      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "rgba(255, 74, 26, 0.35)";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(0, -22);
      ctx.lineTo(18, 15);
      ctx.lineTo(5, 10);
      ctx.lineTo(0, 16);
      ctx.lineTo(-5, 10);
      ctx.lineTo(-18, 15);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.fillStyle = INK;
      ctx.beginPath();
      ctx.arc(0, -3, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;
    }

    function drawMeteor(
      ctx: CanvasRenderingContext2D,
      object: FallingObject,
    ) {
      ctx.save();
      ctx.translate(object.x, object.y);
      ctx.rotate(object.rotation);
      ctx.fillStyle = INK_2;
      ctx.strokeStyle = "rgba(233, 229, 220, 0.55)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "rgba(233, 229, 220, 0.18)";
      ctx.shadowBlur = 8;
      ctx.beginPath();
      const points = 9;
      for (let index = 0; index < points; index += 1) {
        const angle = (index / points) * Math.PI * 2;
        const variance = index % 2 === 0 ? 1 : 0.78;
        const x = Math.cos(angle) * object.radius * variance;
        const y = Math.sin(angle) * object.radius * variance;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(233, 229, 220, 0.16)";
      ctx.beginPath();
      ctx.arc(-object.radius * 0.22, -object.radius * 0.1, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawCore(ctx: CanvasRenderingContext2D, object: FallingObject) {
      ctx.save();
      ctx.translate(object.x, object.y);
      ctx.rotate(object.rotation);
      ctx.strokeStyle = ACCENT;
      ctx.fillStyle = "rgba(255, 74, 26, 0.18)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = ACCENT;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      for (let index = 0; index < 6; index += 1) {
        const angle = (index / 6) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * object.radius;
        const y = Math.sin(angle) * object.radius;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = ACCENT;
      ctx.beginPath();
      ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function render(time: number) {
      const ctx = context!;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      const background = ctx.createRadialGradient(
        WIDTH / 2,
        HEIGHT * 0.72,
        10,
        WIDTH / 2,
        HEIGHT / 2,
        WIDTH * 0.7,
      );
      background.addColorStop(0, "#1c1917");
      background.addColorStop(0.52, "#100e0c");
      background.addColorStop(1, INK);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx.strokeStyle = GRID_LINE;
      ctx.lineWidth = 1;
      for (let x = 0; x <= WIDTH; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, HEIGHT);
        ctx.stroke();
      }
      for (let y = 0; y <= HEIGHT; y += 48) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(WIDTH, y);
        ctx.stroke();
      }

      for (const star of starsRef.current) {
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = PAPER;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }
      ctx.globalAlpha = 1;

      for (const object of objectsRef.current) {
        if (object.type === "meteor") drawMeteor(ctx, object);
        else drawCore(ctx, object);
      }

      drawShip(ctx, time);

      if (invulnerableRef.current > 0) {
        ctx.fillStyle = `rgba(255, 74, 26, ${Math.min(
          0.12,
          invulnerableRef.current * 0.08,
        )})`;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
      }
    }

    render(performance.now());
    if (phase !== "playing") return;

    let frameId = 0;
    let previous = performance.now();

    function frame(now: number) {
      if (phaseRef.current !== "playing") return;
      const delta = Math.min((now - previous) / 1000, 0.034);
      previous = now;
      elapsedRef.current += delta;
      invulnerableRef.current = Math.max(
        0,
        invulnerableRef.current - delta,
      );

      const movingLeft =
        keysRef.current.has("arrowleft") ||
        keysRef.current.has("a") ||
        keysRef.current.has("q");
      const movingRight =
        keysRef.current.has("arrowright") || keysRef.current.has("d");
      if (movingLeft) playerXRef.current -= 430 * delta;
      if (movingRight) playerXRef.current += 430 * delta;
      playerXRef.current = Math.max(
        27,
        Math.min(WIDTH - 27, playerXRef.current),
      );

      for (const star of starsRef.current) {
        star.y += star.speed * delta;
        if (star.y > HEIGHT) {
          star.y = 0;
          star.x = Math.random() * WIDTH;
        }
      }

      const difficulty = 1 + elapsedRef.current / 16;
      spawnRef.current -= delta * 1000;
      if (spawnRef.current <= 0) {
        const batchSize =
          elapsedRef.current >= 42 ? 3 : elapsedRef.current >= 24 ? 2 : 1;
        const coreChance = Math.max(0.08, 0.22 - elapsedRef.current * 0.002);

        for (let index = 0; index < batchSize; index += 1) {
          const isCore = Math.random() < coreChance;
          objectsRef.current.push({
            id: nextObjectIdRef.current++,
            type: isCore ? "core" : "meteor",
            x: 34 + Math.random() * (WIDTH - 68),
            y: -34 - index * 18,
            radius: isCore ? 13 : 15 + Math.random() * 12,
            speed:
              (isCore ? 140 : 165 + Math.random() * 75) * difficulty,
            rotation: Math.random() * Math.PI,
            rotationSpeed: (Math.random() - 0.5) * 3.2,
          });
        }
        spawnRef.current = Math.max(105, 650 - elapsedRef.current * 10);
      }

      const remaining: FallingObject[] = [];
      for (const object of objectsRef.current) {
        object.y += object.speed * delta;
        object.rotation += object.rotationSpeed * delta;
        const distance = Math.hypot(
          object.x - playerXRef.current,
          object.y - PLAYER_Y,
        );
        const collided = distance < object.radius + 17;

        if (collided && object.type === "core") {
          scoreRef.current += 100;
          continue;
        }
        if (
          collided &&
          object.type === "meteor" &&
          invulnerableRef.current <= 0
        ) {
          livesRef.current -= 1;
          setLives(livesRef.current);
          invulnerableRef.current = 0.85;
          if (livesRef.current <= 0) {
            finishGame();
            render(now);
            return;
          }
          continue;
        }
        if (object.y < HEIGHT + object.radius + 10) {
          remaining.push(object);
        }
      }
      objectsRef.current = remaining;

      scoreRef.current += delta * (20 + difficulty * 11);
      scorePaintRef.current += delta;
      if (scorePaintRef.current >= 0.08) {
        setScore(Math.floor(scoreRef.current));
        scorePaintRef.current = 0;
      }

      render(now);
      frameId = window.requestAnimationFrame(frame);
    }

    frameId = window.requestAnimationFrame(frame);
    return () => window.cancelAnimationFrame(frameId);
  }, [finishGame, phase]);

  function movePlayer(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (phaseRef.current !== "playing") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - bounds.left) / bounds.width) * WIDTH;
    playerXRef.current = Math.max(27, Math.min(WIDTH - 27, next));
  }

  function openScores() {
    if (phaseRef.current === "playing") {
      togglePause();
    }
    setShowLeaderboard(true);
  }

  async function saveScore(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = nickname.trim().slice(0, 12);
    const token = sessionTokenRef.current;
    if (!name || !token || scoreSaved || savingScore) {
      if (!token) setSaveError(true);
      return;
    }

    setSavingScore(true);
    setSaveError(false);
    try {
      const response = await fetch("/api/core-runner/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname: name, score, token }),
      });
      if (!response.ok) throw new Error("Score rejected");
      setScoreSaved(true);
      await loadLeaderboard();
      setShowLeaderboard(true);
    } catch {
      setSaveError(true);
    } finally {
      setSavingScore(false);
    }
  }

  function closeGame() {
    changePhase("intro");
    objectsRef.current = [];
    setShowLeaderboard(false);
    onRequestClose();
  }

  return (
    <dialog
      className="arcade-dialog"
      ref={dialogRef}
      aria-label={labels.title}
      onClose={closeGame}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeGame();
      }}
    >
      <div className="arcade-shell">
        <header className="arcade-bar">
          <div className="traffic-lights">
            <button
              className="traffic-light traffic-red"
              type="button"
              onClick={closeGame}
              aria-label={labels.close}
              title={labels.close}
            >
              <X size={9} />
            </button>
            <button
              className="traffic-light traffic-yellow"
              type="button"
              onClick={togglePause}
              disabled={!["playing", "paused"].includes(phase)}
              aria-label={phase === "paused" ? labels.resume : labels.pause}
              title={phase === "paused" ? labels.resume : labels.pause}
            >
              {phase === "paused" ? <Play size={8} /> : <Pause size={8} />}
            </button>
            <span className="traffic-light traffic-green" aria-hidden="true" />
          </div>
          <strong>{labels.title}</strong>
          <span className="arcade-status">
            <i />
            {phase === "playing" ? "live" : phase}
          </span>
        </header>

        <div className="arcade-hud" aria-live="polite">
          <p>
            <span>{labels.score}</span>
            <strong>{String(score).padStart(6, "0")}</strong>
          </p>
          <p>
            <span>{labels.best}</span>
            <strong>{String(best).padStart(6, "0")}</strong>
          </p>
          <p className="arcade-lives">
            <span>{labels.lives}</span>
            <strong aria-label={`${lives} ${labels.lives}`}>
              {Array.from({ length: 3 }, (_, index) => (
                <i className={index >= lives ? "is-lost" : ""} key={index} />
              ))}
            </strong>
          </p>
        </div>

        <div
          className={`arcade-stage${phase === "gameover" ? " is-gameover" : ""}`}
        >
          <canvas
            ref={canvasRef}
            width={WIDTH}
            height={HEIGHT}
            aria-label={labels.intro}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              movePlayer(event);
            }}
            onPointerMove={(event) => {
              if (event.buttons > 0 || event.pointerType === "touch") {
                movePlayer(event);
              }
            }}
          />

          {phase === "intro" && (
            <div className="arcade-overlay">
              <span className="arcade-kicker">{labels.subtitle}</span>
              <h2>CORE<br />RUNNER</h2>
              <p>{labels.intro}</p>
              <div className="arcade-overlay-actions">
                <button type="button" onClick={startGame}>
                  <Play size={15} fill="currentColor" />
                  {labels.start}
                </button>
                <button
                  className="arcade-secondary-button"
                  type="button"
                  onClick={openScores}
                >
                  {labels.leaderboard}
                </button>
              </div>
            </div>
          )}

          {phase === "paused" && (
            <div className="arcade-overlay arcade-overlay-compact">
              <span className="arcade-kicker">SYSTEM / PAUSE</span>
              <button type="button" onClick={togglePause}>
                <Play size={15} fill="currentColor" />
                {labels.resume}
              </button>
            </div>
          )}

          {phase === "gameover" && (
            <div className="arcade-overlay arcade-gameover">
              <span className="arcade-kicker">RUN / TERMINATED</span>
              <h2>{labels.gameOver}</h2>
              <p className="arcade-final-score">
                {labels.finalScore}
                <strong>{String(score).padStart(6, "0")}</strong>
              </p>
              <form className="arcade-score-form" onSubmit={saveScore}>
                <label htmlFor="core-runner-nickname">
                  {labels.nickname}
                </label>
                <div>
                  <input
                    id="core-runner-nickname"
                    value={nickname}
                    onChange={(event) => {
                      setNickname(event.target.value);
                      setSaveError(false);
                    }}
                    maxLength={12}
                    placeholder={labels.nicknamePlaceholder}
                    autoComplete="nickname"
                    disabled={scoreSaved || savingScore}
                  />
                  <button
                    type="submit"
                    disabled={
                      nickname.trim().length === 0 ||
                      scoreSaved ||
                      savingScore
                    }
                  >
                    {savingScore
                      ? labels.savingScore
                      : scoreSaved
                        ? labels.scoreSaved
                        : labels.saveScore}
                  </button>
                </div>
                {saveError && <span>{labels.saveScoreError}</span>}
              </form>
              <div className="arcade-overlay-actions">
                <button type="button" onClick={startGame}>
                  <Play size={15} fill="currentColor" />
                  {labels.replay}
                </button>
                <button
                  className="arcade-secondary-button"
                  type="button"
                  onClick={openScores}
                >
                  {labels.leaderboard}
                </button>
              </div>
            </div>
          )}

          {showLeaderboard && (
            <div className="arcade-overlay arcade-leaderboard">
              <button
                className="arcade-leaderboard-close"
                type="button"
                onClick={() => setShowLeaderboard(false)}
                aria-label={labels.closeLeaderboard}
                title={labels.closeLeaderboard}
              >
                <X size={16} />
              </button>
              <span className="arcade-kicker">GLOBAL / TOP 10</span>
              <h2>{labels.leaderboard}</h2>
              {leaderboardStatus === "loading" ? (
                <p className="arcade-leaderboard-message">LOADING...</p>
              ) : leaderboardStatus === "error" ? (
                <p className="arcade-leaderboard-message">
                  {labels.leaderboardUnavailable}
                </p>
              ) : leaderboard.length === 0 ? (
                <p className="arcade-leaderboard-message">
                  {labels.emptyLeaderboard}
                </p>
              ) : (
                <ol>
                  {leaderboard.map((entry, index) => (
                    <li key={`${entry.name}-${entry.date}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{entry.name}</strong>
                      <code>{String(entry.score).padStart(6, "0")}</code>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          )}
        </div>

        <footer className="arcade-footer">
          <span>{labels.controls}</span>
          <span>{labels.objective}</span>
          <div className="arcade-footer-actions">
            <button type="button" onClick={openScores}>
              {labels.leaderboard}
            </button>
            <button
              type="button"
              onClick={togglePause}
              disabled={!["playing", "paused"].includes(phase)}
            >
              {phase === "paused" ? labels.resume : labels.pause}
            </button>
          </div>
        </footer>
      </div>
    </dialog>
  );
}
