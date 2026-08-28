import { useTheme } from "@/store/theme-context";
import FooterRRSS from "./footer-rrss";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useCookieConsent } from "@/store/cookie-consent-context";

const Footer = () => {
  const { isDark } = useTheme();
  const { openSettings } = useCookieConsent();

    const bgFooter = isDark ? "dark-footer" : "light-footer";
  return (
    <footer
      className={`footer min-w-lg sm:flex sm:justify-center border-t border-t-gray-500 ${bgFooter}`}
    >
      <div className="flex justify-center">
        <div className="tracking-xxs text-lg sm:text-xl mr-10 sm:mr-24 font-bold">
          <div className="flex items-center justify-between gap-8">
            <p className="text-xl">@carlosaldaravi</p>
          </div>
        </div>
        <FooterRRSS />
      </div>
      <div className="flex justify-center gap-2 mt-2 sm:mt-0">
        <Link
          href="/about"
          className="flex justify-center ml-10 sm:ml-24 mt-2 sm:mt-0"
        >
          <span className="tracking-xxs text-lg sm:text-2xl">
            <FormattedMessage id="footer.about" />
          </span>
        </Link>

        <Link
          href="/contact"
          className="flex justify-center ml-10 sm:ml-24 mt-2 sm:mt-0"
        >
          <span className="tracking-xxs text-lg sm:text-2xl">
            <FormattedMessage id="page.contact" />
          </span>
        </Link>

        <button
          onClick={openSettings}
          className="flex justify-center ml-10 sm:ml-24 mt-2 sm:mt-0"
        >
          <span className="tracking-xxs text-lg sm:text-2xl">
            <FormattedMessage id="footer.cookieSettings" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
