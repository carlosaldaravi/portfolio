import { ReactNode, useContext } from "react";
import Link from "next/link";
import ThemeContext from "@/store/theme-context";
import { THEMES_TYPES } from "@/types/themes";
import { useTools } from "@/hooks/useTools";
import SVG from "@/components/svg";
import { SVG_TYPES } from "@/types/svg";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import { useLocaleRouter } from "@/hooks/useLocaleRouter";

interface NavbarLinkProps {
  src: string;
  title: ReactNode;
  name: string;
}

const NavbarLink = ({ src, title, name }: NavbarLinkProps) => {
  const { isMobile } = useTools();
  const themeCtx = useContext(ThemeContext);
  const { cleanPathname } = useLocaleRouter();
  const tracker = useTracker();
  const route = cleanPathname;

  const theme = themeCtx.theme;
  const activeStyle =
    theme === THEMES_TYPES.dark
      ? "border-light-primary text-light-primary"
      : "border-dark-primary text-dark-primary";

  const navBarClickHandler = (linkSrc: string) => {
    const event =
      linkSrc === "/developer"
        ? TRACKING_TYPES.event.developerClick
        : TRACKING_TYPES.event.kitesurferClick;

    tracker.track(event, {
      from: "Header",
    });
  };

  return (
    <Link
      href={src}
      onClick={() => navBarClickHandler(src)}
      className={`h-full flex flex-grow md:flex-0 justify-center items-center text-xl sm:text-2xl lg:text-4xl tracking-xxs uppercase duration-300 ${
        route === src
          ? `font-extrabold ${activeStyle}`
          : `opacity-60 hover:font-semibold ${
              theme === THEMES_TYPES.dark
                ? "text-light-secondary hover:text-light-primary"
                : "text-dark-secondary hover:text-dark-primary"
            }`
      }`}
      aria-current={route === src ? "page" : undefined}
    >
      <span
        className={`${
          route === src
            ? `px-12 font-extrabold ${activeStyle}`
            : ` ${
                theme === THEMES_TYPES.dark
                  ? "border-light-primary"
                  : "border-dark-primary"
              }`
        }`}
      >
        {isMobile ? <SVG type={SVG_TYPES[name as keyof typeof SVG_TYPES]} size="h-12 w-12" /> : title}
      </span>
    </Link>
  );
};

export default NavbarLink;
