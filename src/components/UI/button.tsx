import { ReactNode } from "react";
import { useTheme } from "@/store/theme-context";
import { getBgColor } from "@/tools/theme";
import SVG from "@/components/svg";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  icon?: string;
  disabled?: boolean;
}

const Button = ({ children, className = "", icon, disabled }: ButtonProps) => {
  const { theme, isDark } = useTheme();

  const bgColor = getBgColor(theme);

  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-4 rounded-lg py-3 text-2xl font-semibold shadow-sm ${className} ${bgColor} ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : isDark
          ? "hover:brightness-110 "
          : "hover:brightness-90"
      }`}
      disabled={disabled}
    >
      {icon && <SVG type={icon} className={disabled ? "cursor-not-allowed" : "opacity-100"} />}
      {children}
    </button>
  );
};

export default Button;
