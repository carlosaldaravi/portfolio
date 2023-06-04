import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SVG from "@/components/svg";
import ToggleButton from "@/components/UI/toggle-button";
import ThemeContext from "@/store/theme-context";

const Header = () => {
  const { locales, locale, route } = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const setCookieHandler = () => {
    setCookie("NEXT_LOCALE", locale);
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
      className={`fixed top-0 py-4 sm:py-8 px-2 sm:px-6 flex justify-between w-full z-50 animate-appear-1 transition-opacity duration-500 ${
        hasScrolled
          ? `shadow-xl ${
              theme === "light" ? "text-light-primary" : "shadow-dark-primary"
            }`
          : ""
      } ${
        theme === "light"
          ? "bg-light-primary text-dark-primary"
          : "bg-dark-primary text-light-primary"
      }`}
    >
      {route !== "/" && (
        <Link className="cursor-pointer opacity-50 hover:opacity-100" href="/">
          <HomeIcon className="w-8 h-8 sm:w-14 sm:h-14" />
        </Link>
      )}
      {route === "/" && (
        <div
          className={`header-btn header-btn-hover transition-all w-32 sm:w-52 text-center opacity-50 hover:opacity-100 ${
            theme === "light"
              ? "light-header-btn-hover"
              : "dark-header-btn-hover"
          }  ${theme === "light" ? "text-dark-text" : "text-light-text"}`}
        >
          <Link
            className={`capitalize text-lg sm:text-2xl  ${
              theme === "light" ? "text-dark-text" : "text-light-text"
            }`}
            href="/about"
          >
            <FormattedMessage id="about" />
          </Link>
        </div>
      )}
      <div>
        <div className={`flex gap-2`}>
          <ToggleButton
            onChangeTheme={(value) => onChangeThemeHandler(value)}
          />
          {locales.map((l) => (
            <Link key={l} href={route} locale={l}>
              <SVG
                type={l}
                actualLanguage={locale}
                onClick={setCookieHandler}
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
