import path from "path";
import fs from "fs/promises";
import type { Metadata } from "next";
import KitesurfContent from "./kitesurf-content";

interface PageParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;

  const description = messages["page.home.meta"] || "";
  const title = "Carlos Aldaravi - Kitesurf";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ["https://carlosaldaravi.com/images/yo-kite.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://carlosaldaravi.com/images/yo-kite.png"],
    },
  };
}

export default async function KitesurfPage() {
  const dataFilePath = path.join(process.cwd(), "src/data", "kitesurf.json");
  const jsonData = await fs.readFile(dataFilePath, "utf-8");
  const data = JSON.parse(jsonData);
  const sections = data.sections.filter((section: { name: string; title: string; data: unknown[] }) => section.data.length > 0);

  return <KitesurfContent sections={sections} me={data.me} />;
}
