"use client";

import { IntlProvider } from "react-intl";
import { ThemeContextProvider } from "@/store/theme-context";

interface ProvidersProps {
  locale: string;
  messages: Record<string, string>;
  children: React.ReactNode;
}

export default function Providers({ locale, messages, children }: ProvidersProps) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </IntlProvider>
  );
}
