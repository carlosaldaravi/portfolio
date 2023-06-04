import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useTools } from "@/hooks/useTools";
import ButtonSlider from "@/components/UI/button-slider";
import Arrow from "@/components/UI/arrow";

const KiteSections = ({ sectionSelected, onChangeSection }) => {
  const [actualSection, setActualSection] = useState(sectionSelected);
  const { isMobile } = useTools();

  useEffect(() => {
    setActualSection(sectionSelected);
  }, [sectionSelected]);

  return (
    <div className="flex justify-center mt-8 animate-appear-1">
      {isMobile ? (
        <Arrow
          className="mr-4"
          param={-1}
          arrow="&#8592;"
          onChangeSection={(param) => onChangeSection(param)}
        />
      ) : (
        <ButtonSlider
          className="back-button"
          param={-1}
          textId="back"
          onChangeSection={(param) => onChangeSection(param)}
        />
      )}
      <span className={`kitesurf-title self-center w-96 sm:w-[445px]`}>
        {actualSection.title && <FormattedMessage id={actualSection.title} />}
      </span>
      {isMobile ? (
        <Arrow
          className="ml-4"
          param={1}
          arrow="&#8594;"
          onChangeSection={(param) => onChangeSection(param)}
        />
      ) : (
        <ButtonSlider
          className="next-button"
          param={1}
          textId="next"
          onChangeSection={(param) => onChangeSection(param)}
        />
      )}
    </div>
  );
};

export default KiteSections;
