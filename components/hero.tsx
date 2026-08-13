"use client";

import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { MaskedHeadline } from "@/components/anim";
import { AsciiField } from "@/components/ascii-field";
import { useAppReady } from "@/components/chrome";
import type { Locale, PortfolioContent } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function ParisClock({ locale }: { locale: Locale }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(locale, {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const tick = () => setTime(formatter.format(new Date()));

    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [locale]);

  return <span suppressHydrationWarning>{time ?? "—"}</span>;
}

export function Hero({
  copy,
  locale,
}: {
  copy: PortfolioContent;
  locale: Locale;
}) {
  const ready = useAppReady();
  const reduceMotion = useReducedMotion();
  const shown = ready || reduceMotion;

  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  return (
    <section className="hero" id="top">
      <AsciiField className="ascii-field" />

      <div className="shell">
        <motion.div className="hero-meta mono" {...fade(0.15)}>
          <span>{copy.hero.role}</span>
          <span>{copy.hero.place}</span>
          <span>© 2026</span>
        </motion.div>

        <MaskedHeadline
          as="h1"
          className="hero-title display"
          delay={0.1}
          lines={copy.hero.lines}
          waitForReady
        />

        <div className="hero-body">
          <motion.div {...fade(0.55)}>
            <p className="hero-lead">{copy.hero.lead}</p>
            <div className="hero-actions" style={{ marginTop: "1.6rem" }}>
              <a
                className="btn btn-solid"
                data-cursor="none"
                href="#work"
              >
                <span>
                  {copy.hero.ctaWork}
                  <ArrowDown size={15} strokeWidth={2} />
                </span>
              </a>
              <a
                className="btn"
                data-cursor="none"
                href="mailto:raphael.plassart@gmail.com"
              >
                <span>
                  {copy.hero.ctaContact}
                  <ArrowUpRight size={15} strokeWidth={2} />
                </span>
              </a>
              <a
                className="btn"
                data-cursor="none"
                download
                href="/cv-raphael-plassart.pdf"
              >
                <span>
                  <FileText size={15} strokeWidth={1.8} />
                  {copy.hero.cv}
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-side" {...fade(0.7)}>
            <dl className="hero-fact">
              <dt>{copy.hero.statusLabel}</dt>
              <dd>
                <i className="pulse" />
                {copy.hero.status}
              </dd>
            </dl>
            <dl className="hero-fact">
              <dt>{copy.hero.localTime}</dt>
              <dd>
                <ParisClock locale={locale} />
                <span style={{ color: "var(--ink-3)" }}>CET</span>
              </dd>
            </dl>
          </motion.div>
        </div>

        <motion.div className="hero-scroll mono" {...fade(0.85)}>
          <span>{copy.hero.scroll}</span>
          <ArrowDown className="arrow" size={15} strokeWidth={1.6} />
          <span>{copy.manifesto.index}</span>
        </motion.div>
      </div>
    </section>
  );
}
