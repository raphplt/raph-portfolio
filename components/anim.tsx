"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useAppReady } from "@/components/chrome";
import { renderAccented } from "@/lib/rich-text";

const EASE = [0.22, 1, 0.36, 1] as const;

const REVEAL_TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
} as const;

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  distance = 26,
  once = true,
}: {
  as?: keyof typeof REVEAL_TAGS;
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const Tag = REVEAL_TAGS[as];

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: distance }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({
  children,
  className,
  gap = 0.08,
  distance = 26,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ staggerChildren: gap }}
      viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
      whileInView="shown"
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: distance },
                shown: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: EASE },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

export function MaskedHeadline({
  as: Tag = "h2",
  lines,
  className,
  waitForReady = false,
  delay = 0,
}: {
  as?: "h1" | "h2";
  lines: readonly string[];
  className?: string;
  waitForReady?: boolean;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ready = useAppReady();
  const containerRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const active = waitForReady ? ready : inView;

  if (reduceMotion) {
    return (
      <Tag className={className} ref={containerRef}>
        {lines.map((line, index) => (
          <span className="line" key={index}>
            <span>{renderAccented(line)}</span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} ref={containerRef}>
      {lines.map((line, index) => (
        <span className="line" key={index}>
          <motion.span
            animate={active ? { y: "0%" } : { y: "108%" }}
            initial={{ y: "108%" }}
            transition={{
              duration: 1,
              ease: EASE,
              delay: delay + index * 0.085,
            }}
          >
            {renderAccented(line)}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

function parseValue(value: string) {
  const match = value.match(/\d[\d\s .,]*\d|\d/);

  if (!match) return null;

  const raw = match[0];
  const separator = raw.replace(/\d/g, "").trim() || raw.replace(/\d/g, "")[0] || "";
  const target = Number(raw.replace(/\D/g, ""));

  if (!Number.isFinite(target)) return null;

  return {
    target,
    separator,
    prefix: value.slice(0, match.index ?? 0),
    suffix: value.slice((match.index ?? 0) + raw.length),
  };
}

function group(value: number, separator: string) {
  const digits = String(value);
  return separator
    ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : digits;
}

export function Counter({ value }: { value: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const parsed = parseValue(value);

    if (!parsed || reduceMotion || !inView) return;

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 4;
      const current = Math.round(eased * parsed.target);

      setDisplay(
        `${parsed.prefix}${group(current, parsed.separator)}${parsed.suffix}`,
      );

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  if (display !== null) {
    return <span ref={ref}>{display}</span>;
  }

  const parsed = reduceMotion ? null : parseValue(value);

  return (
    <span ref={ref}>
      {parsed ? `${parsed.prefix}0${parsed.suffix}` : value}
    </span>
  );
}

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

export function Marquee({
  children,
  baseVelocity = 2.4,
  className,
  trackClassName,
}: {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
  trackClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (value) => `${wrap(-50, 0, value)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;

    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();

    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;

    moveBy += direction.current * moveBy * Math.abs(factor);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={className}>
      <motion.div className={trackClassName} style={{ x }}>
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function Parallax({
  children,
  className,
  amount = 12,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amount}%`, `${amount}%`],
  );

  return (
    <div className={className} ref={ref}>
      <motion.div
        style={{ height: "100%", y: reduceMotion ? 0 : y }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Highlighted({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -18% 0px" });

  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <p className={className} ref={ref}>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span className="mark" data-lit={inView} key={index}>
            {part.slice(2, -2)}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  );
}
