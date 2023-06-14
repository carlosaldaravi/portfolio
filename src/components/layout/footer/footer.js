import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import FooterRRSS from "./footer-rrss";
import { THEMES_TYPES } from "@/types/themes";

const Footer = () => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;
  const bgFooter = theme === THEMES_TYPES.dark ? "dark-footer" : "light-footer";
  return (
    <footer className={`footer min-w-lg flex justify-center mx-auto border-t border-t-gray-500 ${bgFooter}`}>
      {/* <div className="">logo</div> */}
      <div className="tracking-xxs text-lg sm:text-xl mr-10 sm:mr-24 font-bold">
        @carlosaldaravi
      </div>
      <FooterRRSS />
    </footer>
  );
};

export default Footer;
