import { FormattedMessage } from "react-intl";
import JumpCard from "./jump-card";
import classes from "./jumps-cards.module.css";

const JumpsCards = ({ jumps }) => {
  return (
    <div className="absolute top-[28rem] left-1/2 -translate-x-1/2 w-2/3 min-w-md max-w-xl">
      <span className={`${classes.title} my-4 text-gray-400`}>
        <FormattedMessage id="page.kitesurf.bestJumps" />
      </span>
      {jumps.map((jump, index) => (
        <JumpCard key={`${jump.date} - ${index}`} jump={jump} />
      ))}
    </div>
  );
};

export default JumpsCards;
