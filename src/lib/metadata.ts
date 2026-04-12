import type { Metadata } from "next";

interface PageMetadataConfig {
  titleSuffix: string;
  descriptionKey: string;
  imagePath?: string;
  twitterCard?: "summary" | "summary_large_image";
}

export async function loadMessages(locale: string): Promise<Record<string, string>> {
  return locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;
}

export function createPageMetadata(
  messages: Record<string, string>,
  config: PageMetadataConfig
): Metadata {
  const title = `Carlos Aldaravi - ${config.titleSuffix}`;
  const description = messages[config.descriptionKey] || messages["page.home.meta"];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(config.imagePath && { images: [{ url: `https://carlosaldaravi.com${config.imagePath}` }] }),
    },
    twitter: {
      card: config.twitterCard || "summary",
      title,
      description,
      ...(config.imagePath && { images: [`https://carlosaldaravi.com${config.imagePath}`] }),
    },
  };
}
