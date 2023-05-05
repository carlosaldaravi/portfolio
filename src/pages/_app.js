import "@/styles/globals.css";
import "@/styles/info-card.scss";

import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { setCookie } from 'cookies-next';

import en from "../lang/en.json";
import es from "../lang/es.json";

const messages = {
  en,
  es,
};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  setCookie('NEXT_LOCALE', locale);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
