import type { Metadata } from "next";
import LegalNoticeContent from "./legal-notice-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/common";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: messages["page.legalNotice"] || "Legal Notice",
    descriptionKey: "page.legalNotice.meta",
    path: "/legal-notice",
    locale,
  });
}

export default function LegalNoticePage() {
  return <LegalNoticeContent />;
}
