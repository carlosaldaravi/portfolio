import path from "path";
import fs from "fs/promises";
import type { Metadata } from "next";
import HomeContent from "./home-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // Load messages for metadata
  const messages = locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;

  const meta = messages["page.home.meta"] ?? "";
  const title = "Carlos Aldaravi - Portfolio";

  return {
    title,
    description: meta,
    openGraph: {
      title,
      description: meta,
      images: ["https://carlosaldaravi.com/images/yo-dev.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta,
      images: ["https://carlosaldaravi.com/images/yo-dev.png"],
    },
  };
}

export default async function HomePage() {
  const dataFilePath = path.join(process.cwd(), "src/data", "developer.json");
  const jsonData = await fs.readFile(dataFilePath, "utf-8");
  const data = JSON.parse(jsonData);

  return <HomeContent data={data} />;
}
