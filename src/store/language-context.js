import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { IntlProvider } from "react-intl";
import en from "@/lang/en.json";
import es from "@/lang/es.json";
import { useRouter } from "next/router";
import { LANGUAGES_TYPES } from "@/types/languages";

const COOKIE_NAME = "NEXT_LOCALE";

const messages = {
  en,
  es,
};

const LanguageContext = createContext({
  language: null,
});

export function LanguageContextProvider(props) {
  const [language, setLanguage] = useState(LanguageContext.language);
  const { locale } = useRouter();

  const changeLanguageHandler = (nextLanguage) => {
    if (
      Object.keys(LANGUAGES_TYPES).some(
        (type) => LANGUAGES_TYPES[type] === nextTheme
      )
    ) {
      setCookie(COOKIE_NAME, locale);
      setLanguage(nextLanguage);
    }
  };

  useEffect(() => {
    const savedLang = getCookie(COOKIE_NAME);
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage(LANGUAGES_TYPES.es);
      setCookie(COOKIE_NAME, locale);
    }
  }, [locale]);

  const context = { language, onChangeLanguage: changeLanguageHandler };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {props.children}
    </IntlProvider>
  );
}

export default LanguageContext;
