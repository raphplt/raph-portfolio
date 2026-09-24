import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/anim";
import { caseStudies, caseStudyPath } from "@/lib/case-studies";
import type { Locale, PortfolioContent } from "@/lib/content";
import {
  caseStudyAssets,
  shippedProjects,
  type CaseStudySlug,
} from "@/lib/projects";

function CaseCard({
  slug,
  copy,
  locale,
}: {
  slug: "pulse" | "tcg-nexus";
  copy: PortfolioContent;
  locale: Locale;
}) {
  const asset = caseStudyAssets[slug];
  const text = copy.work.cases[slug];
  const study = caseStudies[slug][locale];

  return (
    <Link className="case-card" href={caseStudyPath(locale, slug)}>
      <div className="plate">
        <Image
          alt={study.coverAlt}
          height={asset.cover.height}
          sizes="(max-width: 60rem) 94vw, 48vw"
          src={asset.cover.src}
          width={asset.cover.width}
        />
      </div>
      <div className="case-card-body">
        <span className="kicker mono">
          {text.type} · {asset.year}
        </span>
        <h3 className="display">{asset.name}</h3>
        <p>{text.description}</p>
        <span className="case-card-foot">
          <span className="link mono">
            {copy.work.readCase}
            <ArrowRight size={14} strokeWidth={2} />
          </span>
        </span>
      </div>
    </Link>
  );
}

export function CaseStudyCards({
  copy,
  locale,
}: {
  copy: PortfolioContent;
  locale: Locale;
}) {
  const slugs: Exclude<CaseStudySlug, "qoredb">[] = ["pulse", "tcg-nexus"];

  return (
    <div className="case-grid">
      {slugs.map((slug, index) => (
        <Reveal delay={index * 0.08} key={slug}>
          <CaseCard copy={copy} locale={locale} slug={slug} />
        </Reveal>
      ))}
    </div>
  );
}

export function ShippedGrid({ copy }: { copy: PortfolioContent }) {
  return (
    <div className="shipped-grid">
      {shippedProjects.map((project, index) => {
        const text = copy.work.shipped[project.slug];

        return (
          <Reveal delay={index * 0.06} key={project.slug}>
            <a
              className="shipped-card"
              href={project.href}
              rel="noreferrer"
              target="_blank"
            >
              <div className="plate">
                <Image
                  alt={`${copy.aria.projectPreview} ${project.name}`}
                  height={project.image.height}
                  sizes="(max-width: 48rem) 94vw, (max-width: 72rem) 48vw, 31vw"
                  src={project.image.src}
                  width={project.image.width}
                />
              </div>
              <span className="kicker mono">
                {text.type} · {project.year}
              </span>
              <h3>
                {project.name}
                <ArrowUpRight size={18} strokeWidth={2} />
              </h3>
              <p>{text.description}</p>
              <span className="shipped-foot mono">
                <span className="proof">{text.proof}</span>
                <span>{project.stack.join(" · ")}</span>
              </span>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}
