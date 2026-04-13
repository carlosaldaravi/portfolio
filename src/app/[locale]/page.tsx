import type { Metadata } from "next";
import HomeContent from "./home-content";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import { loadJsonData } from "@/lib/data";
import type { PageParams } from "@/types/common";
import type { DeveloperData } from "@/types/developer";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: "Portfolio",
    descriptionKey: "page.home.meta",
    twitterCard: "summary_large_image",
  });
}

export default async function HomePage() {
  const data = await loadJsonData<DeveloperData>("developer.json");
  const kiteData = await loadJsonData<{ me: { id: string; value: string }[] }>("kitesurf.json");

  return <HomeContent data={data} kiteMe={kiteData.me} />;
}
