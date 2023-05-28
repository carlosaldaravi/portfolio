import { useRef } from "react";
import { FormattedMessage } from "react-intl";
import classes from "./card.module.css";

const Card = ({ card, hasBeenHovered, onHover }) => {
  const infoRef = useRef(null);

  const resetScroll = () => {
    if (infoRef.current) {
      infoRef.current.scrollTop = 0;
    }
  };

  return (
    <div
      key={`overlayCard-${card.name}`}
      className={`${classes.card} ${card.img} ${
        !hasBeenHovered && "animate-pulse"
      }`}
      onMouseEnter={onHover}
      onTouchStart={onHover}
      onMouseLeave={resetScroll}
      onTouchEnd={resetScroll}
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
          className={`${classes.title} capitalize text-4xl text-center tracking-xxs items-center mt-5`}
        >
          <FormattedMessage id={card.name} />
        </h3>
        <p className={`${classes.description} ${classes.paragraph}`}>
          <FormattedMessage id={card.text} />
        </p>
      </div>
    </div>
  );
};

export default Card;
