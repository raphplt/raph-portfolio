"use client";

import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

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
      {children}
    </>
  );
}
