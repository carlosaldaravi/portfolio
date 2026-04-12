import { useState } from "react";
import JumpCard from "./jump-card";
import Section from "@/components/UI/section";
import FilterOrder from "../filter-order/filter-order";
import { JUMPS_ORDER_TYPES, JumpsOrder } from "@/types/jumps-order";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import { Jump } from "./jump-card";

interface JumpsCardsProps {
  jumps: Jump[];
}

const JumpsCards = ({ jumps }: JumpsCardsProps) => {
  const [cardHovered, setCardHovered] = useState(false);
  const [orderedJumps, setOrderedJumps] = useState<Jump[]>(jumps);
  const [updateFlag, setUpdateFlag] = useState(false);
  const tracker = useTracker();

  const orderHandler = (order: JumpsOrder) => {
    tracker.track(TRACKING_TYPES.event.kiteJumpsOrderClick, {
      order,
    });
    if (order === JUMPS_ORDER_TYPES.date) {
      setOrderedJumps(
        jumps.sort((a, b) => {
          const dateA = new Date(
            (a.texts[1].date as string).split("/").reverse().join("/")
          );
          const dateB = new Date(
            (b.texts[1].date as string).split("/").reverse().join("/")
          );
          return dateB.getTime() - dateA.getTime();
        })
      );
    }
    if (order === JUMPS_ORDER_TYPES.hangtime) {
      setOrderedJumps(
        jumps.sort((a, b) => {
          return (b.texts[0].hangtime as number) - (a.texts[0].hangtime as number);
        })
      );
    }
    if (order === JUMPS_ORDER_TYPES.spot) {
      setOrderedJumps(
        jumps.sort((a, b) => (a.texts[2].spot as string).localeCompare(b.texts[2].spot as string))
      );
    }
    setUpdateFlag(!updateFlag);
  };

  const setCardHoveredHandler = () => {
    setCardHovered(true);
  };

  const removeCardHoveredHandler = () => {
    setCardHovered(false);
  };

  return (
    <Section className="">
      <FilterOrder onChangeOrder={(order: JumpsOrder) => orderHandler(order)} />
      {orderedJumps.map((jump, index) => (
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
