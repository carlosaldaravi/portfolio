import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import Layout from "@/components/layout/layout";
import Analytics from "@/components/analytics";

import en from "@/lang/en.json";
import es from "@/lang/es.json";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const BASE_URL = "https://carlosaldaravi.com";

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
    alternates: {
      canonical: locale === "es" ? BASE_URL : `${BASE_URL}/en`,
      languages: {
        es: BASE_URL,
        en: `${BASE_URL}/en`,
        "x-default": BASE_URL,
      },
    },
    openGraph: {
      siteName: "Carlos Aldaravi",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Aldaravi",
  url: BASE_URL,
  jobTitle: "CEO & Full-Stack Developer",
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
    "https://github.com/carlosaldaravi",
    "https://www.instagram.com/carlosaldaravi/",
    "https://www.tiktok.com/@carlosaldaravi",
    "https://www.youtube.com/@CarlosAldaravi/videos",
    "https://twitter.com/carlosaldaravi",
  ],
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers locale={locale} messages={localeMessages}>
          <Layout>{children}</Layout>
        </Providers>
        <div id="popup" />
        <Analytics />
      </body>
    </html>
  );
}
