import { useState } from "react";
import { FormattedMessage } from "react-intl";
import JumpCard from "./jump-card";
import classes from "./jumps-cards.module.css";

const JumpsCards = ({ jumps }) => {
  const [cardHovered, setCardHovered] = useState(false);

  const setCardHoveredHandler = () => {
    setCardHovered(true);
  };

  const removeCardHoveredHandler = () => {
    setCardHovered(false);
  };

  return (
    <div className="mx-auto mt-10 w-3/4 min-w-md max-w-6xl">
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
