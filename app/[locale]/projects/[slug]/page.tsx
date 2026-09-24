import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study-page";
import {
  caseStudyMetadata,
  isCaseStudySlug,
} from "@/lib/case-study-metadata";
import { isLocale, locales } from "@/lib/content";
import { caseStudyOrder } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "fr")
    .flatMap((locale) => caseStudyOrder.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale === "fr" || !isCaseStudySlug(slug)) {
    return {};
  }

  return caseStudyMetadata(locale, slug);
}

export default async function LocalizedCaseStudy({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale === "fr" || !isCaseStudySlug(slug)) {
    notFound();
  }

  return <CaseStudyPage locale={locale} slug={slug} />;
}
