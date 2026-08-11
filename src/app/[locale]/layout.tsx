import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import Layout from "@/components/layout/layout";
import Analytics from "@/components/analytics";
import CookieConsentBanner from "@/components/layout/cookie-consent/cookie-consent-banner";
import { BASE_URL } from "@/lib/metadata";

import en from "@/lang/en.json";
import es from "@/lang/es.json";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const messages: Record<string, Record<string, string>> = { en, es };

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL(BASE_URL),
    openGraph: {
      siteName: "Carlos Aldaravi",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

const PERSON_DESCRIPTION: Record<string, string> = {
  es: "Ingeniero multimedia y desarrollador full-stack, fundador y CEO de Padeldoor. También kitesurfista con un récord de tiempo de vuelo.",
  en: "Multimedia engineer and full-stack developer, founder and CEO of Padeldoor. Also a kitesurfer with a hang-time record.",
};

/** Person + WebSite graph. Built per locale so `description` matches the page
 *  language; the rest of the entity data is language-agnostic. */
function buildJsonLd(locale: string) {
  const personJsonLd = {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Carlos Aldaravi",
    url: BASE_URL,
    image: `${BASE_URL}/images/yo-dev.png`,
    jobTitle: "CEO & Full-Stack Developer",
    description: PERSON_DESCRIPTION[locale] ?? PERSON_DESCRIPTION.es,
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "NestJS",
      "Laravel",
      "PHP",
      "TypeScript",
      "MySQL",
      "Kitesurf",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Alicante",
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "Padeldoor Software SL",
        url: "https://padeldoor.app",
      },
      {
        "@type": "Organization",
        name: "Surfr.",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/carlos-aldaravi/",
      "https://github.com/carlosaldaravi",
      "https://www.instagram.com/carlosaldaravi/",
      "https://www.tiktok.com/@carlosaldaravi",
      "https://www.youtube.com/@CarlosAldaravi/videos",
      "https://twitter.com/carlosaldaravi",
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd,
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "Carlos Aldaravi",
        url: BASE_URL,
        inLanguage: ["es", "en"],
        publisher: { "@id": `${BASE_URL}/#person` },
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeMessages = messages[locale] ?? messages.es;

  return (
    <html lang={locale} className={roboto.className}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
        />
      </head>
      <body>
        <Providers locale={locale} messages={localeMessages}>
          <Layout>{children}</Layout>
          <Analytics />
          <CookieConsentBanner />
        </Providers>
        <div id="popup" />
      </body>
    </html>
  );
}
