import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import { SiteChrome } from "@/components/chrome";
import { homeSections } from "@/components/portfolio-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { content, localePath, locales, type Locale } from "@/lib/content";
import { legal, legalPath, type LegalDocKey } from "@/lib/legal";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// Rend la syntaxe [libellé](url) des textes légaux en liens.
function renderLinks(text: string): ReactNode {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <Fragment key={index}>{part}</Fragment>;

    const [, label, href] = match;
    if (href.startsWith("/")) {
      return (
        <Link className="text-link" href={href} key={index}>
          {label}
        </Link>
      );
    }

    const external = href.startsWith("http");
    return (
      <a
        className="text-link"
        href={href}
        key={index}
        {...(external ? { rel: "noreferrer", target: "_blank" } : {})}
      >
        {label}
      </a>
    );
  });
}

export function LegalPage({
  locale,
  doc,
}: {
  locale: Locale;
  doc: LegalDocKey;
}) {
  const copy = content[locale];
  const page = legal[locale].docs[doc];

  const alternates = Object.fromEntries(
    locales.map((item) => [item, legalPath(item, doc)]),
  ) as Record<Locale, string>;

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

      <main className="legal" id="main">
        <header className="case-hero" id="top">
          <div className="shell">
            <div className="case-hero-top rise">
              <Link className="link mono" href={localePath(locale)}>
                <ArrowLeft size={14} strokeWidth={2} />
                Raphaël Plassart
              </Link>
              <span className="mono">{legal[locale].updated}</span>
            </div>

            <h1 className="legal-title display rise" style={delay(80)}>
              {page.title}
            </h1>
            <p className="legal-intro rise" style={delay(160)}>
              {page.intro}
            </p>
          </div>
        </header>

        <div className="shell">
          <div className="case-body legal-body">
            {page.sections.map((section) => (
              <section className="case-section" key={section.title}>
                <h2>{section.title}</h2>
                <div>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{renderLinks(paragraph)}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter copy={copy} locale={locale} />
    </SiteChrome>
  );
}
