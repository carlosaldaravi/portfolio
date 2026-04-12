import ThemeContext from "@/store/theme-context";
import { useContext } from "react";
import { getBgSecondaryColor } from "@/tools/theme";
import ContactFormHeader from "./contact-form-header";
import ContactFormBody from "./contact-form-body";

const ContactForm = () => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);

  return (
    <div
      className={`contact-form max-w-7xl shadow-lg overflow-hidden min-w-lg mx-auto mt-12 sm:mt-40 ${bgSecondaryColor}`}
    >
      <ContactFormHeader />
      <ContactFormBody />
    </div>
  );
};

export default ContactForm;
