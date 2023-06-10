import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SVG_TYPES } from "@/types/svg";
import { THEMES_TYPES } from "@/types/themes";
import SVG from "@/components/svg";
import ToggleButton from "@/components/UI/toggle-button";
import ThemeContext from "@/store/theme-context";
import LanguageContext from "@/store/language-context";
import HeaderNavbar from "./header-navbar";
import { getBgColor, getShadowColor } from "@/tools/theme";

const Header = () => {
  const { locales, locale, route } = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const languageCtx = useContext(LanguageContext);

  const theme = themeCtx.theme;

  const headerClasses = `${
    hasScrolled ? `shadow-lg ${getShadowColor(theme)}` : ""
  } ${getBgColor(theme)} ${route === "/" ? "justify-end" : "justify-between"}`;

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
          <Link key={l} href={route} locale={l} shallow={true}>
            <SVG type={SVG_TYPES[l]} onClick={setCookieHandler} />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
