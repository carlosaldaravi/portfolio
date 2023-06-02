import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Link from "next/link";
import SVG from "../svg";
import { HomeIcon } from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const { locales, locale, route } = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);

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
      className={`fixed top-0 py-4 sm:py-8 px-2 sm:px-6 flex justify-between w-full z-50 bg-gray-900 animate-appear-1 transition-all duration-500 ${
        hasScrolled ? "shadow-xl shadow-gray-900" : ""
      }`}
    >
      {route !== "/" && (
        <Link className="cursor-pointer opacity-50 hover:opacity-100" href="/">
          <HomeIcon className="w-8 h-8 sm:w-14 sm:h-14 text-gray-300" />
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
