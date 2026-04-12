import type { Metadata } from "next";
import AboutContent from "./about-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/common";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: "About",
    descriptionKey: "page.about.description",
  });
}

export default function AboutPage() {
  return <AboutContent />;
}
