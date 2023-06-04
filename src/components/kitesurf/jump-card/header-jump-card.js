import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useTools } from "@/hooks/useTools";
import ThemeContext from "@/store/theme-context";

const HeaderJumpCard = ({ jump, onShowMore }) => {
  const themeCtx = useContext(ThemeContext);
  const { isMobile } = useTools();

  const theme = themeCtx.theme;

  const { hangtime } = jump.texts.find(
    (object) => Object.keys(object)[0] === "hangtime"
  );
  const { spot } = jump.texts.find(
    (object) => Object.keys(object)[0] === "spot"
  );
  const { date } = jump.texts.find(
    (object) => Object.keys(object)[0] === "date"
  );

  return (
    <h3
      className={`webKitFillAvailable flex ml-4 justify-between sm:justify-between items-center text-center sm:text-end font-normal ${
        theme === "dark" ? "text-light-text" : "text-dark-text"
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
