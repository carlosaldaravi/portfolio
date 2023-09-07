import { FormattedMessage } from "react-intl";
import NavbarLink from "./navbar-link";

const HeaderNavbar = () => {
  const footerLinks = [
    {
      name: "developer",
      src: "/developer",
      title: <FormattedMessage id="footer.developer" />,
    },
    {
      name: "kitesurf",
      src: "/kitesurf",
      title: "Kiter",
    },
  ];

  return (
    <nav className="flex justify-center gap-8 w-full h-full" aria-label="pages">
      {footerLinks.map((link) => (
        <NavbarLink key={link.id} src={link.src} title={link.title} name={link.name} />
      ))}
    </nav>
  );
};

export default HeaderNavbar;
