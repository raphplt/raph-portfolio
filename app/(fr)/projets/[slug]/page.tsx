import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study-page";
import {
  caseStudyMetadata,
  isCaseStudySlug,
} from "@/lib/case-study-metadata";
import { caseStudyOrder } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return isCaseStudySlug(slug) ? caseStudyMetadata("fr", slug) : {};
}

export default async function FrenchCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) notFound();

  return <CaseStudyPage locale="fr" slug={slug} />;
}
