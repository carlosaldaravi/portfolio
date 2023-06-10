import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import ThemeContext from "@/store/theme-context";
import { THEMES_TYPES } from "@/types/themes";

const ButtonSlider = ({ className, textId, param, onChangeSection }) => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const colorButton =
    theme === THEMES_TYPES.dark
      ? "bg-dark-secondary text-light-text border-light-secondary"
      : "bg-light-secondary text-dark-text border-dark-secondary";

  return (
    <button
      className={`kitesurf-button text-xl lg:text-2xl border ${colorButton} ${className}`}
      onClick={() => onChangeSection(param)}
    >
      <span>
        <FormattedMessage id={textId} />
      </span>
    </button>
  );
};

export default ButtonSlider;
