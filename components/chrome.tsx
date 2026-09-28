"use client";

import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      touchMultiplier: 1.6,
    });

    document.documentElement.dataset.lenis = "on";

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      const id = anchor?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;

      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -72 });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete document.documentElement.dataset.lenis;
    };
  }, [enabled]);
}

type CursorState = "idle" | "link" | "label";

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<CursorState>("idle");

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pointer };
    let visible = false;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      if (!visible) {
        visible = true;
        ringPos.x = pointer.x;
        ringPos.y = pointer.y;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.(
        "[data-cursor], a, button, summary",
      ) as HTMLElement | null;

      if (!target) {
        setState("idle");
        return;
      }

      const declared = target.dataset.cursor;

      if (declared === "label") {
        if (labelRef.current) {
          labelRef.current.textContent = target.dataset.cursorLabel ?? "";
        }
        setState("label");
        return;
      }

      setState(declared === "none" ? "idle" : "link");
    };

    const render = () => {
      ringPos.x += (pointer.x - ringPos.x) * 0.16;
      ringPos.y += (pointer.y - ringPos.y) * 0.16;
      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="cursor-dot" ref={dotRef} style={{ opacity: 0 }} />
      <div
        aria-hidden="true"
        className="cursor-ring"
        data-state={state}
        ref={ringRef}
        style={{ opacity: 0 }}
      >
        <b ref={labelRef} />
      </div>
    </>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  // Lenis démarre après le premier rendu pour ne pas retarder l'affichage.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useLenis(!reduceMotion && mounted);

  return (
    <>
      <div aria-hidden="true" className="grain" />
      <div aria-hidden="true" className="grid-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
      {mounted && !reduceMotion && <Cursor />}
      {children}
    </>
  );
}
