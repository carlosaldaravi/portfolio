import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeContext from "@/store/theme-context";
import { THEMES_TYPES } from "@/types/themes";
import { useTools } from "@/hooks/useTools";
import SVG from "@/components/svg";
import { SVG_TYPES } from "@/types/svg";

const NavbarLink = ({ src, title, name }) => {
  const { isMobile } = useTools();
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
      className={`mx-auto px-1 sm:px-4 text-xl sm:text-2xl ${
        route === src
          ? `font-extrabold border-b ${activeStyle}`
          : `opacity-60 hover:font-semibold ${
              theme === THEMES_TYPES.dark
                ? "text-light-secondary hover:text-light-primary hover:border-light-primary"
                : "text-dark-secondary hover:text-dark-primary hover:border-dark-primary"
            }`
      }`}
      aria-current={route === src ? "page" : undefined}
    >
      {isMobile ? <SVG type={SVG_TYPES[name]} size="h-12 w-12" /> : title}
    </Link>
  );
};

export default NavbarLink;
