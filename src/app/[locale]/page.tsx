import type { Metadata } from "next";
import HomeContent from "./home-content";
import type { Role } from "@/components/home/home-info";
import { loadMessages, createPageMetadata } from "@/lib/metadata";
import { loadJsonData } from "@/lib/data";
import type { PageParams } from "@/types/common";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return createPageMetadata(messages, {
    titleSuffix: "Portfolio",
    descriptionKey: "page.home.meta",
    path: "/",
    locale,
    twitterCard: "summary_large_image",
    hasOwnOgImage: true,
  });
}

export default async function HomePage() {
  const roles = await loadJsonData<Role[]>("roles.json");

  return <HomeContent roles={roles} />;
}
