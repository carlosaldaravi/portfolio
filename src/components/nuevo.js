import Image from "next/image";

const Nuevo = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="item__image">
          <div className="image-switch__outer">
            <div className="image-switch__inner">
              <Image src="/cometa.png" alt="image" width={800} height={800} />
            </div>
          </div>
        </div>
        <div className="item__description">
          <div className="description-switch__outer">
            <div className="description-switch__inner">
              <a
                href="https://www.nytimes.com/2017/02/16/automobiles/headlights-get-new-attention-as-more-than-a-car-design-flourish.html"
                target="_blank"
              >
                <p>Evo Dlab</p>
                <div className="item__action-arrow">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flap level0">
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
export default Nuevo;
