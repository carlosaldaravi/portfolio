import ThemeContext from "@/store/theme-context";
import { getBgColor } from "@/tools/theme";
import { useContext } from "react";

const Button = ({ children, className }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  const bgColor = getBgColor(theme);

  return (
    <button
      type="button"
      className={`rounded-2xl py-3 text-2xl font-semibold shadow-sm ${className} ${bgColor} ${
        theme === "dark" ? "hover:brightness-110 " : "hover:brightness-90"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
