import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import {
  Counter,
  Highlighted,
  Marquee,
  MaskedHeadline,
  Reveal,
} from "@/components/anim";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { SiteChrome } from "@/components/chrome";
import { Hero } from "@/components/hero";
import { Lab } from "@/components/lab";
import { SiteFooter, atlasUrl } from "@/components/site-footer";
import { SiteHeader, type NavSection } from "@/components/site-header";
import { CaseStudyCards, ShippedGrid } from "@/components/work";
import { caseStudyPath } from "@/lib/case-studies";
import { content, skillStacks, type Locale } from "@/lib/content";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  caseStudyAssets,
} from "@/lib/projects";
import { renderAccented } from "@/lib/rich-text";

const qoredb = caseStudyAssets.qoredb;

export function homeSections(locale: Locale, prefix = ""): NavSection[] {
  const nav = content[locale].nav;

  return (
    [
      ["work", nav.work],
      ["experience", nav.experience],
      ["skills", nav.skills],
      ["approach", nav.approach],
      ["lab", nav.lab],
      ["contact", nav.contact],
    ] as const
  ).map(([id, label]) => ({ id, label, href: `${prefix}#${id}` }));
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const featured = copy.work.featured;

  return (
    <SiteChrome>
      <a className="skip-link" href="#main">
        {copy.aria.skip}
      </a>

      <SiteHeader
        copy={copy}
        locale={locale}
        sections={homeSections(locale)}
      />

      <main id="main">
        <Hero copy={copy} />

        <section className="section" id="work">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.work.label}</p>
              <h2 className="display">{copy.work.title}</h2>
              <p className="lead">{copy.work.lead}</p>
            </Reveal>

            <div className="featured">
              <Reveal className="featured-top mono">
                <span className="left">
                  <span>{featured.kicker}</span>
                  <span className="status">
                    <i className="pulse" />
                    {featured.status}
                  </span>
                </span>
                <span className="right">
                  {qoredb.links.map((link) => (
                    <a
                      className="link"
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.kind === "site"
                        ? copy.work.visit
                        : copy.work.source}
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </a>
                  ))}
                </span>
              </Reveal>

              {/* Texte à gauche, capture à droite qui reste visible pendant la lecture. */}
              <div className="featured-layout">
                <Reveal className="featured-head">
                  <h3 className="display">QoreDB</h3>
                  <p className="tagline">{featured.tagline}</p>
                </Reveal>

                <Reveal className="featured-visual" delay={0.06}>
                  <Link
                    aria-label={`${copy.work.readCase} · QoreDB`}
                    className="featured-media"
                    href={caseStudyPath(locale, "qoredb")}
                  >
                    <Image
                      alt={copy.aria.qoreImage}
                      height={qoredb.cover.height}
                      priority
                      sizes="(max-width: 64rem) 94vw, 60vw"
                      src={qoredb.cover.src}
                      width={qoredb.cover.width}
                    />
                  </Link>
                </Reveal>

                <div className="featured-points">
                  <Reveal>
                    <h4>{featured.challengeLabel}</h4>
                    <p>{featured.challenge}</p>
                  </Reveal>
                  <Reveal>
                    <h4>{featured.buildLabel}</h4>
                    <ul>
                      {featured.build.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal className="featured-metric">
                    <h4>{featured.metricLabel}</h4>
                    <strong className="metric">
                      <Counter value={featured.metricValue} />
                    </strong>
                    <p>{featured.metricCaption}</p>
                  </Reveal>
                </div>

                <Reveal className="featured-foot">
                  <div className="tags" aria-label={copy.aria.qoreTech}>
                    {qoredb.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    className="btn btn-solid"
                    href={caseStudyPath(locale, "qoredb")}
                  >
                    <span>
                      {copy.work.readCase}
                      <ArrowRight size={15} strokeWidth={2} />
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <p className="subhead mono">{copy.work.casesLabel}</p>
            </Reveal>
            <CaseStudyCards copy={copy} locale={locale} />

            <Reveal>
              <p className="subhead mono">{copy.work.shippedLabel}</p>
            </Reveal>
            <ShippedGrid copy={copy} />

            <Reveal className="archive">
              <p>{copy.work.archiveText}</p>
              <a
                className="link mono"
                href={`${GITHUB_URL}?tab=repositories`}
                rel="noreferrer"
                target="_blank"
              >
                {copy.work.archiveLink}
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.experience.label}</p>
              <h2 className="display">{copy.experience.title}</h2>
              <p className="lead">{copy.experience.lead}</p>
            </Reveal>

            <div className="jobs">
              {copy.experience.jobs.map((job) => (
                <Reveal as="article" className="job" key={job.company}>
                  <div className="job-meta mono">
                    <span>{job.period}</span>
                    <span>{job.place}</span>
                  </div>
                  <div className="job-main">
                    <h3>
                      <span className="display">{job.company}</span>
                      <span className="job-role">{job.role}</span>
                    </h3>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="job-foot">
                      <span className="mono">{job.stack}</span>
                      {job.caseStudy && (
                        <Link
                          className="link mono"
                          href={caseStudyPath(locale, job.caseStudy)}
                        >
                          {copy.experience.readCase}
                          <ArrowRight size={14} strokeWidth={2} />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="education">
              <p className="mono">{copy.experience.educationLabel}</p>
              <ul>
                {copy.experience.education.map((degree) => (
                  <li key={degree.title}>
                    <span className="mono">{degree.period}</span>
                    <strong>{degree.title}</strong>
                    <span>{degree.school}</span>
                  </li>
                ))}
              </ul>
              <a
                className="link mono"
                download
                href="/cv-raphael-plassart.pdf"
              >
                <FileText size={14} strokeWidth={1.8} />
                {copy.experience.cv}
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.skills.label}</p>
              <h2 className="display">{copy.skills.title}</h2>
              <p className="lead">{copy.skills.lead}</p>
            </Reveal>

            <div className="skill-list">
              {copy.skills.items.map((item, index) => (
                <Reveal className="skill-row" key={item.title}>
                  <h3 className="display">{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="stack">{skillStacks[index]}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="shell approach-inner">
            <Reveal className="approach-title">
              <p className="mono index">{copy.approach.label}</p>
              <h2 className="display">{copy.approach.title}</h2>
            </Reveal>

            <Reveal className="manifesto-body" delay={0.06}>
              {copy.approach.paragraphs.map((paragraph, index) => (
                <Highlighted key={index} text={paragraph} />
              ))}
            </Reveal>

            <Reveal className="pull-quote" delay={0.1}>
              {copy.approach.quote}
            </Reveal>

            <div className="principles">
              {copy.approach.principles.map((principle) => (
                <Reveal as="article" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="lab">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.lab.label}</p>
              <h2 className="display">{copy.lab.title}</h2>
              <p className="lead">{copy.lab.lead}</p>
            </Reveal>

            <Lab copy={copy} />
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="shell">
            <Reveal>
              <p className="mono index">{copy.contact.label}</p>
            </Reveal>

            <MaskedHeadline
              className="contact-title display"
              lines={copy.contact.lines}
            />

            <div className="contact-body">
              <Reveal>
                <p className="lead">{copy.contact.lead}</p>
                <a className="contact-email" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                  <ArrowUpRight size={26} strokeWidth={2} />
                </a>
              </Reveal>

              <Reveal className="contact-side" delay={0.08}>
                <dl>
                  <dt>{copy.contact.statusLabel}</dt>
                  <dd>
                    <i className="pulse" />
                    {copy.contact.availability}
                  </dd>
                </dl>
                <dl>
                  <dt>{copy.contact.locationLabel}</dt>
                  <dd>
                    <MapPin size={14} strokeWidth={1.8} />
                    {copy.contact.location}
                  </dd>
                </dl>
                <div className="contact-socials">
                  <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
                    <LinkedInIcon size={15} />
                    LinkedIn
                  </a>
                  <a href={GITHUB_URL} rel="noreferrer" target="_blank">
                    <GitHubIcon size={15} />
                    GitHub
                  </a>
                  <a download href="/cv-raphael-plassart.pdf">
                    <FileText size={15} strokeWidth={1.8} />
                    {copy.contact.cvLabel}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="contact-atlas">
              <p className="mono">{copy.contact.atlas.label}</p>
              <p className="contact-atlas-text">
                {renderAccented(copy.contact.atlas.text)}
              </p>
              <a
                className="contact-atlas-link"
                href={atlasUrl(locale)}
                rel="noopener"
                target="_blank"
              >
                <span>
                  {copy.contact.atlas.cta}
                  <small>atlas.raphael-plassart.com</small>
                </span>
                <ArrowUpRight size={22} strokeWidth={2} />
              </a>
            </Reveal>
          </div>

          <Marquee className="contact-marquee" baseVelocity={1.6}>
            <div>
              <span>Raphaël Plassart ✳</span>
              <span>Raphaël Plassart ✳</span>
            </div>
          </Marquee>
        </section>
      </main>

      <SiteFooter copy={copy} locale={locale} />
    </SiteChrome>
  );
}
