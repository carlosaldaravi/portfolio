import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Link from "next/link";
import SVG from "../svg";
import { HomeIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { locales, locale, route } = useRouter();

  const setCookieHandler = () => {
    setCookie("NEXT_LOCALE", locale);
  };

  return (
    <>
      {route !== "/" && (
        <Link
          className="absolute top-0 left-0 mt-2 ml-2 animate-appear cursor-pointer"
          href="/"
        >
          <HomeIcon className="w-8 h-8 text-gray-400" />
        </Link>
      )}
      <div className="absolute top-0 right-0 mt-2 mr-2 animate-appear">
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
    </>
  );
};

export default Header;
