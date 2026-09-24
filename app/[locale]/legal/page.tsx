import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { isLocale, locales } from "@/lib/content";
import { legalMetadata } from "@/lib/legal-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "fr")
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) && locale !== "fr"
    ? legalMetadata(locale, "legal")
    : {};
}

export default async function LocalizedLegal({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fr") notFound();

  return <LegalPage doc="legal" locale={locale} />;
}
