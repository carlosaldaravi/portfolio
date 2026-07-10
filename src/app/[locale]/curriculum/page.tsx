import type { Metadata } from "next";
import CurriculumContent from "./curriculum-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/common";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: "CV",
    descriptionKey: "page.curriculum.meta",
    path: "/curriculum",
    locale,
  });
}

export default function CurriculumPage() {
  return <CurriculumContent />;
}
