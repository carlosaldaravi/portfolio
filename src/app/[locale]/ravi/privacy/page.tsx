import LegalSections from "@/components/ravi/legal-sections";
import { pageMetadata } from "@/lib/metadata";

const SECTIONS = ["users", "data", "storage", "limitedUse", "revoke"].map((s) => `page.raviPrivacy.${s}`);

export const generateMetadata = pageMetadata({
  titleSuffix: (messages) => messages["page.raviPrivacy"] || "Ravi privacy policy",
  descriptionKey: "page.raviPrivacy.meta",
  path: "/ravi/privacy",
});

export default function RaviPrivacyPage() {
  return <LegalSections titleKey="page.raviPrivacy" sectionKeys={SECTIONS} />;
}
