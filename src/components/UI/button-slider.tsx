import { FormattedMessage } from "react-intl";
import { useTheme } from "@/store/theme-context";

interface ButtonSliderProps {
  className?: string;
  textId: string;
  param: number;
  onChangeSection: (param: number) => void;
}

const ButtonSlider = ({ className = "", textId, param, onChangeSection }: ButtonSliderProps) => {
  const { isDark } = useTheme();

  const colorButton =
    isDark
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
