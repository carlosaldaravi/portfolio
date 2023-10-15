import { useState } from "react";
import JumpCard from "./jump-card";
import Section from "@/components/UI/section";
import FilterOrder from "../filter-order/filter-order";
import { JUMPS_ORDER_TYPES } from "@/types/jumps-order";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";

const JumpsCards = ({ jumps }) => {
  const [cardHovered, setCardHovered] = useState(false);
  const [orderedJumps, setOrderedJumps] = useState(jumps);
  const [updateFlag, setUpdateFlag] = useState(false);
  const tracker = useTracker();

  const orderHandler = (order) => {
    tracker.track(TRACKING_TYPES.event.kiteJumpsOrderClick, {
      order,
    });
    if (order === JUMPS_ORDER_TYPES.date) {
      setOrderedJumps(
        jumps.sort((a, b) => {
          const dateA = new Date(
            a.texts[1].date.split("/").reverse().join("/")
          );
          const dateB = new Date(
            b.texts[1].date.split("/").reverse().join("/")
          );
          return dateB - dateA;
        })
      );
    }
    if (order === JUMPS_ORDER_TYPES.hangtime) {
      setOrderedJumps(
        jumps.sort((a, b) => {
          return b.texts[0].hangtime - a.texts[0].hangtime;
        })
      );
    }
    if (order === JUMPS_ORDER_TYPES.spot) {
      setOrderedJumps(
        jumps.sort((a, b) => a.texts[2].spot.localeCompare(b.texts[2].spot))
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
      <FilterOrder onChangeOrder={(order) => orderHandler(order)} />
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
