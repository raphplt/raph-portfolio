import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/legal-metadata";

export const metadata = legalMetadata("fr", "legal");

export default function FrenchLegal() {
  return <LegalPage doc="legal" locale="fr" />;
}
