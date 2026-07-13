"use client";

import { IntlProvider } from "react-intl";
import { ThemeContextProvider } from "@/store/theme-context";
import { CookieConsentContextProvider } from "@/store/cookie-consent-context";

interface ProvidersProps {
  locale: string;
  messages: Record<string, string>;
  children: React.ReactNode;
}

export default function Providers({ locale, messages, children }: ProvidersProps) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <ThemeContextProvider>
        <CookieConsentContextProvider>{children}</CookieConsentContextProvider>
      </ThemeContextProvider>
    </IntlProvider>
  );
}
