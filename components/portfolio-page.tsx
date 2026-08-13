import Image from "next/image";
import { ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";
import {
  Counter,
  Highlighted,
  Marquee,
  MaskedHeadline,
  Parallax,
  Reveal,
} from "@/components/anim";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { SiteChrome } from "@/components/chrome";
import { Hero } from "@/components/hero";
import { Lab } from "@/components/lab";
import { SiteHeader, type NavSection } from "@/components/site-header";
import { WorkList } from "@/components/work";
import { consoleStack, content, skillStacks, type Locale } from "@/lib/content";

const QORE_TAGS = [
  "Rust",
  "Tauri",
  "React 19",
  "TypeScript",
  "SQLx",
  "MongoDB",
  "Redis",
  "Docker",
];

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];

  const sections: NavSection[] = [
    { id: "manifesto", label: copy.nav.manifesto, index: "01" },
    { id: "work", label: copy.nav.work, index: "02" },
    { id: "skills", label: copy.nav.skills, index: "03" },
    { id: "lab", label: copy.nav.lab, index: "04" },
    { id: "about", label: copy.nav.about, index: "05" },
    { id: "contact", label: copy.nav.contact, index: "06" },
  ];

  return (
    <SiteChrome bootLabels={copy.boot}>
      <a className="skip-link" href="#main">
        {copy.aria.skip}
      </a>

      <SiteHeader copy={copy} locale={locale} sections={sections} />

      <main id="main">
        <Hero copy={copy} locale={locale} />

        <Marquee
          className="ticker"
          trackClassName="ticker-track"
          baseVelocity={2.2}
        >
          {copy.ticker.map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </Marquee>

        <section className="section manifesto" id="manifesto">
          <div className="shell manifesto-inner">
            <Reveal className="manifesto-title">
              <p className="mono index" style={{ color: "var(--ink-3)" }}>
                {copy.manifesto.index}
              </p>
              <h2 className="display" style={{ marginTop: "1.2rem" }}>
                {copy.manifesto.title}
              </h2>
            </Reveal>

            <Reveal className="manifesto-body" delay={0.08}>
              {copy.manifesto.paragraphs.map((paragraph, index) => (
                <Highlighted key={index} text={paragraph} />
              ))}
            </Reveal>

            <Reveal className="pull-quote" delay={0.12}>
              « {copy.manifesto.quote} »
            </Reveal>
          </div>
        </section>

        <div className="shell">
          <section aria-label={copy.aria.proof} className="stats">
            {copy.stats.map((stat) => (
              <div key={stat.label}>
                <strong>
                  <Counter value={stat.value} />
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </section>
        </div>

        <section className="section" id="work">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.work.index}</p>
              <h2 className="display">{copy.work.title}</h2>
              <p className="lead">{copy.work.lead}</p>
            </Reveal>

            <div className="featured">
              <Reveal className="featured-top mono">
                <span className="left">
                  <span>{copy.work.featuredLabel} / 001</span>
                  <span className="status">
                    <i className="pulse" />
                    {copy.work.status}
                  </span>
                </span>
                <span className="right">
                  <a
                    className="link"
                    href="https://qoredb.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {copy.work.visit}
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </a>
                  <a
                    className="link"
                    href="https://github.com/QoreDB/QoreDB"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {copy.work.source}
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </a>
                </span>
              </Reveal>

              <Reveal className="featured-head">
                <div>
                  <p className="kicker mono">{copy.work.kicker}</p>
                  <h3 className="display">QoreDB</h3>
                </div>
                <p className="tagline">{copy.work.tagline}</p>
              </Reveal>

              <Reveal delay={0.06}>
                <Parallax amount={7} className="featured-media">
                  <Image
                    alt={copy.aria.qoreImage}
                    height={946}
                    priority
                    sizes="(max-width: 60rem) 94vw, 1500px"
                    src="/images/projects/qoredb-query.png"
                    unoptimized
                    width={1436}
                  />
                </Parallax>
              </Reveal>

              <div className="featured-grid">
                <Reveal>
                  <h4>{copy.work.challengeLabel}</h4>
                  <p>{copy.work.challenge}</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h4>{copy.work.buildLabel}</h4>
                  <ul>
                    {copy.work.build.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.12}>
                  <h4>{copy.work.metricLabel}</h4>
                  <strong className="metric">
                    <Counter value={copy.work.metricValue} />
                  </strong>
                  <p>{copy.work.metricCaption}</p>
                </Reveal>
              </div>

              <Reveal className="featured-tags">
                <div className="tags" aria-label={copy.aria.qoreTech}>
                  {QORE_TAGS.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal>
              <p
                className="mono"
                style={{
                  marginTop: "clamp(3rem, 7vw, 6rem)",
                  color: "var(--ink-3)",
                }}
              >
                {copy.work.selectedLabel}
              </p>
            </Reveal>

            <WorkList copy={copy} />

            <Reveal className="archive">
              <p>{copy.work.archiveText}</p>
              <a
                className="link mono"
                href="https://github.com/raphplt?tab=repositories"
                rel="noreferrer"
                target="_blank"
              >
                {copy.work.archiveLink}
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.skills.index}</p>
              <h2 className="display">{copy.skills.title}</h2>
              <p className="lead">{copy.skills.lead}</p>
            </Reveal>

            <div className="skill-list">
              {copy.skills.items.map((item, index) => (
                <Reveal className="skill-row" key={item.title}>
                  <span className="num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display">{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="stack">{skillStacks[index]}</span>
                </Reveal>
              ))}
            </div>

            <Reveal className="console">
              <div className="console-bar">
                <span>stack.current</span>
                <span className="console-dots">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="console-body">
                {copy.skills.console.map((label, index) => (
                  <p key={label}>
                    <b>{label}</b>
                    {consoleStack[index]}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="lab">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.lab.index}</p>
              <h2 className="display">{copy.lab.title}</h2>
              <p className="lead">{copy.lab.lead}</p>
            </Reveal>

            <Lab copy={copy} />
          </div>
        </section>

        <section className="section" id="about">
          <div className="shell">
            <Reveal className="section-head">
              <p className="mono index">{copy.about.index}</p>
              <h2 className="display">{copy.about.title}</h2>
              <p className="lead">{copy.about.lead}</p>
            </Reveal>

            <div className="about-layout">
              <Reveal>
                <blockquote className="about-quote">
                  {copy.about.quote}
                </blockquote>
              </Reveal>

              <div className="principles">
                {copy.about.principles.map((principle, index) => (
                  <Reveal as="article" key={principle.title}>
                    <h3>
                      <i>{String(index + 1).padStart(2, "0")}</i>
                      {principle.title}
                    </h3>
                    <p>{principle.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="journey">
              <Reveal className="journey-head">
                <h3 className="display">{copy.about.journeyTitle}</h3>
                <span className="mono" style={{ color: "var(--ink-3)" }}>
                  {copy.about.journeyLabel}
                </span>
              </Reveal>

              <ol>
                {copy.about.journey.map((item, index) => (
                  <Reveal as="li" key={`${item.date}-${item.title}`}>
                    <span className="date">
                      {index === copy.about.journey.length - 1 && (
                        <i className="pulse" />
                      )}
                      {item.date}
                    </span>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="shell">
            <Reveal>
              <p className="mono index">{copy.contact.index}</p>
            </Reveal>

            <MaskedHeadline
              className="contact-title display"
              lines={copy.contact.lines}
            />

            <div className="contact-body">
              <Reveal>
                <p className="lead">{copy.contact.lead}</p>
                <a
                  className="contact-email"
                  data-cursor="label"
                  data-cursor-label={copy.contact.emailLabel}
                  href="mailto:raphael.plassart@gmail.com"
                  style={{ marginTop: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  raphael.plassart@gmail.com
                  <ArrowUpRight size={26} strokeWidth={2} />
                </a>
              </Reveal>

              <Reveal className="contact-side" delay={0.08}>
                <dl>
                  <dt>{copy.contact.location}</dt>
                  <dd>
                    <MapPin size={14} strokeWidth={1.8} />
                    48.8566° N, 2.3522° E
                  </dd>
                </dl>
                <dl>
                  <dt>{copy.hero.statusLabel}</dt>
                  <dd>
                    <i className="pulse" />
                    {copy.contact.availability}
                  </dd>
                </dl>
                <div className="contact-socials">
                  <a
                    href="https://github.com/raphplt"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GitHubIcon size={15} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rapha%C3%ABl-plassart/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon size={15} />
                    LinkedIn
                  </a>
                  <a download href="/cv-raphael-plassart.pdf">
                    <FileText size={15} strokeWidth={1.8} />
                    {copy.contact.cvLabel}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <Marquee className="contact-marquee" baseVelocity={1.6}>
            <div>
              <span>Raphaël Plassart ✳</span>
              <span>Raphaël Plassart ✳</span>
            </div>
          </Marquee>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <p className="footer-note">
            <b>{copy.footer.note}</b>
            {copy.footer.built}
          </p>

          <div className="footer-links">
            <a href="https://github.com/raphplt" rel="noreferrer" target="_blank">
              <GitHubIcon size={15} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rapha%C3%ABl-plassart/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
            <a href="mailto:raphael.plassart@gmail.com">
              <Mail size={15} strokeWidth={1.8} />
              Email
            </a>
          </div>

          <div className="footer-meta mono">
            <span>
              © {new Date().getFullYear()} Raphaël Plassart ·{" "}
              {copy.footer.rights}
            </span>
            <a className="link" href="#top">
              {copy.footer.top}
              <ArrowUpRight size={13} strokeWidth={2} />
            </a>
          </div>
        </div>
      </footer>
    </SiteChrome>
  );
}
