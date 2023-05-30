import { useTools } from "@/hooks/useTools";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const KiteSections = ({ sectionSelected, onChangeSection }) => {
  const [actualSection, setActualSection] = useState(sectionSelected);
  const { isMobile } = useTools();

  useEffect(() => {
    console.log("====> sectionSelected: ", sectionSelected);
    setActualSection(sectionSelected);
  }, [sectionSelected]);

  return (
    <div className="flex justify-center mt-8">
      {isMobile ? (
        <span
          className="text-gray-400 self-center text-5xl mr-4 cursor-pointer pb-2"
          onClick={() => onChangeSection(-1)}
        >
          &#171;
        </span>
      ) : (
        <button
          className="kitesurf-button back-button bg-gray-800 text-gray-300 text-xl lg:text-2xl"
          onClick={() => onChangeSection(-1)}
        >
          <span><FormattedMessage id="back" /> </span>
        </button>
      )}
      <span className={`kitesurf-title text-gray-400 self-center`}>
        {actualSection.title && <FormattedMessage id={actualSection.title} />}
      </span>
      {isMobile ? (
        <span
          className="text-gray-400 self-center text-5xl ml-4 cursor-pointer pb-2"
          onClick={() => onChangeSection(1)}
        >
          &#187;
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