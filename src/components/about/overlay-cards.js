import { FormattedMessage } from "react-intl";
import Card from "./card";

const OverlayCards = ({ cards }) => {

  return (
    <div className="mt-12 sm:mt-24 text-center">
      <h3 className="text-2xl sm:text-3xl text-gray-300 font-thin">
        <FormattedMessage id="page.about.freeTime" />
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-16 mt-12 max-w-screen-xl mx-auto">
        {cards.map((card) => (
          <Card
            key={card.name}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};

export default OverlayCards;
