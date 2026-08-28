import { useResponsive } from "@/hooks/useResponsive";
import ButtonSlider from "@/components/UI/button-slider";
import Arrow from "@/components/UI/arrow";
import SectionTitle from "@/components/UI/section-title";
import SectionPagination from "@/components/UI/section-pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useIntl } from "react-intl";
import type { SectionData } from "@/types/kitesurf";

interface KiteSectionsSelectorProps {
  sections: SectionData[];
  sectionSelected: SectionData;
  onSelectSection: (index: number) => void;
  onChangeSection: (direction: number) => void;
}

const KiteSectionsSelector = ({
  sections,
  sectionSelected,
  onSelectSection,
  onChangeSection,
}: KiteSectionsSelectorProps) => {
  const intl = useIntl();
  const { isMobile } = useResponsive();

  const indexSection = sections.findIndex(
    (section) => section.name === sectionSelected.name
  );
  const sectionTitle = intl.formatMessage({ id: sectionSelected.title });

  return (
    <div>
      <div className="flex justify-center items-center mt-8 animate-appear-1">
        {isMobile ? (
          <Arrow
            className="mr-4"
            param={-1}
            arrow={<ArrowLeftIcon />}
            onChangeSection={(param: number) => onChangeSection(param)}
          />
        ) : (
          <ButtonSlider
            className="back-button"
            param={-1}
            textId="back"
            onChangeSection={(param: number) => onChangeSection(param)}
          />
        )}
        <SectionTitle
          title={sectionTitle}
          className="mt-24 mb-12 sm:my-24 section-title-small-vars"
        />
        {isMobile ? (
          <Arrow
            className="ml-4"
            param={1}
            arrow={<ArrowRightIcon />}
            onChangeSection={(param: number) => onChangeSection(param)}
          />
        ) : (
          <ButtonSlider
            className="next-button"
            param={1}
            textId="next"
            onChangeSection={(param: number) => onChangeSection(param)}
          />
        )}
      </div>
      <SectionPagination
        list={sections}
        actualIndex={indexSection}
        onSelectSection={(i: number) => onSelectSection(i)}
      />
    </div>
  );
};

export default KiteSectionsSelector;
