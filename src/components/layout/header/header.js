import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SVG_TYPES } from "@/types/svg";
import SVG from "@/components/svg";
import ToggleButton from "@/components/UI/toggle-button";
import ThemeContext from "@/store/theme-context";
import LanguageContext from "@/store/language-context";
import HeaderNavbar from "./header-navbar";
import { getBgColor, getShadowColor } from "@/tools/theme";
import Image from "next/image";
import { useTools } from "@/hooks/useTools";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";

const Header = () => {
  const { locales, locale, route } = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const languageCtx = useContext(LanguageContext);
  const { isMobile } = useTools();
  const tracker = useTracker();

  const theme = themeCtx.theme;

  const headerClasses = `${
    hasScrolled
      ? `shadow-lg ${getShadowColor(theme)} ${
          route === "/kitesurf" && "bg-opacity-80"
        }`
      : "bg-opacity-0"
  } ${getBgColor(theme)} 
   ${route === "/" ? "justify-end" : "justify-between"}`;

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

  const selectLanguageHandler = (l) => {
    const event =
      l === "es"
        ? TRACKING_TYPES.event.esLanguageClick
        : TRACKING_TYPES.event.enLanguageClick;
    tracker.track(event);
  };

  return (
    <header
      className={`grid grid-cols-3 sm:flex sm:justify-between sm:gap-20 md:gap-40 min-w-lg animate-appear-1 transition-opacity duration-500 ${headerClasses}`}
    >
      <Link
        href="/"
        onClick={() => tracker.track(TRACKING_TYPES.event.logoClick)}
        className="opacity-90 ml-2"
      >
        <Image
          title="Logo Carlos Aldaravi"
          src={theme === "dark" ? "/logo-blanco.png" : "/logo-negro.png"}
          alt="logo"
          width={60}
          height={80}
          className="h-12 w-14 sm:h-16 sm:w-20"
        />
      </Link>
      <div className="flex-grow">{route !== "/" && <HeaderNavbar />}</div>
      <div className={`flex justify-end items-center`}>
        {((isMobile && route === "/") || !isMobile) && (
          <div className="">
            <ToggleButton />
          </div>
        )}
        <div className="flex gap-2 ml-5 mr-2 sm:ml-12">
          {locales.map((l) => (
            <Link
              key={`locale-${l}`}
              href={route}
              locale={l}
              shallow={true}
              onClick={() => selectLanguageHandler(l)}
            >
              <SVG type={SVG_TYPES[l]} onClick={setCookieHandler} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
