import type { Metadata } from "next";
import ContactContent from "./contact-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/common";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: "Contact",
    descriptionKey: "page.contact.description",
  });
}

export default function ContactPage() {
  return <ContactContent />;
}
