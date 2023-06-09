import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SVG from "@/components/svg";
import ToggleButton from "@/components/UI/toggle-button";
import ThemeContext from "@/store/theme-context";
import LanguageContext from "@/store/language-context";
import HeaderNavbar from "./header-navbar";

const Header = () => {
  const { locales, locale, route } = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const languageCtx = useContext(LanguageContext);

  const theme = themeCtx.theme;

  const headerClasses = `${
    hasScrolled
      ? `shadow-xl ${
          theme === "light" ? "text-dark-primary" : "shadow-dark-primary"
        }`
      : ""
  } ${
    theme === "light"
      ? "bg-light-primary text-dark-primary"
      : "bg-dark-primary text-light-primary"
  } ${route === "/" ? "justify-end" : "justify-between"}`;

  const setCookieHandler = () => {
    languageCtx.onChangeLanguage(locale);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`animate-appear-1 transition-opacity duration-500 ${headerClasses}`}
    >
      {route !== "/" && <HeaderNavbar />}
      <div className={`flex gap-2`}>
        <ToggleButton />
        {locales.map((l) => (
          <Link key={l} href={route} locale={l}>
            <SVG type={l} onClick={setCookieHandler} />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
