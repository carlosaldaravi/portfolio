import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";
import { Jump, JumpTextEntry } from "./jump-card";

interface HeaderJumpCardProps {
  jump: Jump;
}

const HeaderJumpCard = ({ jump }: HeaderJumpCardProps) => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const { hangtime } = jump.texts.find(
    (object: JumpTextEntry) => Object.keys(object)[0] === "hangtime"
  ) as JumpTextEntry;
  const { spot } = jump.texts.find(
    (object: JumpTextEntry) => Object.keys(object)[0] === "spot"
  ) as JumpTextEntry;
  const { date } = jump.texts.find(
    (object: JumpTextEntry) => Object.keys(object)[0] === "date"
  ) as JumpTextEntry;

  return (
    <h3
      className={`webKitFillAvailable flex ml-4 justify-between sm:justify-between items-center text-center sm:text-end font-normal ${
        theme === THEMES_TYPES.light && !jump.best
          ? "text-dark-text"
          : "text-light-text"
      }`}
    >
      <span className="flex justify-between w-56">
        <span>{hangtime}</span>
        <span className="tracking-xxs text-3xl self-end">
          <FormattedMessage id="seconds" />
        </span>
      </span>
      <div>
        <span className={`hidden tracking-xs text-3xl sm:block`}>{date}</span>
        <span className={`hidden tracking-xs text-3xl sm:block`}>{spot}</span>
      </div>
    </h3>
  );
};

export default HeaderJumpCard;
