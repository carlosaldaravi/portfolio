import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  getLocaleFromPath,
  isLocale,
  stripLocalePrefix,
} from "@/lib/i18n";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameLocale = getLocaleFromPath(pathname);

  // Default locale must live at the root URL only: 301 /es/* -> /* to avoid
  // duplicate content. Persist the locale so the bare path doesn't bounce to /en.
  if (pathnameLocale === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = stripLocalePrefix(pathname);
    const response = NextResponse.redirect(url, 301);
    response.cookies.set(LOCALE_COOKIE, DEFAULT_LOCALE, { path: "/" });
    return response;
  }

  // If path already has a locale prefix, let it through
  if (pathnameLocale) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  // For the default locale, rewrite internally so the URL stays clean; any
  // other locale is a real, prefixed URL and gets a redirect.
  return locale === DEFAULT_LOCALE
    ? NextResponse.rewrite(url)
    : NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.png|images|videos|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
