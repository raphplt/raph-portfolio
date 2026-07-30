import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Braces,
  CircleCheck,
  Database,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { SystemMap } from "@/components/system-map";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { content, type Locale } from "@/lib/content";

const projectAssets = [
  {
    name: "Melios",
    stack: ["React Native", "Expo", "Firebase", "Next.js"],
    image: "/images/projects/Melios.png",
    href: "https://raphplt.github.io/melios-web/",
    imageClass: "project-image-contain",
  },
  {
    name: "Quori",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    image: "/images/projects/Quori.png",
    href: "https://github.com/raphplt/quori",
    imageClass: "",
  },
  {
    name: "TCG Nexus",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Python"],
    image: "/images/projects/TCGNexus.png",
    href: "https://tcg-nexus.org/",
    imageClass: "",
  },
];

const expertiseAssets = [
  {
    index: "01",
    icon: Braces,
    stack: "React · Next.js · TypeScript · Tailwind",
  },
  {
    index: "02",
    icon: Smartphone,
    stack: "React Native · Expo · Firebase",
  },
  {
    index: "03",
    icon: MonitorCog,
    stack: "Rust · Tauri · Linux · SQLx",
  },
  {
    index: "04",
    icon: ServerCog,
    stack: "NestJS · PostgreSQL · Redis · Docker · CI/CD",
  },
];

