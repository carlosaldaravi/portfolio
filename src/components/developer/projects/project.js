import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Popup from "@/components/layout/popup";
import { useTools } from "@/hooks/useTools";

const Project = ({ project, colorNum, onHover }) => {
  const [infoPositionStyle, setInfoPositionStyle] = useState();
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState("1");
  const { isMobile } = useTools();

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const closePopupHandler = () => {
    setPopupOpen(false);
  };
  const hoverInHandler = () => {
    onHover(true);
    setHovered(true);
  };
  const hoverOutHandler = () => {
    setHovered(false);
  };

  useEffect(() => {
    setColor(colorNum);
  }, [colorNum]);

  useEffect(() => {
    hovered
      ? setInfoPositionStyle("lg:-top-12")
      : setInfoPositionStyle("lg:top-40");
  }, [hovered]);

  return (
    <div className="">
      <InformationCircleIcon
        className={`mb-14 lg:relative cursor-pointer mx-auto h-14 w-14 project-button-info project-button-info-${color} ${infoPositionStyle}`}
        onClick={handleOpenPopup}
      />
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopupHandler}
        title={project.name}
        text={project.description}
        stack={project.stack}
        rol={project.rol}
      />
      <div className="project-container">
        <Link
            href={project.url}
            target={!isMobile ? "_blank" : ""} className="item" onMouseLeave={() => hoverOutHandler()}>
          <div
            className="item__image"
          >
            <div className="image-switch__outer">
              <div className="image-switch__inner">
                <Image src={project.img} alt="image" width={800} height={800} />
              </div>
            </div>
          </div>
          <Link
            href={project.url}
            target={!isMobile ? "_blank" : ""}
            className="item__description"
          >
            <div className="description-switch__outer">
              <div className="description-switch__inner">
                <div className="text-xl">
                  <h3 className="text-gray-900 tracking-xxs font-bold">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <div className={`flap level0Color${color}`}>
            <span className="level0-text self-center mx-auto">
              <Image
                src={project.logo}
                alt="image"
                width={200}
                height={200}
                className="h-16 w-16"
              />
            </span>
            <div className={`flap level1 level1Color${color} flip-right`}>
              <div className={`flap level2 level2Color${color} flip-down`}>
                <div
                  className={`flap level3 level3Color${color} flip-left`}
                ></div>
                <div className={`flap level3 level3Color${color} flip-right`}>
                  <div className={`flap level4 level4Color${color} flip-up`}>
                    <div
                      className={`flap level5 level5Color${color} flip-right`}
                    >
                      <div
                        className={`flap level6 level6Color${color} flip-left`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`flap level2 level2Color${color} flip-up`}>
                <div className={`flap level3 level3Color${color} flip-left`}>
                  <div
                    className={`flap level4 level4Color${color} flip-up`}
                  ></div>
                  <div className={`flap level5 level5Color${color} flip-down`}>
                    <div
                      className={`flap level6 level6Color${color} flip-left`}
                    >
                      <div
                        className={`flap level7 level7Color${color} flip-up`}
                      >
                        <div
                          className={`flap level8 level8Color${color} flip-left`}
                        ></div>
                        <div
                          className={`flap level8 level8Color${color} flip-right`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flap level1 level1Color${color} flip-left`}
              onMouseEnter={() => hoverInHandler()}
            >
              <div className={`flap level2 level2Color${color} flip-up`}>
                <div className={`flap level3 level3Color${color} flip-left`}>
                  <div className={`flap level4 level4Color${color} flip-down`}>
                    <div
                      className={`flap level5 level5Color${color} flip-left`}
                    >
                      <div
                        className={`flap level6 level6Color${color} flip-right`}
                      >
                        <div
                          className={`flap level7 level7Color${color} flip-up`}
                        >
                          <div
                            className={`flap level8Alt level8AltColor${color} flip-right`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`flap level2 level2Color${color} flip-down`}>
                <div className={`flap level3 level3Color${color} flip-right`}>
                  <div className={`flap level4 level4Color${color} flip-down`}>
                    <div
                      className={`flap level5 level5Color${color} flip-up`}
                    ></div>
                  </div>
                  <div className={`flap level5 level5Color${color} flip-up`}>
                    <div
                      className={`flap level6 level6Color${color} flip-right`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item__hover-icon">
            <div className="icon-switch__outer">
              <div className="icon-switch__inner">
                <i className="fas fa-lightbulb"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Project;
