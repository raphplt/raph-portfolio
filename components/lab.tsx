"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/anim";
import { AsciiField } from "@/components/ascii-field";
import { SpaceArcade } from "@/components/space-arcade";
import type { PortfolioContent } from "@/lib/content";
import { labProjects } from "@/lib/projects";

export function Lab({ copy }: { copy: PortfolioContent }) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Reveal>
        <div className="lab-game">
          <div className="lab-game-copy">
            <span className="kicker mono">{copy.lab.gameKicker}</span>
            <h3 className="display">Core Runner</h3>
            <p>{copy.lab.gameText}</p>
            <div>
              <button
                className="btn btn-solid"
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
          </div>
        </div>
      </Reveal>

      <div className="lab-grid">
        {labProjects.map((project, index) => (
          <Reveal delay={index * 0.06} key={project.slug}>
            <a
              className="lab-card"
              href={project.href}
              rel="noreferrer"
              target="_blank"
            >
              <div className="lab-card-media">
                <Image
                  alt={`${copy.aria.projectPreview} ${project.name}`}
                  fill
                  sizes="(max-width: 48rem) 94vw, (max-width: 72rem) 45vw, 23vw"
                  src={project.image}
                />
              </div>
              <div className="lab-card-top">
                <h3>{project.name}</h3>
                <span className="year">{project.year}</span>
              </div>
              <p>{copy.lab.items[project.slug]}</p>
              <div className="foot">
                <span>{project.tag}</span>
                <ArrowUpRight size={15} strokeWidth={2} />
              </div>
            </a>
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
