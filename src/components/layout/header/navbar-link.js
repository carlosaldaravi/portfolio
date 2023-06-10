import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeContext from "@/store/theme-context";
import { THEMES_TYPES } from "@/types/themes";

const FooterLink = ({ src, title }) => {
  const themeCtx = useContext(ThemeContext);
  const router = useRouter();
  const route = router.route;

  const theme = themeCtx.theme;
  const activeStyle =
    theme === THEMES_TYPES.dark
      ? "border-light-primary text-light-primary"
      : "border-dark-primary text-dark-primary";

  return (
    <Link
      href={src}
      className={`mx-auto px-3 border-b-2 text-center text-lg sm:text-2xl ${
        route === src
          ? `font-extrabold ${activeStyle}`
          : `border-transparent hover:font-semibold ${
              theme === THEMES_TYPES.dark
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
