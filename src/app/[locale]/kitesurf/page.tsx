import type { Metadata } from "next";
import KitesurfContent from "./kitesurf-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import { loadJsonData } from "@/lib/data";
import type { PageParams } from "@/types/common";
import type { KitesurfData, SectionData } from "@/types/kitesurf";
import type { DeveloperData } from "@/types/developer";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: "Kitesurf",
    descriptionKey: "page.home.meta",
    imagePath: "/images/yo-kite.png",
    twitterCard: "summary_large_image",
  });
}

export default async function KitesurfPage() {
  const data = await loadJsonData<KitesurfData>("kitesurf.json");
  const devData = await loadJsonData<DeveloperData>("developer.json");
  const sections = data.sections.filter((section: SectionData) => section.data.length > 0);

  return <KitesurfContent sections={sections} me={data.me} devMe={devData.me} />;
}
