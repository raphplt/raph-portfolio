import type { Metadata, Viewport } from "next";
import "../globals.css";
import { generateJsonLd } from "@/lib/json-ld";
import { geist, geistMono } from "@/lib/fonts";
import { themeScript } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.raphael-plassart.com"),
  title: {
    default: "Raphaël Plassart - Full-stack Product Engineer",
    template: "%s - Raphaël Plassart",
  },
  description:
    "Développeur full-stack à Paris. Je conçois et livre des produits web, mobile et desktop, de l’architecture à la production. Créateur de QoreDB.",
  keywords: [
    "développeur full-stack Paris",
    "product engineer",
    "React",
    "Next.js",
    "React Native",
    "Rust",
    "Tauri",
    "NestJS",
    "DevOps",
    "QoreDB",
  ],
  authors: [{ name: "Raphaël Plassart", url: "https://github.com/raphplt" }],
  creator: "Raphaël Plassart",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
      es: "/es",
      de: "/de",
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "Raphaël Plassart — Full-stack Product Engineer",
    description:
      "Web, mobile, desktop et infrastructure. Des produits conçus de bout en bout.",
    siteName: "Raphaël Plassart",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphaël Plassart — Full-stack Product Engineer",
    description:
      "Web, mobile, desktop et infrastructure. Des produits conçus de bout en bout.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f0e9" },
    { media: "(prefers-color-scheme: dark)", color: "#101110" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
