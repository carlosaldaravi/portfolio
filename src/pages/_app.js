import "@/styles/globals.css";
import "@/styles/sass/main.scss";

import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeContextProvider } from "@/store/theme-context";
import { LanguageContextProvider } from "@/store/language-context";
import Layout from "@/components/layout/layout";

const BASE_URL = "https://carlosaldaravi.com";

export default function App({ Component, pageProps }) {
  const { locale, asPath } = useRouter();
  const canonicalUrl = locale === "es"
    ? `${BASE_URL}${asPath}`
    : `${BASE_URL}/${locale}${asPath}`;

  return (
    <>
      <Head>
        <meta property="og:site_name" content="Carlos Aldaravi" />
        <meta property="og:locale" content={locale === "es" ? "es_ES" : "en_US"} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}${asPath}`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en${asPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${asPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
          page_path: window.location.pathname,
        });
        `,
        }}
      />
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </>
  );
}
