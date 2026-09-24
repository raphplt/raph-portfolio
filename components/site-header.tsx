"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/projects";
import {
  languageNames,
  localePath,
  locales,
  type Locale,
  type PortfolioContent,
} from "@/lib/content";

// `href` vaut "#id" sur l'accueil et "/#id" (ou "/en#id"…) depuis une étude de cas.
export type NavSection = { id: string; label: string; href: string };

function ThemeToggle({ label }: { label: string }) {
  return (
    <button
      aria-label={label}
      className="icon-btn theme-toggle"
      onClick={() => {
        const root = document.documentElement;
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        root.style.colorScheme = next;
        try {
          window.localStorage.setItem("theme", next);
        } catch {}
      }}
      title={label}
      type="button"
    >
      <Sun className="sun" size={16} strokeWidth={1.8} />
      <Moon className="moon" size={16} strokeWidth={1.8} />
    </button>
  );
}

function LanguageMenu({
  locale,
  label,
  alternates,
}: {
  locale: Locale;
  label: string;
  alternates?: Record<Locale, string>;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const close = (event: Event) => {
      const menu = ref.current;
      if (menu?.open && !menu.contains(event.target as Node)) {
        menu.removeAttribute("open");
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && ref.current?.open) {
        ref.current.removeAttribute("open");
        ref.current.querySelector("summary")?.focus();
      }
    };

    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <details className="lang" ref={ref}>
      <summary aria-label={label} title={label}>
        {locale.toUpperCase()}
      </summary>
      <div>
        {locales.map((item) => (
          <Link
            aria-current={item === locale ? "page" : undefined}
            href={alternates?.[item] ?? localePath(item)}
            hrefLang={item}
            key={item}
            lang={item}
          >
            <span>{item.toUpperCase()}</span>
            {languageNames[item]}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader({
  copy,
  locale,
  sections,
  alternates,
}: {
  copy: PortfolioContent;
  locale: Locale;
  sections: NavSection[];
  alternates?: Record<Locale, string>;
}) {
  const { scrollYProgress } = useScroll();
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setStuck(current > 24);
      setHidden(current > 420 && current > previous && current - previous > 4);
      previous = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observed = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!observed.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    observed.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.dataset.locked = "true";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onEscape);

    return () => {
      delete document.body.dataset.locked;
      document.removeEventListener("keydown", onEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="header"
        data-hidden={hidden && !menuOpen}
        data-stuck={stuck}
      >
        <div className="shell header-inner">
          <a
            aria-label={copy.aria.top}
            className="brand"
            href={alternates ? localePath(locale) : "#top"}
          >
            <span className="brand-short">RP</span>
            <span className="brand-full">Raphaël Plassart</span>
            <i />
          </a>

          <nav aria-label={copy.aria.mainNav} className="nav">
            {sections.map((section) => (
              <a
                aria-current={active === section.id ? "true" : undefined}
                href={section.href}
                key={section.id}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageMenu
              alternates={alternates}
              label={copy.aria.language}
              locale={locale}
            />
            <ThemeToggle label={copy.aria.theme} />
            <a
              aria-label={copy.aria.github}
              className="icon-btn"
              href={GITHUB_URL}
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon size={16} />
            </a>
            <button
              aria-expanded={menuOpen}
              aria-label={copy.aria.openMenu}
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <Menu size={17} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          className="progress"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={{ y: 0 }}
            className="drawer"
            exit={{ y: "-100%" }}
            initial={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="drawer-top">
              <span className="brand">
                Raphaël Plassart
                <i />
              </span>
              <button
                aria-label={copy.aria.closeMenu}
                className="icon-btn"
                onClick={() => setMenuOpen(false)}
                type="button"
              >
                <X size={17} strokeWidth={1.8} />
              </button>
            </div>

            <nav aria-label={copy.aria.mobileNav}>
              {sections.map((section, index) => (
                <motion.a
                  animate={{ opacity: 1, y: 0 }}
                  className="display"
                  href={section.href}
                  initial={{ opacity: 0, y: 24 }}
                  key={section.id}
                  onClick={() => setMenuOpen(false)}
                  transition={{
                    delay: 0.12 + index * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {section.label}
                </motion.a>
              ))}
            </nav>

            <div className="drawer-bottom">
              <span className="mono">{copy.contact.availability}</span>
              <div className="footer-links">
                <a
                  href={GITHUB_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHubIcon size={15} />
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon size={15} />
                  LinkedIn
                </a>
                <a href={`mailto:${EMAIL}`}>
                  Email
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
