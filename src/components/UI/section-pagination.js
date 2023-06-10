import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import { getBgColor } from "@/tools/theme";

const SectionPagination = ({ list, actualIndex, onSelectSection }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgColor = getBgColor(theme);

  return (
    <div className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4">
      {list.map((item, index) => (
        <span
          key={`span-section-${index}`}
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${bgColor} ${
            index === actualIndex
              ? "pointer-events-none"
              : "opacity-40 cursor-pointer"
          }`}
          onClick={() => onSelectSection(index)}
        ></span>
      ))}
    </div>
  );
};

export default SectionPagination;
