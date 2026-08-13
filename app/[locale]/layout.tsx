import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { generateJsonLd } from "@/lib/json-ld";
import { fontVariables } from "@/lib/fonts";
import { isLocale } from "@/lib/content";
import { noScriptStyles, themeScript } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.raphael-plassart.com"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9e5dc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0a09" },
  ],
  colorScheme: "light dark",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fr") {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fontVariables}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
