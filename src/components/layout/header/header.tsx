import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { SVG_TYPES } from "@/types/svg";
import SVG from "@/components/svg";
import ToggleButton from "@/components/UI/toggle-button";
import ThemeContext from "@/store/theme-context";
import HeaderNavbar from "./header-navbar";
import { getBgColor, getShadowColor } from "@/tools/theme";
import Image from "next/image";
import { useTools } from "@/hooks/useTools";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import { MY_NAME } from "@/constants/constants";
import { useLocaleRouter, buildLocalePath } from "@/hooks/useLocaleRouter";
import { setCookie } from "cookies-next";

const Header = () => {
  const { locale, locales, pathname, cleanPathname } = useLocaleRouter();
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const themeCtx = useContext(ThemeContext);
  const { isMobile } = useTools();
  const tracker = useTracker();

  const theme = themeCtx.theme;
  const route = cleanPathname;

  const headerClasses = `${
    hasScrolled
      ? `shadow-lg ${getShadowColor(theme)} ${
          route === "/kitesurf" && "bg-opacity-80"
        }`
      : "bg-opacity-0"
  } ${getBgColor(theme)}
   ${route === "/" ? "justify-end" : "justify-between"}`;

  const setCookieHandler = (l: string) => {
    setCookie("NEXT_LOCALE", l);
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

  const selectLanguageHandler = (l: string) => {
    const event =
      l === "es"
        ? TRACKING_TYPES.event.esLanguageClick
        : TRACKING_TYPES.event.enLanguageClick;
    tracker.track(event);
    setCookieHandler(l);
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
          title={`Logo ${MY_NAME}`}
          src={theme === "dark" ? "/images/logos/logo-blanco.png" : "/images/logos/logo-negro.png"}
          alt="logo"
          width={60}
          height={80}
          className="h-auto w-24 sm:w-32"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpAN42RTZKQAAAABJRU5ErkJggg=="
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
              href={buildLocalePath(pathname, l)}
              onClick={() => selectLanguageHandler(l)}
              aria-label={`Switch language to ${l === "es" ? "Spanish" : "English"}`}
            >
              <SVG type={SVG_TYPES[l as keyof typeof SVG_TYPES]} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
