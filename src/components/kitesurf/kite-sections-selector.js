import { useEffect, useState } from "react";
import { useTools } from "@/hooks/useTools";
import ButtonSlider from "@/components/UI/button-slider";
import Arrow from "@/components/UI/arrow";
import SectionTitle from "@/components/UI/section-title";
import SectionPagination from "@/components/UI/section-pagination";

const KiteSectionsSelector = ({
  sections,
  sectionSelected,
  onSelectSection,
  onChangeSection,
}) => {
  const [indexSection, setIndexSection] = useState();
  const [actualSection, setActualSection] = useState(sectionSelected);
  const { isMobile } = useTools();

  useEffect(() => {
    setActualSection(sectionSelected);
  }, [sectionSelected]);

  useEffect(() => {
    const index = sections.findIndex(
      (section) => section.name === actualSection.name
    );
    setIndexSection(index);
  }, [actualSection, sections]);

  return (
    <div>
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
        <SectionTitle
          title={actualSection.title}
          className="mt-24 mb-12 sm:my-24 section-title-small-vars"
        />
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
      <SectionPagination
        list={sections}
        actualIndex={indexSection}
        onSelectSection={(i) => onSelectSection(i)}
      />
    </div>
  );
};

export default KiteSectionsSelector;
