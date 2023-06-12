import "@/styles/globals.css";
import "@/styles/sass/main.scss";

import Script from "next/script";
import { ThemeContextProvider } from "@/store/theme-context";
import { LanguageContextProvider } from "@/store/language-context";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
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
