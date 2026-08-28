import { ReactNode } from "react";
import { useTheme } from "@/store/theme-context";

interface ArrowProps {
  className?: string;
  arrow: ReactNode;
  param: number;
  onChangeSection: (param: number) => void;
}

const Arrow = ({ className = "", arrow, param, onChangeSection }: ArrowProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`cursor-pointer rounded-full w-12 h-12 shadow-sm flex items-center justify-center ${className} ${
        isDark ? "bg-dark-secondary" : "bg-light-secondary"
      }`}
      onClick={() => onChangeSection(param)}
    >
      <span className="h-6 w-6">{arrow}</span>
    </div>
  );
};

export default Arrow;
