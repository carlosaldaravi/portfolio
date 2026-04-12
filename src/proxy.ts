import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

function getLocaleFromPath(pathname: string): string | null {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale;
    }
  }
  return null;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If path already has a locale prefix, let it through
  const pathnameLocale = getLocaleFromPath(pathname);
  if (pathnameLocale) {
    return NextResponse.next();
  }

  // Determine locale from cookie, fallback to default
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : defaultLocale;

  // For default locale "es": rewrite internally (keep clean URL)
  if (locale === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // For non-default locale "en": redirect to /en/...
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.png|images|videos|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
