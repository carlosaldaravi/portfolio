import { useContext } from "react";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";

const Arrow = ({ className, arrow, param, onChangeSection }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  return (
    <div
      className={`cursor-pointer rounded-full w-12 h-12 shadow-sm flex items-center justify-center ${className} ${
        theme === THEMES_TYPES.dark ? "bg-dark-secondary" : "bg-light-secondary"
      }`}
      onClick={() => onChangeSection(param)}
    >
      <span className="">{arrow}</span>
    </div>
  );
};

export default Arrow;
