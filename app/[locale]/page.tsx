import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/portfolio-page";
import {
  content,
  isLocale,
  localePath,
  locales,
  type Locale,
} from "@/lib/content";

const translatedLocales = locales.filter((locale) => locale !== "fr");

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fr") {
    return {};
  }

  const copy = content[locale];

  return {
    metadataBase: new URL("https://www.raphael-plassart.com"),
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: localePath(locale),
      languages: {
        fr: "/",
        en: "/en",
        es: "/es",
        de: "/de",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "de_DE",
      url: localePath(locale),
      title: copy.meta.title,
      description: copy.meta.ogDescription,
      siteName: "Raphaël Plassart",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.ogDescription,
    },
  };
}

export default async function LocalizedPortfolio({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fr") {
    notFound();
  }

  return <PortfolioPage locale={locale as Locale} />;
}
