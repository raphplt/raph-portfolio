import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/anim";
import { SiteChrome } from "@/components/chrome";
import { homeSections } from "@/components/portfolio-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, caseStudyPath } from "@/lib/case-studies";
import { content, localePath, locales, type Locale } from "@/lib/content";
import {
  EMAIL,
  caseStudyAssets,
  caseStudyOrder,
  type CaseStudySlug,
} from "@/lib/projects";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function CaseStudyPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: CaseStudySlug;
}) {
  const copy = content[locale];
  const labels = copy.caseStudy;
  const asset = caseStudyAssets[slug];
  const study = caseStudies[slug][locale];

  const nextSlug =
    caseStudyOrder[(caseStudyOrder.indexOf(slug) + 1) % caseStudyOrder.length];
  const next = caseStudyAssets[nextSlug];
  const nextStudy = caseStudies[nextSlug][locale];

  const alternates = Object.fromEntries(
    locales.map((item) => [item, caseStudyPath(item, slug)]),
  ) as Record<Locale, string>;

  const meta = [
    [labels.role, study.role],
    [labels.period, study.period],
    [labels.team, study.team],
  ] as const;

  return (
    <SiteChrome>
      <a className="skip-link" href="#main">
        {copy.aria.skip}
      </a>

      <SiteHeader
        alternates={alternates}
        copy={copy}
        locale={locale}
        sections={homeSections(locale, localePath(locale))}
      />

      <main className="case" id="main">
        <header className="case-hero" id="top">
          <div className="shell">
            <div className="case-hero-top rise">
              <Link className="link mono" href={`${localePath(locale)}#work`}>
                <ArrowLeft size={14} strokeWidth={2} />
                {labels.back}
              </Link>
              <span className="mono">
                {labels.kicker} · {asset.year}
              </span>
            </div>

            <h1 className="case-title display rise" style={delay(80)}>
              {asset.name}
            </h1>

            <div className="case-intro">
              <div className="rise" style={delay(180)}>
                <p className="case-tagline">{study.tagline}</p>
                <p className="case-summary">{study.summary}</p>
              </div>

              <div className="case-meta rise" style={delay(260)}>
                <dl>
                  {meta.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt>{labels.stack}</dt>
                    <dd>{asset.stack.join(" · ")}</dd>
                  </div>
                </dl>
                {asset.links.length > 0 && (
                  <div className="case-links">
                    {asset.links.map((link) => (
                      <a
                        className="btn"
                        href={link.href}
                        key={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span>
                          {link.kind === "site" ? labels.visit : labels.source}
                          <ArrowUpRight size={15} strokeWidth={2} />
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="shell">
          <div className="case-cover plate rise" style={delay(340)}>
            <Image
              alt={study.coverAlt}
              height={asset.cover.height}
              priority
              sizes="(max-width: 100rem) 94vw, 1560px"
              src={asset.cover.src}
              width={asset.cover.width}
            />
          </div>

          <dl className="case-facts">
            {study.facts.map((fact, index) => (
              <Reveal delay={index * 0.05} key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </Reveal>
            ))}
          </dl>

          {!asset.links.some((link) => link.kind === "source") && (
            <Reveal>
              <p className="case-note">{labels.privateNote}</p>
            </Reveal>
          )}

          <div className="case-body">
            {study.sections.map((section) => (
              <Reveal as="article" className="case-section" key={section.title}>
                <h2>{section.title}</h2>
                <div>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {asset.gallery.length > 0 && (
            <div className="case-gallery">
              {asset.gallery.map((visual, index) => (
                <Reveal key={visual.src}>
                  <figure>
                    <div className="plate">
                      <Image
                        alt={study.captions[index] ?? ""}
                        height={visual.height}
                        sizes="(max-width: 60rem) 94vw, 1200px"
                        src={visual.src}
                        width={visual.width}
                      />
                    </div>
                    {study.captions[index] && (
                      <figcaption className="mono">
                        {study.captions[index]}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <section className="case-end">
          <div className="shell">
            <Reveal>
              <Link className="case-next" href={caseStudyPath(locale, nextSlug)}>
                <span className="mono">{labels.next}</span>
                <span className="display">
                  {next.name}
                  <ArrowRight size={40} strokeWidth={2.2} />
                </span>
                <span className="case-next-tagline">{nextStudy.tagline}</span>
              </Link>
            </Reveal>

            <Reveal className="case-contact">
              <div>
                <h2 className="display">{labels.contactTitle}</h2>
                <p>{labels.contactText}</p>
              </div>
              <a className="btn btn-solid" href={`mailto:${EMAIL}`}>
                <span>
                  {labels.contactCta}
                  <ArrowUpRight size={15} strokeWidth={2} />
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter copy={copy} locale={locale} />
    </SiteChrome>
  );
}
