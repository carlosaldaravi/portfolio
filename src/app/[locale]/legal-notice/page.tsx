import LegalNoticeContent from "./legal-notice-content";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = pageMetadata({
  titleSuffix: (messages) => messages["page.legalNotice"] || "Legal Notice",
  descriptionKey: "page.legalNotice.meta",
  path: "/legal-notice",
});

export default function LegalNoticePage() {
  return <LegalNoticeContent />;
}
