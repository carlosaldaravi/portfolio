"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { IntlProvider } from "react-intl";
import en from "@/lang/en.json";
import es from "@/lang/es.json";
import { LANGUAGES_TYPES, Language } from "@/types/languages";

const COOKIE_NAME = "NEXT_LOCALE";

const messages: Record<string, Record<string, string>> = {
  en,
  es,
};

function getLocaleFromPath(): string {
  if (typeof window === "undefined") return "es";
  const path = window.location.pathname;
  if (path.startsWith("/en/") || path === "/en") return "en";
  return "es";
}

interface LanguageContextType {
  language: Language | null;
  onChangeLanguage: (nextLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: null,
  onChangeLanguage: () => {},
});

export function LanguageContextProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language | null>(null);
  const locale = getLocaleFromPath();

  const changeLanguageHandler = (nextLanguage: Language) => {
    if (
      Object.keys(LANGUAGES_TYPES).some(
        (type) => LANGUAGES_TYPES[type as keyof typeof LANGUAGES_TYPES] === nextLanguage
      )
    ) {
      setCookie(COOKIE_NAME, nextLanguage);
      setLanguage(nextLanguage);
    }
  };

  useEffect(() => {
    const savedLang = getCookie(COOKIE_NAME) as Language | undefined;
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage(LANGUAGES_TYPES.es);
      setCookie(COOKIE_NAME, locale);
    }
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

export default LanguageContext;
