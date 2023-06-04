import { useTools } from "@/hooks/useTools";
import ThemeContext from "@/store/theme-context";
import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const KiteSections = ({ sectionSelected, onChangeSection }) => {
  const [actualSection, setActualSection] = useState(sectionSelected);
  const themeCtx = useContext(ThemeContext);
  const { isMobile } = useTools();

  const theme = themeCtx.theme;

  const colorButton =
    theme === "dark"
      ? "bg-dark-secondary text-light-text border-light-secondary"
      : "bg-light-secondary text-dark-text border-dark-secondary";

  useEffect(() => {
    setActualSection(sectionSelected);
  }, [sectionSelected]);

  return (
    <div className="flex justify-center mt-8 animate-appear-1">
      {isMobile ? (
        <span
          className="self-center text-4xl mr-4 cursor-pointer"
          onClick={() => onChangeSection(-1)}
        >
          &#8592;
        </span>
      ) : (
        <button
          className={`kitesurf-button back-button text-xl lg:text-2xl border ${colorButton}`}
          onClick={() => onChangeSection(-1)}
        >
          <span>
            <FormattedMessage id="back" />{" "}
          </span>
        </button>
      )}
      <span
        className={`kitesurf-title self-center w-96 sm:w-[445px]`}
      >
        {actualSection.title && <FormattedMessage id={actualSection.title} />}
      </span>
      {isMobile ? (
        <span
          className="self-center text-4xl ml-4 cursor-pointer"
          onClick={() => onChangeSection(1)}
        >
          &#8594;
        </span>
      ) : (
        <button
          className={`kitesurf-button next-button text-xl lg:text-2xl border ${colorButton}`}
          onClick={() => onChangeSection(1)}
        >
          <span>
            <FormattedMessage id="next" />{" "}
          </span>
        </button>
      )}
    </div>
  );
};

export default KiteSections;
