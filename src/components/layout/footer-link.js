import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeContext from "@/store/theme-context";

const FooterLink = ({ src, title }) => {
  const themeCtx = useContext(ThemeContext);
  const router = useRouter();
  const route = router.route;

  const theme = themeCtx.theme;
  const activeStyle =
    theme === "dark"
      ? "border-light-primary text-light-primary"
      : "border-dark-primary text-dark-primary";

  return (
    <Link
      href={src}
      className={`w-1/4 border-b-2 pt-4 pb-2 px-1 text-center text-sm font-medium ${
        route === src
          ? `font-extrabold ${activeStyle}`
          : `border-transparent hover:font-bold ${
              theme === "dark"
                ? "text-light-secondary hover:text-light-primary hover:border-light-primary"
                : "text-dark-secondary hover:text-dark-primary hover:border-dark-primary"
            }`
      }`}
      aria-current={route === src ? "page" : undefined}
    >
      {title}
    </Link>
  );
};

export default FooterLink;
