import { useContext } from "react";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";

const RowTextKiterCard = ({ textLeft, textRight }) => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const colorText =
    theme === THEMES_TYPES.dark ? "text-light-text" : "text-dark-text";

  return (
    <div className="w-full flex justify-between md:justify-start md:gap-10">
      <span
        className={`uppercase tracking-xxs sm:tracking-xxs w-40 sm:w-96 text-xl sm:text-xl my-4 self-center ${colorText}}`}
      >
        {textLeft}
      </span>
      <span className={`self-center text-4xl ${colorText}`}> {textRight}</span>
    </div>
  );
};

export default RowTextKiterCard;
