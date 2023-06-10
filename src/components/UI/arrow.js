import { useContext } from "react";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";

const Arrow = ({ className, arrow, param, onChangeSection }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  return (
    <div
      className={`text-center text-4xl cursor-pointer rounded-full self-center p-2 shadow-sm ${className} ${
        theme === THEMES_TYPES.dark ? "bg-dark-secondary" : "bg-light-secondary"
      }`}
      onClick={() => onChangeSection(param)}
    >
      <span className="p-1">{arrow}</span>
    </div>
  );
};

export default Arrow;
