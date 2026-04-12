import path from "path";
import fs from "fs/promises";
import type { Metadata } from "next";
import DeveloperContent from "./developer-content";

interface PageParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;

  const description = messages["page.home.meta"] || "";
  const title = "Carlos Aldaravi - Developer";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ["https://carlosaldaravi.com/images/yo-dev.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function DeveloperPage() {
  const dataFilePath = path.join(process.cwd(), "src/data", "developer.json");
  const jsonData = await fs.readFile(dataFilePath, "utf-8");
  const data = JSON.parse(jsonData);

  return <DeveloperContent data={data} />;
}
