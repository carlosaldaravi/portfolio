import { useRef } from "react";
import classes from "./overlay-card.module.css";
import { FormattedMessage } from "react-intl";

const Card = ({ card }) => {
  const infoRef = useRef(null);

  const resetScroll = () => {
    if (infoRef.current) {
      infoRef.current.scrollTop = 0;
    }
  };

  return (
    <div
      key={`overlayCard-${card.name}`}
      className={`${classes.card} ${card.img}`}
      onMouseLeave={resetScroll}
    >
      <div
        ref={infoRef}
        className={`${classes.info} ${card.before} overflow-y-scroll scrollbar-hide`}
      >
        <h1
          className={`${classes.title} capitalize text-4xl text-center tracking-xxs items-center mt-5`}
        >
          {card.name}
        </h1>
        <p className={`${classes.description} ${classes.paragraph}`}>
          {card.text}
        </p>
      </div>
    </div>
  );
};

const OverlayCard = ({ cards }) => {
  return (
    <div className="mt-12 sm:mt-24 text-center">
      <h3 className="text-2xl sm:text-3xl text-gray-300 font-thin"><FormattedMessage id="page.about.freeTime" /></h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {cards.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
};

export default OverlayCard;
