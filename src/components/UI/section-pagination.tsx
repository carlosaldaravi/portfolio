import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import { getBgOppositeColor } from "@/tools/theme";

interface SectionPaginationProps {
  list: unknown[];
  actualIndex: number;
  onSelectSection: (index: number) => void;
}

const SectionPagination = ({ list, actualIndex, onSelectSection }: SectionPaginationProps) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgColor = getBgOppositeColor(theme);

  return (
    <div className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4">
      {list.map((_, index) => (
        <button
          key={`span-section-${index}`}
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${bgColor} border-none p-0 ${
            index === actualIndex
              ? "pointer-events-none"
              : "opacity-40 cursor-pointer"
          }`}
          onClick={() => onSelectSection(index)}
          aria-label={`Go to section ${index + 1}`}
          aria-current={index === actualIndex ? "true" : undefined}
        ></button>
      ))}
    </div>
  );
};

export default SectionPagination;
