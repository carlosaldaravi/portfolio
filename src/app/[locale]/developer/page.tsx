import DeveloperContent from "./developer-content";
import { pageMetadata } from "@/lib/metadata";
import { loadJsonData } from "@/lib/data";
import type { DeveloperData } from "@/types/developer";
import type { KitesurfData } from "@/types/kitesurf";

export const generateMetadata = pageMetadata({
  titleSuffix: "Developer",
  descriptionKey: "page.developer.meta",
  path: "/developer",
  twitterCard: "summary_large_image",
});

export default async function DeveloperPage() {
  const [data, kiteData] = await Promise.all([
    loadJsonData<DeveloperData>("developer.json"),
    loadJsonData<KitesurfData>("kitesurf.json"),
  ]);

  return <DeveloperContent data={data} kiteMe={kiteData.me} />;
}
