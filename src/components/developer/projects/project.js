import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Project = ({ project, colorNum, onHover }) => {
  const [color, setColor] = useState("1");

  useEffect(() => {
    setColor(colorNum);
  }, [colorNum]);

  return (
    <Link href={project.url} target="_blank" className="container">
      <div className="item">
        <div className="item__image">
          <div className="image-switch__outer">
            <div className="image-switch__inner">
              <Image src={project.img} alt="image" width={800} height={800} />
            </div>
          </div>
        </div>
        <div className="item__description">
          <div className="description-switch__outer">
            <div className="description-switch__inner">
              <div className="w-[90%] text-xl">
                <h3 className="text-gray-900 tracking-xxs font-bold">
                  {project.name}
                </h3>
                <p className="capitalize">{project.rol}</p>
                <p className="capitalize">{project.year}</p>
                <p className="capitalize">{project.stack}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`flap level0Color${color}`}>
          <span className="level0-text self-center mx-auto">
            <Image
              src={project.logo}
              alt="image"
              width={200}
              height={200}
              className=""
            />
          </span>
          <div className={`flap level1 level1Color${color} flip-right`}>
            <div className={`flap level2 level2Color${color} flip-down`}>
              <div
                className={`flap level3 level3Color${color} flip-left`}
              ></div>
              <div className={`flap level3 level3Color${color} flip-right`}>
                <div className={`flap level4 level4Color${color} flip-up`}>
                  <div className={`flap level5 level5Color${color} flip-right`}>
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
                  <div className={`flap level6 level6Color${color} flip-left`}>
                    <div className={`flap level7 level7Color${color} flip-up`}>
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
            onMouseEnter={() => onHover(true)}
          >
            <div className={`flap level2 level2Color${color} flip-up`}>
              <div className={`flap level3 level3Color${color} flip-left`}>
                <div className={`flap level4 level4Color${color} flip-down`}>
                  <div className={`flap level5 level5Color${color} flip-left`}>
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
      </div>
    </Link>
  );
};
export default Project;
