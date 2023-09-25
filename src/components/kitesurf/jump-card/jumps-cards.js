import { useState } from "react";
import JumpCard from "./jump-card";
import Section from "@/components/UI/section";

const JumpsCards = ({ jumps }) => {
  const [cardHovered, setCardHovered] = useState(false);

  const setCardHoveredHandler = () => {
    setCardHovered(true);
  };

  const removeCardHoveredHandler = () => {
    setCardHovered(false);
  };

  return (
    <Section className="">
      {jumps.map((jump, index) => (
        <JumpCard
          key={`${jump.texts[1].date}-${index}`}
          jump={jump}
          cardHovered={cardHovered}
          onSetCardHovered={setCardHoveredHandler}
          onRemoveCardHovered={removeCardHoveredHandler}
        />
      ))}
    </Section>
  );
};

export default JumpsCards;
