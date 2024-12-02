import { useContext } from "react";
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
    <div className="my-16 sm:my-32">
      <h3
        className={`section-title uppercase transition-all duration-300 ${className} ${styleTitle}`}
      >
        {title}
      </h3>
      {description && (
        <p className="text-center text-xl sm:text-2xl mt-8 font-thin">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
