import { ReactNode } from "react";
import { useTheme } from "@/store/theme-context";

interface SectionTitleProps {
  title: ReactNode;
  className?: string;
  description?: ReactNode;
}

const SectionTitle = ({ title, className = "", description }: SectionTitleProps) => {
  const { isDark } = useTheme();

  const styleTitle =
    isDark
      ? "section-title-dark text-light-text"
      : "section-title-light text-dark-text";
  return (
    <div className="my-16 sm:my-32">
      <h2
        className={`section-title uppercase transition-all duration-300 ${className} ${styleTitle}`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-center text-xl sm:text-2xl mt-8 font-thin">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
