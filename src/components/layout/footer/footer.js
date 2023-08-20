import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import FooterRRSS from "./footer-rrss";
import { THEMES_TYPES } from "@/types/themes";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

const Footer = () => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;
  const bgFooter = theme === THEMES_TYPES.dark ? "dark-footer" : "light-footer";
  return (
    <footer
      className={`footer min-w-lg sm:flex sm:justify-center border-t border-t-gray-500 ${bgFooter}`}
    >
      {/* <div className="">logo</div> */}
      <div className="flex justify-center">
        <div className="tracking-xxs text-lg sm:text-xl mr-10 sm:mr-24 font-bold">
          <div className="flex items-center justify-between gap-8">
            {/* <Image
              src={theme === "dark" ? "/logo-blanco.png" : "/logo-negro.png"}
              alt="logo"
              width={60}
              height={80}
              className="h-6 w-9"
            /> */}
            <p className="text-xl">@carlosaldaravi</p>
          </div>
        </div>
        <FooterRRSS />
      </div>
      <div className="flex justify-center gap-2 mt-2">
        <Link
          href="/about"
          className="flex justify-center ml-10 sm:ml-24 mt-2 sm:mt-0"
        >
          <span className="tracking-xxs text-lg sm:text-xl">
            <FormattedMessage id="footer.about" />
          </span>
        </Link>
        
        <Link
          href="/contact"
          className="flex justify-center ml-10 sm:ml-24 mt-2 sm:mt-0"
        >
          <span className="tracking-xxs text-lg sm:text-xl">
            <FormattedMessage id="page.contact" />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
