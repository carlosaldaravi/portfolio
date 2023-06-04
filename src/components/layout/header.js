import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { setCookie, getCookie } from "cookies-next";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SVG from "@/components/svg";
import ToggleButton from "../UI/toggle-button";

const Header = () => {
  const [theme, setTheme] = useState("night");
  const { locales, locale, route } = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);

  const setCookieHandler = () => {
    setCookie("NEXT_LOCALE", locale);
  };

  const onChangeThemeHandler = (value) => {
    if (value) {
      setTheme("dark");
      setCookie("THEME", "dark");
    } else {
      setTheme("light");
      setCookie("THEME", "light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const loadedTheme = getCookie("THEME");
    if (loadedTheme === "light") setTheme("light");
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
              theme === "light" ? "text-gray-200" : "shadow-gray-900"
            }`
          : ""
      } ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-900 text-gray-50"
      }`}
    >
      {route !== "/" && (
        <Link className="cursor-pointer opacity-50 hover:opacity-100" href="/">
          <HomeIcon className="w-8 h-8 sm:w-14 sm:h-14" />
        </Link>
      )}
      {route === "/" && (
        <div className="btn btn-hover transition-all w-32 sm:w-52 text-center opacity-50 hover:opacity-100">
          <Link className="capitalize text-lg sm:text-2xl" href="/about">
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
