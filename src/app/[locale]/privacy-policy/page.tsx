import type { Metadata } from "next";
import PrivacyPolicyContent from "./privacy-policy-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/common";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: messages["page.privacyPolicy"] || "Privacy Policy",
    descriptionKey: "page.privacyPolicy.meta",
    path: "/privacy-policy",
    locale,
  });
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
