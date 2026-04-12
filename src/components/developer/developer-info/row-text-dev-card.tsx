import { ReactNode, useContext } from "react";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";

interface RowTextDevCardProps {
  textLeft: ReactNode;
  textRight: ReactNode;
}

const RowTextDevCard = ({ textLeft, textRight }: RowTextDevCardProps) => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const colorText =
    theme === THEMES_TYPES.dark ? "text-light-text" : "text-dark-text";

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

export default RowTextDevCard;
