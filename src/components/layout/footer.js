import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import FooterRRSS from "./footer-rrss";
import FooterLinks from "./footer-links";

const Footer = () => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;
  const bgFooter = theme === "dark" ? "dark-footer" : "light-footer";
  return (
    <section className={`footer mx-auto ${bgFooter}`}>
      {/* <div className="">logo</div> */}
      <FooterRRSS />
      <FooterLinks />
    </section>
  );
};

export default Footer;
