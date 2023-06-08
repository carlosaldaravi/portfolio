import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import es from "../lang/es.json";
import { useRouter } from "next/router";

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
    if (nextLanguage === "es" || nextLanguage === "en") {
      setCookie("NEXT_LOCALE", locale);
      setLanguage(nextLanguage);
    }
  };

  useEffect(() => {
    const savedLang = getCookie("NEXT_LOCALE");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("es");
      setCookie("NEXT_LOCALE", locale);
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
