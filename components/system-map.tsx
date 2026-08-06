"use client";

import { Maximize2, Minimize2, Pause, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SpaceArcade, type GameLabels } from "@/components/space-arcade";

type MapLabels = {
  title: string;
  expand: string;
  close: string;
  pause: string;
  play: string;
  reset: string;
  select: string;
  game: GameLabels;
};

const overview = {
  id: "overview",
  label: "END-TO-END",
  scope: "Product engineering",
  stack: "Interface → Core → Production",
  index: "00",
};

const nodes = [
  {
    id: "web",
    label: "WEB",
    detail: "Next.js",
    scope: "Product interfaces",
    stack: "React · Next.js · TypeScript",
    className: "node-web",
    path: "M300 215 126 75",
    index: "01",
  },
  {
    id: "mobile",
    label: "MOBILE",
    detail: "React Native",
    scope: "Cross-platform apps",
    stack: "React Native · Expo · Firebase",
    className: "node-mobile",
    path: "M300 215 474 75",
    index: "02",
  },
  {
    id: "backend",
    label: "BACKEND",
    detail: "NestJS",
    scope: "APIs & services",
    stack: "NestJS · Node.js · REST · GraphQL",
    className: "node-backend",
    path: "M300 215 108 215",
    index: "03",
  },
  {
    id: "data",
    label: "DATA",
    detail: "PostgreSQL",
    scope: "Data layer",
    stack: "PostgreSQL · MongoDB · Redis · SQLx",
    className: "node-data",
    path: "M300 215 492 215",
    index: "04",
  },
  {
    id: "desktop",
    label: "DESKTOP",
    detail: "Rust + Tauri",
    scope: "Native runtime",
    stack: "Rust · Tauri · Linux",
    className: "node-desktop",
    path: "M300 215 180 360",
    index: "05",
  },
  {
    id: "delivery",
    label: "DELIVERY",
    detail: "Docker",
    scope: "Production systems",
    stack: "Docker · CI/CD · Cloudflare · VPS",
    className: "node-delivery",
    path: "M300 215 420 360",
    index: "06",
  },
] as const;

type ActiveLayer = typeof overview | (typeof nodes)[number];

