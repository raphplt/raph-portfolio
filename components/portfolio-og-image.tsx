import { ImageResponse } from "next/og";
import { content, type Locale } from "@/lib/content";

const taglines: Record<Locale, string> = {
  fr: "Des systèmes complexes. Des produits simples.",
  en: "Complex systems. Simple products.",
  es: "Sistemas complejos. Productos sencillos.",
  de: "Komplexe Systeme. Einfache Produkte.",
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

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px",
          background: "#0c0d0d",
          color: "#fffef9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.08em",
          }}
        >
          <span style={{ fontWeight: 800 }}>RP/</span>
          <span style={{ color: "#c8ff2e" }}>{copy.hero.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#c8ff2e",
              fontSize: 22,
              letterSpacing: "0.12em",
              marginBottom: 24,
            }}
          >
            FULL-STACK PRODUCT ENGINEER
          </span>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              fontSize: 83,
              fontWeight: 760,
              letterSpacing: "-0.06em",
              lineHeight: 0.94,
            }}
          >
            {taglines[locale]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#a3a69f",
            fontSize: 21,
          }}
        >
          <span>WEB · MOBILE · DESKTOP · DEVOPS</span>
          <span>{creatorLabels[locale]}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
