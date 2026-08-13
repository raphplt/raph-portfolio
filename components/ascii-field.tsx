"use client";

import { useEffect, useRef } from "react";

const RAMP = " ·:-=+*#%@";
const CELL = 15;
const FPS = 26;

export function AsciiField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let inkColor = "rgba(16,14,12,0.55)";
    let accentColor = "#ff3b00";
    let monoFamily = "monospace";

    const pointer = { x: -1e4, y: -1e4, strength: 0 };

    const readColors = () => {
      const styles = getComputedStyle(parent);
      inkColor =
        styles.getPropertyValue("--ascii-ink").trim() || "rgba(16,14,12,0.5)";
      accentColor = styles.getPropertyValue("--accent").trim() || "#ff3b00";
      monoFamily = styles.getPropertyValue("--font-mono").trim() || "monospace";
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.textBaseline = "middle";
      context.textAlign = "center";
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.strength = 1;
    };

    let frame = 0;
    let last = 0;
    const started = performance.now();

    const draw = (now: number) => {
      frame = requestAnimationFrame(draw);

      if (now - last < 1000 / FPS) return;
      last = now;

      const time = (now - started) / 1000;
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const radius = Math.min(width, height) * 0.46;

      context.clearRect(0, 0, width, height);
      context.font = `500 ${CELL - 2}px ${monoFamily}, monospace`;

      pointer.strength *= 0.97;

      for (let row = 0; row < rows; row += 1) {
        const y = row * CELL + CELL / 2;

        for (let col = 0; col < cols; col += 1) {
          const x = col * CELL + CELL / 2;
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.hypot(dx, dy);

          if (distance > radius) continue;

          const falloff = 1 - distance / radius;
          const angle = Math.atan2(dy, dx);

          let value =
            Math.sin(distance * 0.055 - time * 1.15) * 0.5 +
            Math.sin(angle * 3 + time * 0.55) * 0.22 +
            falloff * 0.55;

          const pdx = x - pointer.x;
          const pdy = y - pointer.y;
          const pointerDistance = Math.hypot(pdx, pdy);

          if (pointerDistance < 150) {
            value += (1 - pointerDistance / 150) ** 2 * 1.15 * pointer.strength;
          }

          const level = Math.round(
            Math.max(0, Math.min(1, value)) * (RAMP.length - 1),
          );

          if (level <= 0) continue;

          context.fillStyle = level >= RAMP.length - 2 ? accentColor : inkColor;
          context.globalAlpha = 0.35 + (level / (RAMP.length - 1)) * 0.65;
          context.fillText(RAMP[level], x, y);
        }
      }

      context.globalAlpha = 1;
    };

    readColors();
    resize();
    frame = requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(parent);

    const themeObserver = new MutationObserver(readColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className={className}>
      <canvas ref={canvasRef} />
    </div>
  );
}
