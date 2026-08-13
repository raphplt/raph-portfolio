"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/anim";
import { AsciiField } from "@/components/ascii-field";
import { SpaceArcade } from "@/components/space-arcade";
import type { PortfolioContent } from "@/lib/content";

type LabAsset = {
  name: string;
  href: string;
  year: string;
  image: string;
  tag: string;
};

const labAssets: LabAsset[] = [
  {
    name: "Penfolio",
    href: "https://github.com/raphplt/portfolio-maker",
    year: "2025",
    image: "/images/projects/Penfolio.png",
    tag: "Next.js · NestJS",
  },
  {
    name: "Verifact",
    href: "https://github.com/raphplt/verifact",
    year: "2024",
    image: "/images/projects/Verifact.png",
    tag: "TypeScript · IA",
  },
  {
    name: "Clear Mind",
    href: "https://github.com/raphplt/clear-mind",
    year: "2024",
    image: "/images/projects/Clear-Mind.png",
    tag: "Extension · JS",
  },
  {
    name: "Novacoach",
    href: "https://github.com/raphplt/novacoach",
    year: "2024",
    image: "/images/projects/Novacoach.png",
    tag: "TypeScript · SaaS",
  },
  {
    name: "Myriade",
    href: "https://github.com/raphplt/myriade",
    year: "2024",
    image: "/images/projects/Myriade.png",
    tag: "Python · Search",
  },
  {
    name: "Pokélab",
    href: "https://github.com/raphplt/pokelab",
    year: "2025",
    image: "/images/projects/Pok%C3%A9lab.png",
    tag: "Svelte · API",
  },
  {
    name: "WorthIt",
    href: "https://github.com/raphplt/worth-it",
    year: "2025",
    image: "/images/projects/WorthIt.png",
    tag: "TypeScript",
  },
  {
    name: "Raphotos",
    href: "https://github.com/raphplt/raphotos",
    year: "2026",
    image: "/images/projects/Raphotos.png",
    tag: "Next.js · Photo",
  },
];

export function Lab({ copy }: { copy: PortfolioContent }) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Reveal>
        <div className="lab-game">
          <div className="lab-game-copy">
            <span className="mono" style={{ color: "var(--ink-3)" }}>
              {copy.lab.gameKicker}
            </span>
            <h3 className="display">Core Runner</h3>
            <p>{copy.lab.gameText}</p>
            <div>
              <button
                className="btn btn-solid"
                data-cursor="none"
                onClick={() => setPlaying(true)}
                type="button"
              >
                <span>
                  <Play size={14} strokeWidth={2} />
                  {copy.lab.gamePlay}
                </span>
              </button>
            </div>
          </div>

          <div className="lab-game-visual">
            <AsciiField className="lab-ascii" />
            <span className="lab-game-tag mono">RP // CORE RUNNER</span>
          </div>
        </div>
      </Reveal>

      <div className="lab-grid">
        {labAssets.map((asset, index) => (
          <Reveal
            className="lab-card"
            delay={(index % 4) * 0.06}
            key={asset.name}
          >
            <div className="lab-card-media">
              <Image
                alt={`${copy.aria.projectPreview} ${asset.name}`}
                fill
                sizes="(max-width: 48rem) 92vw, (max-width: 80rem) 45vw, 24vw"
                src={asset.image}
              />
            </div>
            <div className="lab-card-top">
              <h3>{asset.name}</h3>
              <span className="year">{asset.year}</span>
            </div>
            <p>{copy.lab.items[index].text}</p>
            <div className="foot">
              <span>{asset.tag}</span>
              <a
                data-cursor="label"
                data-cursor-label={copy.work.view}
                href={asset.href}
                rel="noreferrer"
                target="_blank"
              >
                <span className="visually-hidden">
                  {copy.aria.discover} {asset.name}
                </span>
                <ArrowUpRight size={15} strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <SpaceArcade
        labels={copy.game}
        onRequestClose={() => setPlaying(false)}
        open={playing}
      />
    </>
  );
}
