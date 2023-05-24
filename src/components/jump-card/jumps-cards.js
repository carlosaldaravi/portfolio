import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import JumpCard from "./jump-card";
import classes from "./jumps-cards.module.css";

const JumpsCards = ({ jumps }) => {
  const [cardHovered, setCardHovered] = useState(false);

  useEffect(() => {
    // console.log("cardHovered: ", cardHovered);
  }, [cardHovered]);

  const setCardHoveredHandler = () => {
    setCardHovered(true);
  };

  const removeCardHoveredHandler = () => {
    setCardHovered(false);
  };

  return (
    <div className="mx-auto mt-10 w-2/3 min-w-md max-w-6xl">
      <span className={`${classes.title} my-4 text-gray-400`}>
        <FormattedMessage id="page.kitesurf.bestJumps" />
      </span>
      {jumps.map((jump, index) => (
        <JumpCard
          key={`${jump.texts[1].date}-${index}`}
          jump={jump}
          cardHovered={cardHovered}
          onSetCardHovered={setCardHoveredHandler}
          onRemoveCardHovered={removeCardHoveredHandler}
        />
      ))}
    </div>
  );
};

export default JumpsCards;
