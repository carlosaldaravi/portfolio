import type { Metadata } from "next";
import DeveloperContent from "./developer-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import { loadJsonData } from "@/lib/data";
import type { PageParams } from "@/types/common";
import type { DeveloperData } from "@/types/developer";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: "Developer",
    descriptionKey: "page.home.meta",
    imagePath: "/images/yo-dev.png",
    twitterCard: "summary_large_image",
  });
}

export default async function DeveloperPage() {
  const data = await loadJsonData<DeveloperData>("developer.json");

  return <DeveloperContent data={data} />;
}
