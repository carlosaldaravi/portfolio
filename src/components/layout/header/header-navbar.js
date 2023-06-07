import { FormattedMessage } from "react-intl";
import NavbarLink from "./navbar-link";

const HeaderNavbar = () => {

  const footerLinks = [
    {
      id: "footer-link-home",
      src: "/",
      title: <FormattedMessage id="footer.home" />,
    },
    {
      id: "footer-link-about",
      src: "/about",
      title: <FormattedMessage id="footer.about" />,
    },
    {
      id: "footer-link-dev",
      src: "/developer",
      title: <FormattedMessage id="footer.developer" />,
    },
    {
      id: "footer-link-kiter",
      src: "/kitesurf",
      title: "Kiter",
    },
  ];

  return (
    <nav className="flex w-full" aria-label="pages">
      {footerLinks.map((link) => (
        <NavbarLink key={link.id} src={link.src} title={link.title} />
      ))}
    </nav>
  );
};

export default HeaderNavbar;