const principleIcons = [Workflow, ShieldCheck, Zap];

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const projects = projectAssets.map((project, index) => ({
    ...project,
    ...copy.work.projects[index],
  }));
  const expertise = expertiseAssets.map((item, index) => ({
    ...item,
    ...copy.expertise.cards[index],
  }));
  const principles = copy.about.principles.map((item, index) => ({
    ...item,
    icon: principleIcons[index],
  }));

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={copy.aria.top}>
          RP<span>/</span>
        </a>

        <nav className="desktop-nav" aria-label={copy.aria.mainNav}>
          <a href="#work">{copy.nav.work}</a>
          <a href="#expertise">{copy.nav.expertise}</a>
          <a href="#about">{copy.nav.about}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher locale={locale} label={copy.aria.language} />
          <ThemeToggle label={copy.aria.theme} />
          <a
            className="icon-link"
            href="https://github.com/raphplt"
            target="_blank"
            rel="noreferrer"
            aria-label={copy.aria.github}
          >
            <GitHubIcon size={19} />
          </a>
          <details className="mobile-menu">
            <summary aria-label={copy.aria.openMenu}>
              <Menu size={21} />
            </summary>
            <nav aria-label={copy.aria.mobileNav}>
              <a href="#work">{copy.nav.work}</a>
              <a href="#expertise">{copy.nav.expertise}</a>
              <a href="#about">{copy.nav.about}</a>
              <a href="#contact">{copy.nav.contact}</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>{copy.hero.role}</span>
            <span>{copy.hero.location}</span>
          </p>
          <h1>
            {copy.hero.before}{" "}
            <span className="accent-underline">{copy.hero.accent}</span>{" "}
            {copy.hero.after}
          </h1>
          <p className="hero-intro">{copy.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {copy.hero.projects}
              <ArrowDown size={17} />
            </a>
            <a
              className="button button-secondary"
              href="mailto:raphael.plassart@gmail.com"
            >
              {copy.hero.talk}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-footnote">
            <span>{copy.hero.now}</span>
            <strong>{copy.hero.currentRole}</strong>
          </div>
        </div>

        <div className="hero-visual">
          <SystemMap
            labels={{
              title: copy.aria.systemMap,
              expand: copy.aria.expandMap,
              close: copy.aria.closeMap,
              pause: copy.aria.pauseMap,
              play: copy.aria.playMap,
              reset: copy.aria.resetMap,
              select: copy.aria.selectMapNode,
              game: copy.game,
            }}
          />
        </div>
      </section>

      <section className="proof-strip" aria-label={copy.aria.proof}>
        <div className="proof-item">
          <strong>4</strong>
          <span>{copy.proof[0]}</span>
        </div>
        <div className="proof-item">
          <strong>10k+</strong>
          <span>{copy.proof[1]}</span>
        </div>
        <div className="proof-item">
          <strong>3+</strong>
          <span>{copy.proof[2]}</span>
        </div>
        <div className="proof-item">
          <strong>7+</strong>
          <span>{copy.proof[3]}</span>
        </div>
      </section>

      <section className="work section-shell section-pad" id="work">
        <div className="section-heading">
          <p className="section-index">{copy.work.index}</p>
          <div>
            <h2>{copy.work.title}</h2>
            <p>{copy.work.intro}</p>
          </div>
        </div>

        <article className="qore-case">
          <div className="case-topline">
            <div>
              <span className="case-number">{copy.work.featured}</span>
              <span className="case-live">
                <i />
                {copy.work.active}
              </span>
            </div>
            <a
              href="https://github.com/QoreDB/QoreDB"
              target="_blank"
              rel="noreferrer"
            >
              {copy.work.github}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="case-intro">
            <div>
              <p className="case-kicker">FOUNDER · PRODUCT · ENGINEERING</p>
              <h3>QoreDB</h3>
            </div>
            <p>{copy.work.qoreIntro}</p>
          </div>

          <div className="qore-image">
            <Image
              src="/images/projects/qoredb-query.png"
              alt={copy.aria.qoreImage}
              width={1436}
              height={946}
              priority
              unoptimized
              sizes="(max-width: 900px) 94vw, 1200px"
            />
          </div>

          <div className="case-details">
            <div className="case-statement">
              <span>{copy.work.challenge}</span>
              <p>{copy.work.challengeText}</p>
            </div>
            <div className="case-build">
              <span>{copy.work.built}</span>
              <ul>
                {copy.work.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CircleCheck size={15} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="case-result">
              <span>{copy.work.today}</span>
              <strong>10 000+</strong>
              <p>{copy.work.downloads}</p>
            </div>
          </div>

          <div className="tag-row" aria-label={copy.aria.qoreTech}>
            {[
              "Rust",
              "Tauri",
              "React 19",
              "TypeScript",
              "SQLx",
              "MongoDB",
              "Redis",
              "Docker",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <a
                className="project-media"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${copy.aria.discover} ${project.name}`}
              >
                <Image
                  className={project.imageClass}
                  src={project.image}
                  alt={`${copy.aria.projectPreview} ${project.name}`}
                  fill
                  sizes="(max-width: 760px) 92vw, 32vw"
                />
                <span className="project-open">
                  <ExternalLink size={17} />
                </span>
                <span className="project-count">
                  {String(index + 2).padStart(3, "0")}
                </span>
              </a>
              <div className="project-body">
                <div className="project-title-row">
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span>{project.proof}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="archive-link">
          <p>{copy.work.archiveText}</p>
          <a
            href="https://github.com/raphplt?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {copy.work.archiveLink}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="expertise section-pad" id="expertise">
        <div className="section-shell">
          <div className="section-heading inverse">
            <p className="section-index">{copy.expertise.index}</p>
            <div>
              <h2>{copy.expertise.title}</h2>
              <p>{copy.expertise.intro}</p>
            </div>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <article className="expertise-card" key={item.title}>
                  <div className="expertise-card-top">
                    <span>{item.index}</span>
                    <Icon size={25} strokeWidth={1.6} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="expertise-stack">{item.stack}</span>
                </article>
              );
            })}
          </div>

          <div className="stack-console">
            <div className="console-title">
              <Terminal size={16} />
              <span>stack.current</span>
            </div>
            <div className="console-lines">
              <p>
                <span>{copy.expertise.console[0]}</span>
                React · Next.js · TypeScript · TanStack · Tailwind
              </p>
              <p>
                <span>{copy.expertise.console[1]}</span>
                NestJS · Node.js · REST · GraphQL · Rust
              </p>
              <p>
                <span>{copy.expertise.console[2]}</span>
                PostgreSQL · MySQL · MongoDB · Redis · SQLite
              </p>
              <p>
                <span>{copy.expertise.console[3]}</span>
                Docker · GitHub Actions · Linux · VPS · Cloudflare
              </p>
            </div>
            <div className="console-icons" aria-hidden="true">
              <Boxes size={22} />
              <Database size={22} />
              <GitBranch size={22} />
            </div>
          </div>
        </div>
      </section>

      <section className="about section-shell section-pad" id="about">
        <div className="section-heading">
          <p className="section-index">{copy.about.index}</p>
          <div>
            <h2>{copy.about.title}</h2>
            <p>{copy.about.intro}</p>
          </div>
        </div>

        <div className="about-layout">
          <blockquote>{copy.about.quote}</blockquote>
          <div className="principles">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title}>
                  <Icon size={20} />
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="journey">
          <div className="journey-intro">
            <p className="section-index">{copy.about.journeyIndex}</p>
            <h3>{copy.about.journeyTitle}</h3>
          </div>
          <ol>
            {copy.about.journey.map((item) => (
              <li key={`${item.date}-${item.title}`}>
                <span>{item.date}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="section-index">{copy.contact.index}</p>
          <h2>
            {copy.contact.title}
            <br />
            <span>{copy.contact.titleAccent}</span>
          </h2>
          <p>{copy.contact.intro}</p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="mailto:raphael.plassart@gmail.com"
            >
              <Mail size={18} />
              raphael.plassart@gmail.com
            </a>
            <a
              className="button button-outline"
              href="https://github.com/raphplt"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={18} />
              {copy.contact.github}
            </a>
          </div>
          <div className="contact-meta">
            <span>
              <MapPin size={15} />
              {copy.contact.location}
            </span>
            <span>
              <i />
              {copy.contact.availability}
            </span>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <a className="brand brand-footer" href="#top" aria-label={copy.aria.top}>
            RP<span>/</span>
          </a>
          <p>
            {copy.footer}
            <br />
            © {new Date().getFullYear()} Raphaël Plassart
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/raphplt"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={17} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rapha%C3%ABl-plassart/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon size={17} />
              LinkedIn
            </a>
            <a href="mailto:raphael.plassart@gmail.com">
              <Mail size={17} />
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
