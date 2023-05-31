import { useTools } from "@/hooks/useTools";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const KiteSections = ({ sectionSelected, onChangeSection }) => {
  const [actualSection, setActualSection] = useState(sectionSelected);
  const { isMobile } = useTools();

  useEffect(() => {
    setActualSection(sectionSelected);
  }, [sectionSelected]);

  return (
    <div className="flex justify-center mt-8">
      {isMobile ? (
        <span
          className="text-gray-300 self-center text-4xl mr-4 cursor-pointer"
          onClick={() => onChangeSection(-1)}
        >
          &#8592;
        </span>
      ) : (
        <button
          className="kitesurf-button back-button bg-gray-800 text-gray-300 text-xl lg:text-2xl"
          onClick={() => onChangeSection(-1)}
        >
          <span><FormattedMessage id="back" /> </span>
        </button>
      )}
      <span className={`kitesurf-title text-gray-400 self-center w-96 sm:w-[445px]`}>
        {actualSection.title && <FormattedMessage id={actualSection.title} />}
      </span>
      {isMobile ? (
        <span
          className="text-gray-300 self-center text-4xl ml-4 cursor-pointer"
          onClick={() => onChangeSection(1)}
        >
          &#8594;
        </span>
      ) : (
        <button
          className="kitesurf-button next-button bg-gray-800 text-gray-300 text-xl lg:text-2xl"
          onClick={() => onChangeSection(1)}
        >
          <span><FormattedMessage id="next" /> </span>
        </button>
      )}
    </div>
  );
};

export default KiteSections;
