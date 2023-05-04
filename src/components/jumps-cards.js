import JumpCard from "./jump-card";
import classes from "./jumps-cards.module.css";

const JumpsCards = ({ jumps }) => {
  return (
    <div className="absolute top-[28rem] left-1/2 -translate-x-1/2 w-2/3 min-w-md max-w-xl">
      {/* <div className="text-center text-2xl mb-2 tracking-xs"></div> */}
      <span
        className={`${classes.title} my-4 text-gray-400`}
      >
        Best Jumps
      </span>
      {jumps.map((jump) => (
        <JumpCard key={jump.date} data={jump} />
      ))}
    </div>
  );
};

export default JumpsCards;
