import type { Metadata } from "next";

export const BASE_URL = "https://carlosaldaravi.com";

interface PageMetadataConfig {
  titleSuffix: string;
  descriptionKey: string;
  /** Clean route without locale prefix, e.g. "/" or "/developer" */
  path: string;
  locale: string;
  twitterCard?: "summary" | "summary_large_image";
  /** Segments with their own opengraph-image.tsx must skip the config
   *  fallback image, which would otherwise take precedence over it */
  hasOwnOgImage?: boolean;
}

export async function loadMessages(locale: string): Promise<Record<string, string>> {
  return locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;
}

export function localeUrl(locale: string, path: string): string {
  const suffix = path === "/" ? "" : path;
  return locale === "es" ? `${BASE_URL}${suffix}` : `${BASE_URL}/${locale}${suffix}`;
}

export function createPageMetadata(
  messages: Record<string, string>,
  config: PageMetadataConfig
): Metadata {
  const title = `Carlos Aldaravi - ${config.titleSuffix}`;
  const description = messages[config.descriptionKey] || messages["page.home.meta"];
  const canonical = localeUrl(config.locale, config.path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: localeUrl("es", config.path),
        en: localeUrl("en", config.path),
        "x-default": localeUrl("es", config.path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Carlos Aldaravi",
      locale: config.locale === "es" ? "es_ES" : "en_US",
      type: "website",
      ...(config.hasOwnOgImage
        ? {}
        : {
            images: [
              {
                url: localeUrl(config.locale, "/opengraph-image"),
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
          }),
    },
    twitter: {
      card: config.twitterCard || "summary",
      title,
      description,
    },
  };
}
