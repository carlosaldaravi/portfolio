"use client";

import { useParams, usePathname } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getLocaleFromPath,
  stripLocalePrefix,
  toLocale,
  type Locale,
} from "@/lib/i18n";

interface LocaleRouter {
  /** Active locale, resolved from the route param and the URL. */
  locale: Locale;
  /** Every locale the site is published in. */
  locales: readonly Locale[];
  /** Full pathname, locale prefix included. */
  pathname: string;
  /** Pathname without the locale prefix — the "route" the UI reasons about. */
  cleanPathname: string;
}

/**
 * Resolves the current locale and a locale-free pathname for client components.
 * The route param is authoritative; the URL is the fallback for the rewritten
 * default locale, whose URLs carry no prefix.
 */
export function useLocaleRouter(): LocaleRouter {
  const params = useParams();
  const pathname = usePathname() ?? "/";

  const paramLocale = typeof params?.locale === "string" ? params.locale : null;
  const locale = paramLocale
    ? toLocale(paramLocale)
    : getLocaleFromPath(pathname) ?? DEFAULT_LOCALE;

  return {
    locale,
    locales: LOCALES,
    pathname,
    cleanPathname: stripLocalePrefix(pathname),
  };
}
