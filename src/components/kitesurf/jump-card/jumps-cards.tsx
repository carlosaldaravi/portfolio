import { useMemo, useState } from "react";
import JumpCard from "./jump-card";
import Section from "@/components/UI/section";
import FilterOrder from "../filter-order/filter-order";
import { getJumpDate, getJumpNumber, getJumpString } from "./jump-texts";
import { JUMPS_ORDER_TYPES, JumpsOrder } from "@/types/jumps-order";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import type { Jump } from "@/types/kitesurf";

const COMPARATORS: Record<JumpsOrder, (a: Jump, b: Jump) => number> = {
  [JUMPS_ORDER_TYPES.date]: (a, b) => getJumpDate(b) - getJumpDate(a),
  [JUMPS_ORDER_TYPES.hangtime]: (a, b) =>
    getJumpNumber(b, "hangtime") - getJumpNumber(a, "hangtime"),
  [JUMPS_ORDER_TYPES.spot]: (a, b) =>
    getJumpString(a, "spot").localeCompare(getJumpString(b, "spot")),
};

interface JumpsCardsProps {
  jumps: Jump[];
}

const JumpsCards = ({ jumps }: JumpsCardsProps) => {
  const [cardHovered, setCardHovered] = useState(false);
  const [order, setOrder] = useState<JumpsOrder>(JUMPS_ORDER_TYPES.hangtime);
  const tracker = useTracker();

  // Sort a copy: `jumps` is a prop, and mutating it in place kept the array
  // reference identical, so React skipped the re-render the sort was for.
  const orderedJumps = useMemo(
    () => [...jumps].sort(COMPARATORS[order]),
    [jumps, order]
  );

  const orderHandler = (nextOrder: JumpsOrder) => {
    tracker.track(TRACKING_TYPES.event.kiteJumpsOrderClick, { order: nextOrder });
    setOrder(nextOrder);
  };

  const setCardHoveredHandler = () => {
    setCardHovered(true);
  };

  const removeCardHoveredHandler = () => {
    setCardHovered(false);
  };

  return (
    <Section>
      <FilterOrder onChangeOrder={orderHandler} />
      {orderedJumps.map((jump, index) => (
        <JumpCard
          key={`${getJumpString(jump, "date")}-${index}`}
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
