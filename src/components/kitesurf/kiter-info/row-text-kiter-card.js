import ThemeContext from "@/store/theme-context";
import { useContext } from "react";

const RowTextKiterCard = ({ textLeft, textRight }) => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const colorText = theme === "dark" ? "text-light-text" : "text-dark-text";

  return (
    <div className="flex">
      <span
        className={`uppercase tracking-xxs sm:tracking-xxs w-40 sm:w-96 text-sm sm:text-lg my-1 self-center ${colorText}}`}
      >
        {textLeft}
      </span>
      <span className={`self-center text-2xl ${colorText}`}> {textRight}</span>
    </div>
  );
};

export default RowTextKiterCard;
