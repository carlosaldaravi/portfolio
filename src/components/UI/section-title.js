import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";

const SectionTitle = ({ title, className, description }) => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const styleTitle =
    theme === THEMES_TYPES.dark
      ? "section-title-dark text-light-text"
      : "section-title-light text-dark-text";
  return (
    <>
      <h3
        className={`section-title uppercase transition-all duration-300 ${className} ${styleTitle}`}
      >
        <FormattedMessage id={title} />
      </h3>
      {description && (
        <p className="text-center text-xl sm:text-2xl mt-8 text-gray-500">
          <FormattedMessage id={description} />
        </p>
      )}
    </>
  );
};

export default SectionTitle;
