import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import type { CSSProperties } from "react";
import { AsciiField } from "@/components/ascii-field";
import type { PortfolioContent } from "@/lib/content";
import { EMAIL } from "@/lib/projects";
import { renderAccented, renderStrong } from "@/lib/rich-text";

// Entrées en CSS pur : le hero s'affiche dès le premier rendu, sans attendre
// l'hydratation (meilleur LCP, et rien de caché si le JS ne charge pas).
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero({ copy }: { copy: PortfolioContent }) {
  return (
    <section className="hero" id="top">
      <AsciiField className="ascii-field" />

      <div className="shell">
        <div className="hero-meta mono rise" style={delay(150)}>
          <span>{copy.hero.role}</span>
          <span>{copy.hero.base}</span>
        </div>

        <h1 className="hero-title display">
          {copy.hero.lines.map((line, index) => (
            <span className="line" key={index}>
              <span style={{ "--i": index } as CSSProperties}>
                {renderAccented(line)}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero-body">
          <div className="rise" style={delay(450)}>
            <p className="hero-lead">{renderStrong(copy.hero.lead)}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#work">
                <span>
                  {copy.hero.ctaWork}
                  <ArrowDown size={15} strokeWidth={2} />
                </span>
              </a>
              <a className="btn" download href="/cv-raphael-plassart.pdf">
                <span>
                  <FileText size={15} strokeWidth={1.8} />
                  {copy.hero.cv}
                </span>
              </a>
              <a className="btn" href={`mailto:${EMAIL}`}>
                <span>
                  {copy.hero.ctaContact}
                  <ArrowUpRight size={15} strokeWidth={2} />
                </span>
              </a>
            </div>
          </div>

          <dl className="hero-side rise" style={delay(600)}>
            <div className="hero-fact">
              <dt>{copy.hero.statusLabel}</dt>
              <dd>
                <i className="pulse" />
                {copy.hero.status}
              </dd>
            </div>
            <div className="hero-fact">
              <dt>{copy.hero.lookingLabel}</dt>
              <dd>{copy.hero.looking}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
