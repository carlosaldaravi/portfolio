import KitesurfContent from "./kitesurf-content";
import { pageMetadata } from "@/lib/metadata";
import { loadJsonData } from "@/lib/data";
import type { KitesurfData } from "@/types/kitesurf";
import type { DeveloperData } from "@/types/developer";

export const generateMetadata = pageMetadata({
  titleSuffix: "Kitesurf",
  descriptionKey: "page.kitesurf.meta",
  path: "/kitesurf",
  twitterCard: "summary_large_image",
  hasOwnOgImage: true,
});

export default async function KitesurfPage() {
  const [data, devData] = await Promise.all([
    loadJsonData<KitesurfData>("kitesurf.json"),
    loadJsonData<DeveloperData>("developer.json"),
  ]);
  const sections = data.sections.filter((section) => section.data.length > 0);

  return <KitesurfContent sections={sections} me={data.me} devMe={devData.me} />;
}
