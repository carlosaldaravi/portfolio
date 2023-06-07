import ThemeContext from "@/store/theme-context";
import { useContext } from "react";

const Arrow = ({ className, arrow, param, onChangeSection }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  return (
    <div
      className={`text-center text-5xl cursor-pointer rounded-full ${className} ${
        theme === "dark" ? "bg-dark-secondary" : "bg-light-secondary"
      }`}
      onClick={() => onChangeSection(param)}
    >
      <span className="p-1">{arrow}</span>
    </div>
  );
};

export default Arrow;
