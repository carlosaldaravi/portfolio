/**
 * Single source of truth for the site's locales and URL shape.
 *
 * The default locale ("es") lives at the root URL — `/developer`, not
 * `/es/developer` — and the proxy rewrites it internally to the `[locale]`
 * segment. Every other locale is prefixed. Keep this module free of heavy
 * imports (no message JSON, no React): it is pulled into the proxy bundle,
 * which runs on every request.
 */

export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/** Cookie Next.js and the proxy share to remember the visitor's locale. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** OpenGraph `locale` value for each supported locale. */
const OG_LOCALES: Record<Locale, string> = { es: "es_ES", en: "en_US" };

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Narrows any input to a supported locale, falling back to the default. */
export function toLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function ogLocale(locale: string): string {
  return OG_LOCALES[toLocale(locale)];
}

/** The locale a pathname is prefixed with, or `null` when it carries none. */
export function getLocaleFromPath(pathname: string): Locale | null {
  return (
    LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ?? null
  );
}

/**
 * Removes the locale prefix from a pathname.
 * "/en/developer" and "/es/developer" -> "/developer"; "/en" -> "/".
 */
export function stripLocalePrefix(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (!locale) return pathname;
  return pathname.slice(`/${locale}`.length) || "/";
}

/**
 * Builds the site-relative path for a route in a given locale.
 * The default locale is served unprefixed, so "/" stays "/".
 */
export function localePath(locale: string, path: string): string {
  const clean = stripLocalePrefix(path);
  if (toLocale(locale) === DEFAULT_LOCALE) return clean;
  return `/${locale}${clean === "/" ? "" : clean}`;
}
