import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useTools } from "@/hooks/useTools";
import ColorOptions from "./color-options";

const ProjectsHeader = ({ children, projectHovered, onSelectColor }) => {
  const [colorSelected, setColorSelected] = useState("55cccc");
  const { isMobile } = useTools();

  const onColorSelectedHandler = (color) => {
    setColorSelected(color);
    if (color === "55cccc") {
      onSelectColor("1");
    } else if (color === "e95555") {
      onSelectColor("2");
    } else if (color === "3b91f4") {
      onSelectColor("3");
    } else if (color === "a57455") {
      onSelectColor("4");
    }
  };

  return (
    <div className="">
      <h2 className="text-center sm:text-start text-gray-400 tracking-xs">
        <FormattedMessage id="page.developer.projects" />
      </h2>
      <div className="flex flex-col sm:flex-row">
        <ColorOptions
          colorSelected={colorSelected}
          onColorSelected={(color) => onColorSelectedHandler(color)}
        />
        {!isMobile && !projectHovered && (
          <>
            <span
              className={`arrow-left-right self-center transition-all duration-300 text-[#${colorSelected}] text-end text-4xl relative -mt-[300px] left-[19%] lg:mt-12 lg:left-[14%]`}
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
