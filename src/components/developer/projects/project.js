import Image from "next/image";

const Project = ({ project }) => {
  return (
    <div className="container">
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
              <a href={project.url} target="_blank">
                <h3 className="text-gray-900 tracking-xxs font-bold">{project.name}</h3>
                <p className="capitalize">{project.rol}</p>
                <p className="capitalize">{project.year}</p>
                <p className="capitalize">{project.stack}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flap level0">
          <span className="level0-text self-center mx-auto">
            <Image src={project.logo} alt="image" width={200} height={200} className="" />
          </span>
          <div className="flap level1 flip-right">
            <div className="flap level2 flip-down">
              <div className="flap level3 flip-left"></div>
              <div className="flap level3 flip-right">
                <div className="flap level4 flip-up">
                  <div className="flap level5 flip-right">
                    <div className="flap level6 flip-left"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flap level2 flip-up">
              <div className="flap level3 flip-left">
                <div className="flap level4 flip-up"></div>
                <div className="flap level5 flip-down">
                  <div className="flap level6 flip-left">
                    <div className="flap level7 flip-up">
                      <div className="flap level8 flip-left"></div>
                      <div className="flap level8 flip-right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flap level1 flip-left">
            <div className="flap level2 flip-up">
              <div className="flap level3 flip-left">
                <div className="flap level4 flip-down">
                  <div className="flap level5 flip-left">
                    <div className="flap level6 flip-right">
                      <div className="flap level7 flip-up">
                        <div className="flap level8--alt flip-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flap level2 flip-down">
              <div className="flap level3 flip-right">
                <div className="flap level4 flip-down">
                  <div className="flap level5 flip-up"></div>
                </div>
                <div className="flap level5 flip-up">
                  <div className="flap level6 flip-right"></div>
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
    </div>
  );
};
export default Project;
