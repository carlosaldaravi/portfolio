import HomeContent from "./home-content";
import { pageMetadata } from "@/lib/metadata";
import { loadJsonData } from "@/lib/data";
import type { Role } from "@/types/home";

export const generateMetadata = pageMetadata({
  titleSuffix: "Portfolio",
  descriptionKey: "page.home.meta",
  path: "/",
  hasOwnOgImage: true,
});

export default async function HomePage() {
  const roles = await loadJsonData<Role[]>("roles.json");

  return <HomeContent roles={roles} />;
}
