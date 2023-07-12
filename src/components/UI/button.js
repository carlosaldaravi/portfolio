import ThemeContext from "@/store/theme-context";
import { getBgSecondaryColor } from "@/tools/theme";
import { useContext } from "react";

const Button = ({ children, className }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  const bgColor = getBgSecondaryColor(theme);

  return (
    <button
      type="button"
      className={`rounded-md my-2 px-3.5 py-2.5 text-2xl font-semibold shadow-sm ${className} ${bgColor} ${
        theme === "dark" ? "hover:brightness-110 " : "hover:brightness-90"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
