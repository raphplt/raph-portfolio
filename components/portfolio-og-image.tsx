import { ImageResponse } from "next/og";
import { caseStudies } from "@/lib/case-studies";
import { content, type Locale } from "@/lib/content";
import { caseStudyAssets, type CaseStudySlug } from "@/lib/projects";
import { stripMarkers } from "@/lib/rich-text";

const surfaces: Record<Locale, string> = {
  fr: "WEB · MOBILE · DESKTOP · INFRA",
  en: "WEB · MOBILE · DESKTOP · INFRA",
  es: "WEB · MÓVIL · ESCRITORIO · INFRA",
  de: "WEB · MOBIL · DESKTOP · INFRA",
};

const creatorLabels: Record<Locale, string> = {
  fr: "Créateur de QoreDB",
  en: "Creator of QoreDB",
  es: "Creador de QoreDB",
  de: "Schöpfer von QoreDB",
};

export const ogSize = { width: 1200, height: 630 };

export function createPortfolioOgImage(locale: Locale) {
  const copy = content[locale];
  const lines = copy.hero.lines.map(stripMarkers);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#e9e5dc",
          color: "#100e0c",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 22,
            borderBottom: "1px solid rgba(16,14,12,0.22)",
            fontSize: 20,
            letterSpacing: "0.16em",
          }}
        >
          <span style={{ fontWeight: 800 }}>RAPHAËL PLASSART</span>
          <span style={{ color: "#6e685e" }}>{copy.hero.base.toUpperCase()}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {lines.map((line, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                paddingLeft: index === 1 ? 72 : index === 2 ? 32 : 0,
                color: index === 2 ? "#ff3b00" : "#100e0c",
                fontSize: 92,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                textTransform: "uppercase",
              }}
            >
              {line}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 22,
            borderTop: "1px solid rgba(16,14,12,0.22)",
            color: "#46413a",
            fontSize: 20,
            letterSpacing: "0.1em",
          }}
        >
          <span>{surfaces[locale]}</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#100e0c",
              fontWeight: 700,
            }}
          >
            <span
              style={{
                display: "flex",
                width: 10,
                height: 10,
                background: "#ff3b00",
              }}
            />
            {creatorLabels[locale]}
          </span>
        </div>
      </div>
    ),
    ogSize,
  );
}

export function createCaseStudyOgImage(locale: Locale, slug: CaseStudySlug) {
  const asset = caseStudyAssets[slug];
  const study = caseStudies[slug][locale];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#e9e5dc",
          color: "#100e0c",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 22,
            borderBottom: "1px solid rgba(16,14,12,0.22)",
            fontSize: 20,
            letterSpacing: "0.16em",
          }}
        >
          <span style={{ fontWeight: 800 }}>RAPHAËL PLASSART</span>
          <span style={{ color: "#6e685e" }}>
            {content[locale].caseStudy.kicker.toUpperCase()} · {asset.year}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 18,
              fontSize: 150,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.85,
              textTransform: "uppercase",
            }}
          >
            {asset.name}
            <span
              style={{
                display: "flex",
                width: 26,
                height: 26,
                marginBottom: 14,
                background: "#ff3b00",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 920,
              color: "#46413a",
              fontSize: 34,
              lineHeight: 1.3,
            }}
          >
            {study.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 48,
            paddingTop: 22,
            borderTop: "1px solid rgba(16,14,12,0.22)",
            fontSize: 22,
          }}
        >
          {study.facts.slice(0, 3).map((fact) => (
            <span key={fact.label} style={{ display: "flex", gap: 10 }}>
              <b>{fact.value}</b>
              <span style={{ color: "#6e685e" }}>{fact.label}</span>
            </span>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
