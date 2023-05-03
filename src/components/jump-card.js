import { useState } from "react";
import classes from "./jump-card.module.css";

const JumpCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`relative p-4 cursor-pointer border border-gray-800 rounded-t-md transition-all duration-1000 ease-in-out transform ${
        isExpanded
          ? `${classes.card} scale-y-110 z-50 h-36 shadow-lg sm:h-44`
          : "scale-100 bg-gradient-to-r from-gray-600 to-gray-900"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onTouchStart={() => setIsExpanded(true)}
      onTouchEnd={() => setIsExpanded(false)}
    >
      {!isExpanded && (
        <>
          <h3 className={`${classes.bajorrelieve} text-xl text-center sm:text-start font-normal text-gray-300`}>
            {data.hangtime}
          </h3>
          <div className={`${classes.bajorrelieve} absolute hidden tracking-sm sm:block top-2 right-2 text-gray-300`}>
            {data.date}
          </div>
          <div className={`${classes.bajorrelieve} absolute hidden tracking-sm sm:block top-2/4 right-2 text-gray-300`}>
            {data.spot}
          </div>
        </>
      )}
      {isExpanded && (
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex">
            <span className="text-gray-400 tracking-xs w-28 uppercase self-center text-end mr-4 text-xs sm:text-base sm:tracking-sm sm:mr-12 sm:w-36">
              Hangtime
            </span>{" "}
            <span className="sm:text-lg text-gray-200">
              {data.hangtime}
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-400 tracking-xs w-28 uppercase self-center text-end mr-4 text-xs sm:text-base sm:tracking-sm sm:mr-12 sm:w-36">
              Date
            </span>{" "}
            <span className="tracking-xs sm:text-lg text-gray-200">
              {data.date}
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-400 tracking-xs w-28 uppercase self-center text-end mr-4 text-xs sm:text-base sm:tracking-sm sm:mr-12 sm:w-36">
              Spot
            </span>{" "}
            <span className="tracking-xs sm:text-lg text-gray-200">
              {data.spot}
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-400 tracking-xs w-28 uppercase self-center text-end mr-4 text-xs sm:text-base sm:tracking-sm sm:mr-12 sm:w-36">
              Kite
            </span>{" "}
            <span className="tracking-xs sm:text-lg text-gray-200">
              {data.kite}
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-400 tracking-xs w-28 uppercase self-center text-end mr-4 text-xs sm:text-base sm:tracking-sm sm:mr-12 sm:w-36">
              Size
            </span>{" "}
            <span className="tracking-xs sm:text-lg text-gray-200">
              {data.size}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default JumpCard;
