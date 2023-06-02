import "@/styles/globals.css";
import "@/styles/sass/main.scss";

import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

import en from "../lang/en.json";
import es from "../lang/es.json";

import Layout from "@/components/layout/layout";

const messages = {
  en,
  es,
};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  setCookie("NEXT_LOCALE", locale);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}
