"use client";

import { useParams, usePathname } from "next/navigation";

const LOCALES = ["es", "en"] as const;
const DEFAULT_LOCALE = "es";

/**
 * Extracts the current locale and a clean pathname (without locale prefix).
 * Works in both App Router (via useParams) and Pages Router contexts.
 */
export function useLocaleRouter() {
  const params = useParams();
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "/";

  // Try to get locale from [locale] route param (App Router)
  const paramLocale =
    typeof params?.locale === "string" ? params.locale : null;

  // Fallback: extract from pathname
  const pathLocale = getLocaleFromPath(pathname);

  const locale = paramLocale ?? pathLocale ?? DEFAULT_LOCALE;

  // Strip locale prefix from pathname to get the "route"
  const cleanPathname = stripLocalePrefix(pathname);

  return {
    locale,
    locales: LOCALES as unknown as string[],
    pathname,
    cleanPathname,
  };
}

function getLocaleFromPath(pathname: string): string | null {
  for (const l of LOCALES) {
    if (pathname.startsWith(`/${l}/`) || pathname === `/${l}`) {
      return l;
    }
  }
  return null;
}

/**
 * Strips the locale prefix from a pathname.
 * "/en/developer" -> "/developer"
 * "/es/developer" -> "/developer"
 * "/developer" -> "/developer"
 */
function stripLocalePrefix(pathname: string): string {
  for (const l of LOCALES) {
    if (pathname.startsWith(`/${l}/`)) {
      return pathname.slice(`/${l}`.length);
    }
    if (pathname === `/${l}`) {
      return "/";
    }
  }
  return pathname;
}

/**
 * Builds a locale-aware path.
 * For "es" (default): returns clean path without prefix (middleware rewrites internally)
 * For "en": returns /en/path
 */
export function buildLocalePath(
  currentPathname: string,
  targetLocale: string
): string {
  const clean = stripLocalePrefix(currentPathname);
  if (targetLocale === DEFAULT_LOCALE) {
    return clean;
  }
  return `/${targetLocale}${clean}`;
}