function SystemPanel({
  active,
  expanded,
  labels,
  motionOverride,
  paused,
  onActiveChange,
  onClose,
  onExpand,
  onLaunchGame,
  onPauseChange,
}: {
  active: ActiveLayer;
  expanded: boolean;
  labels: MapLabels;
  motionOverride: boolean;
  paused: boolean;
  onActiveChange: (layer: ActiveLayer) => void;
  onClose?: () => void;
  onExpand?: () => void;
  onLaunchGame: () => void;
  onPauseChange: (paused: boolean) => void;
}) {
  return (
    <div
      className={`system-map${paused ? " is-paused" : ""}${
        expanded ? " is-expanded" : ""
      }${motionOverride ? " is-motion-enabled" : ""}`}
      aria-label={labels.title}
    >
      <div className="system-bar">
        <div className="traffic-lights">
          <button
            className="traffic-light traffic-red"
            type="button"
            onClick={
              expanded ? onClose : () => onActiveChange(overview)
            }
            aria-label={expanded ? labels.close : labels.reset}
            title={expanded ? labels.close : labels.reset}
          >
            <X size={9} />
          </button>
          <button
            className="traffic-light traffic-yellow"
            type="button"
            onClick={() => onPauseChange(!paused)}
            aria-label={paused ? labels.play : labels.pause}
            title={paused ? labels.play : labels.pause}
          >
            {paused ? <Play size={8} /> : <Pause size={8} />}
          </button>
          <button
            className="traffic-light traffic-green"
            type="button"
            onClick={expanded ? onClose : onExpand}
            aria-label={expanded ? labels.close : labels.expand}
            title={expanded ? labels.close : labels.expand}
          >
            {expanded ? <Minimize2 size={8} /> : <Maximize2 size={8} />}
          </button>
        </div>
        <span>expertise.map / topology</span>
        <span className="system-status">
          <i />
          {paused ? "paused" : "online"}
        </span>
      </div>

      <div className="system-canvas">
        <svg
          className="system-links"
          viewBox="0 0 600 430"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="topology-hull"
            d="M126 75 474 75 492 215 420 360 180 360 108 215Z"
          />
          <path className="topology-axis" d="M300 34V396M42 215H558" />
          {nodes.map((node, index) => (
            <g key={node.id}>
              <path className="link-base" d={node.path} />
              <path
                className={`link-flow flow-${index + 1}${
                  active.id === node.id ? " is-active" : ""
                }`}
                d={node.path}
              />
            </g>
          ))}
          <circle cx="300" cy="215" r="79" className="orbit orbit-one" />
          <circle cx="300" cy="215" r="112" className="orbit orbit-two" />
          <circle cx="300" cy="215" r="145" className="orbit orbit-three" />
          <circle cx="300" cy="70" r="3" className="orbit-packet packet-one" />
          <circle cx="300" cy="360" r="2.5" className="orbit-packet packet-two" />
        </svg>

        <button
          className={`system-center${
            active.id === overview.id ? " is-active" : ""
          }`}
          type="button"
          onClick={onLaunchGame}
          aria-label={labels.game.start}
          title={labels.game.start}
        >
          <span className="center-kicker">PRODUCT CORE</span>
          <strong>RP</strong>
        </button>

        {nodes.map((node) => (
          <button
            className={`system-node ${node.className}${
              active.id === node.id ? " is-active" : ""
            }`}
            key={node.id}
            type="button"
            onClick={() => onActiveChange(node)}
            aria-label={`${labels.select}: ${node.label}`}
            aria-pressed={active.id === node.id}
          >
            <span>{node.label}</span>
            <small>{node.detail}</small>
          </button>
        ))}

      </div>

      <div className="system-inspector" key={active.id} aria-live="polite">
        <div className="inspector-index">
          <span>LAYER</span>
          <strong>{active.index} / 06</strong>
        </div>
        <div className="inspector-title">
          <span>{active.label}</span>
          <strong>{active.scope}</strong>
        </div>
        <code>{active.stack}</code>
        <span className="inspector-ready">
          <i />
          ready
        </span>
      </div>

    </div>
  );
}

export function SystemMap({ labels }: { labels: MapLabels }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ActiveLayer>(overview);
  const [paused, setPaused] = useState(false);
  const [motionOverride, setMotionOverride] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const frame = window.requestAnimationFrame(() => setPaused(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function openExpanded() {
    dialogRef.current?.showModal();
  }

  function closeExpanded() {
    dialogRef.current?.close();
  }

  function launchGame() {
    closeExpanded();
    setGameOpen(true);
  }

  function changePaused(nextPaused: boolean) {
    if (!nextPaused) setMotionOverride(true);
    setPaused(nextPaused);
  }

  return (
    <>
      <SystemPanel
        active={active}
        expanded={false}
        labels={labels}
        motionOverride={motionOverride}
        paused={paused}
        onActiveChange={setActive}
        onExpand={openExpanded}
        onLaunchGame={launchGame}
        onPauseChange={changePaused}
      />

      <dialog
        className="system-dialog"
        ref={dialogRef}
        aria-label={labels.title}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeExpanded();
          }
        }}
      >
        <SystemPanel
          active={active}
          expanded
          labels={labels}
          motionOverride={motionOverride}
          paused={paused}
          onActiveChange={setActive}
          onClose={closeExpanded}
          onLaunchGame={launchGame}
          onPauseChange={changePaused}
        />
      </dialog>

      <SpaceArcade
        labels={labels.game}
        open={gameOpen}
        onRequestClose={() => setGameOpen(false)}
      />
    </>
  );
}
