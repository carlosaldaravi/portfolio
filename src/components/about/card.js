import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useTools } from "@/hooks/useTools";
import classes from "./card.module.css";

const Card = ({ card }) => {
  const [showArrows, setShowArrows] = useState(true);
  const { isMobile } = useTools();
  const infoRef = useRef(null);

  const resetScroll = () => {
    if (infoRef.current) {
      infoRef.current.scrollTop = 0;
    }
    setShowArrows(true);
  };

  return (
    <div
      key={`overlayCard-${card.name}`}
      className={`${classes.card} ${card.img}`}
      onMouseLeave={resetScroll}
      onTouchEnd={resetScroll}
      onMouseEnter={() => setShowArrows(false)}
      onTouchStart={() => setShowArrows(false)}
    >
      <div className="about__card__container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
      <div
        ref={infoRef}
        className={`${classes.info} ${card.before} overflow-y-scroll scrollbar-hide`}
      >
        <h3
          className={`${classes.title} flex justify-center capitalize text-center tracking-xxs items-center`}
        >
          {showArrows && isMobile && (
            <div className="animate-bounce mr-6 sm:mr-12 text-2xl">&#8593;</div>
          )}
          <FormattedMessage id={card.name} />
          {showArrows && isMobile && (
            <div className="animate-bounce ml-6 sm:ml-12 text-2xl">&#8593;</div>
          )}
        </h3>
        <p className={`${classes.description} ${classes.paragraph}`}>
          <FormattedMessage id={card.text} />
        </p>
      </div>
    </div>
  );
};

export default Card;
