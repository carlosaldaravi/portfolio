import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useTools } from "@/hooks/useTools";
import ColorOptions from "./color-options";
import SectionTitle from "@/components/UI/section-title";

const ProjectsHeader = ({ children, projectHovered, onSelectColor }) => {
  const [colorSelected, setColorSelected] = useState("#55cccc");
  const { isMobile } = useTools();

  const onColorSelectedHandler = (hexaColor) => {
    setColorSelected(hexaColor);
    if (hexaColor === "#55cccc") {
      onSelectColor("1");
    } else if (hexaColor === "#e95555") {
      onSelectColor("2");
    } else if (hexaColor === "#3b91f4") {
      onSelectColor("3");
    } else if (hexaColor === "#a57455") {
      onSelectColor("4");
    }
  };

  return (
    <div className="">
      <SectionTitle
        title={<FormattedMessage id="page.developer.projects" />}
        description="page.developer.projects.description"
      />
      <div className="flex flex-col sm:flex-row">
        <ColorOptions
          colorSelected={colorSelected}
          onColorSelected={(color) => onColorSelectedHandler(color)}
        />
        {!isMobile && !projectHovered && (
          <>
            <span
              className={`arrow-left-right self-center transition-all duration-300 text-end text-4xl relative -mt-[300px] left-[19%] lg:mt-12 lg:left-[14%]`}
              style={{ color: colorSelected }}
            >
              &#8594;
            </span>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default ProjectsHeader;
