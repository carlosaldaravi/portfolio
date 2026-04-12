import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import NavbarLink from "./navbar-link";

interface NavbarLinkItem {
  name: string;
  src: string;
  title: ReactNode;
}

const HeaderNavbar = () => {
  const footerLinks: NavbarLinkItem[] = [
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
        <NavbarLink
          key={`link-page-${link.name}`}
          src={link.src}
          title={link.title}
          name={link.name}
        />
      ))}
    </nav>
  );
};

export default HeaderNavbar;
