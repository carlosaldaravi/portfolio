import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, localePath, ogLocale, toLocale } from "@/lib/i18n";
import { getMessages, type Messages } from "@/lib/messages";
import type { PageParams } from "@/types/common";

export const BASE_URL = "https://carlosaldaravi.com";

const SITE_NAME = "Carlos Aldaravi";

interface PageMetadataConfig {
  /** Literal suffix ("Portfolio") or an i18n key resolved from the messages. */
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

/** Absolute canonical URL of a route in a given locale. */
export function localeUrl(locale: string, path: string): string {
  const relative = localePath(locale, path);
  return `${BASE_URL}${relative === "/" ? "" : relative}`;
}

/** `hreflang` map every page advertises, including the x-default. */
function alternateLanguages(path: string): Record<string, string> {
  const languages: Record<string, string> = Object.fromEntries(
    LOCALES.map((locale) => [locale, localeUrl(locale, path)])
  );
  languages["x-default"] = localeUrl(DEFAULT_LOCALE, path);
  return languages;
}

export function createPageMetadata(
  messages: Messages,
  config: PageMetadataConfig
): Metadata {
  const title = `${SITE_NAME} - ${config.titleSuffix}`;
  const description = messages[config.descriptionKey] || messages["page.home.meta"];
  const canonical = localeUrl(config.locale, config.path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: alternateLanguages(config.path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: ogLocale(config.locale),
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
      // Every route ships a 1200x630 OG image (own or the [locale] cascade),
      // so the large card is the right default; "summary" would crop it to a
      // small square.
      card: config.twitterCard || "summary_large_image",
      title,
      description,
    },
  };
}

type PageMetadataOptions = Omit<PageMetadataConfig, "locale" | "titleSuffix"> & {
  /** Literal title suffix, or a resolver so a page can localize it. */
  titleSuffix: string | ((messages: Messages) => string);
};

/**
 * Builds the `generateMetadata` export of a page. Every route needs the same
 * three steps — await the params, load that locale's messages, hand both to
 * `createPageMetadata` — so each page only declares what actually differs.
 */
export function pageMetadata(options: PageMetadataOptions) {
  return async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { locale } = await params;
    const messages = getMessages(locale);
    const { titleSuffix, ...rest } = options;

    return createPageMetadata(messages, {
      ...rest,
      locale: toLocale(locale),
      titleSuffix:
        typeof titleSuffix === "function" ? titleSuffix(messages) : titleSuffix,
    });
  };
}
