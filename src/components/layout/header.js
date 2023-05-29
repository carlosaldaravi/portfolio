import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Link from "next/link";
import SVG from "../svg";
import { HomeIcon } from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const { locales, locale, route } = useRouter();

  const setCookieHandler = () => {
    setCookie("NEXT_LOCALE", locale);
  };

  return (
    <div>
      {route !== "/" && (
        <Link
          className="absolute top-0 left-0 mt-4 ml-4 animate-appear cursor-pointer z-50 opacity-50 hover:opacity-100"
          href="/"
        >
          <HomeIcon className="w-8 h-8 sm:w-14 sm:h-14 text-gray-300" />
        </Link>
      )}
      {route === "/" && (
        <div className="btn btn-hover transition-all absolute w-52 text-center top-4 -left-10 sm:-left-2 z-50 animate-appear opacity-50 hover:opacity-100">
          <Link
            className="capitalize text-lg sm:text-2xl"
            href="/about"
          >
            <FormattedMessage id="about" />
          </Link>
        </div>
      )}
      <div className="absolute top-0 right-0 mt-4 mr-4 animate-appear z-50">
        <div className={`flex justify-end gap-2`}>
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
    </div>
  );
};

export default Header;
