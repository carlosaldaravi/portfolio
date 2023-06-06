import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import ThemeContext from "@/store/theme-context";
import FooterLink from "./footer-link";

const FooterLinks = () => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  return (
    <div className="">
      <div className={`border-b ${theme === "dark" ? "border-light-secondary" : "border-dark-secondary"}`}>
        <nav className="-mb-px flex" aria-label="Tabs">
          <FooterLink src="/" title={<FormattedMessage id="footer.home" />} />
          <FooterLink
            src="/about"
            title={<FormattedMessage id="footer.about" />}
          />
          <FooterLink
            src="/developer"
            title={<FormattedMessage id="footer.developer" />}
          />
          <FooterLink src="/kitesurf" title="Kiter" />
        </nav>
      </div>
    </div>
  );
};

export default FooterLinks;
