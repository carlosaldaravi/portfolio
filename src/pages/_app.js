import "@/styles/globals.css";
import "@/styles/sass/main.scss";

import { ThemeContextProvider } from "@/store/theme-context";
import { LanguageContextProvider } from "@/store/language-context";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}
