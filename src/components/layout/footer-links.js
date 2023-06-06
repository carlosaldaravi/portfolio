import { FormattedMessage } from "react-intl";
import FooterLink from "./footer-link";

const FooterLinks = () => {
  return (
    <div className="">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          <FooterLink src="/" title="Home" />
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
