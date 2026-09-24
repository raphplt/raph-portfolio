import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/legal-metadata";

export const metadata = legalMetadata("fr", "privacy");

export default function FrenchPrivacy() {
  return <LegalPage doc="privacy" locale="fr" />;
}
