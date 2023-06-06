import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeContext from "@/store/theme-context";

const FooterLink = ({ src, title }) => {
  const themeCtx = useContext(ThemeContext);
  const router = useRouter();
  const route = router.route;

  const theme = themeCtx.theme;
  const style =
    theme === "dark"
      ? "border-light-primary text-light-primary"
      : "border-dark-primary text-dark-primary";

  return (
    <Link
      href={src}
      className={`w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
        route === src
          ? style
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
      aria-current={route === src ? "page" : undefined}
    >
      {title}
    </Link>
  );
};

export default FooterLink;
