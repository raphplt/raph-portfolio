"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useState } from "react";
import type { PortfolioContent } from "@/lib/content";

export type ProjectAsset = {
  name: string;
  href: string;
  year: string;
  image: string;
  stack: string[];
};

export const projectAssets: ProjectAsset[] = [
  {
    name: "Melios",
    href: "https://raphplt.github.io/melios-web/",
    year: "2024",
    image: "/images/projects/Melios.png",
    stack: ["React Native", "Expo", "Firebase"],
  },
  {
    name: "Quori",
    href: "https://github.com/raphplt/quori",
    year: "2025",
    image: "/images/projects/Quori.png",
    stack: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    name: "TCG Nexus",
    href: "https://tcg-nexus.org/",
    year: "2025",
    image: "/images/projects/TCGNexus.png",
    stack: ["Next.js", "NestJS", "Python"],
  },
];

export function WorkList({ copy }: { copy: PortfolioContent }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { damping: 26, stiffness: 220, mass: 0.55 };
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);

  const projects = projectAssets.map((asset, index) => ({
    ...asset,
    ...copy.work.projects[index],
  }));

  return (
    <>
      <div
        className="work-list"
        onPointerMove={(event) => {
          pointerX.set(event.clientX + 28);
          pointerY.set(event.clientY - 110);
        }}
        onPointerLeave={() => setHovered(null)}
      >
        {projects.map((project, index) => (
          <a
            className="work-row"
            data-cursor="label"
            data-cursor-label={copy.work.view}
            href={project.href}
            key={project.name}
            onPointerEnter={() => setHovered(index)}
            rel="noreferrer"
            target="_blank"
          >
            <div className="work-row-inner">
              <span className="num">
                {String(index + 2).padStart(2, "0")} / {project.year}
              </span>
              <h3 className="display">
                {project.name}
                <ArrowUpRight size={30} strokeWidth={2.2} />
              </h3>
              <span className="type">{project.type}</span>
              <p className="desc">{project.description}</p>
              <span className="proof">{project.proof}</span>
              <span className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </span>
            </div>
          </a>
        ))}
      </div>

      {!reduceMotion && (
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              aria-hidden="true"
              className="hover-preview"
              exit={{ opacity: 0, scale: 0.94 }}
              initial={{ opacity: 0, scale: 0.94 }}
              style={{ x, y }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                alt=""
                height={480}
                sizes="22rem"
                src={projects[hovered].image}
                width={640}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
