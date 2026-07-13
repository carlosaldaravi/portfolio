import type { Metadata } from "next";
import CookiePolicyContent from "./cookie-policy-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/common";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: messages["page.cookiePolicy"] || "Cookie Policy",
    descriptionKey: "page.cookiePolicy.meta",
    path: "/cookie-policy",
    locale,
  });
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
