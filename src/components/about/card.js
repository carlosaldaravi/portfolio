import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import classes from "./card.module.css";

const Card = ({ card }) => {
  const [showArrows, setShowArrows] = useState(true);
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
          className={`${classes.title} flex justify-center capitalize text-4xl text-center tracking-xxs items-center`}
        >
          {showArrows && <div className="animate-bounce mr-6">&#8593;</div>}
          <FormattedMessage id={card.name} />
          {showArrows && <div className="animate-bounce ml-6">&#8593;</div>}
        </h3>
        <p className={`${classes.description} ${classes.paragraph}`}>
          <FormattedMessage id={card.text} />
        </p>
      </div>
    </div>
  );
};

export default Card;
