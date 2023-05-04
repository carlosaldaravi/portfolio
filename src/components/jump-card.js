import { Transition } from "@headlessui/react";
import { useState } from "react";
import classes from "./jump-card.module.css";
import SVG from "./svg";
import YoutubeEmbed from "./youtube-embed";

const JumpCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);

  const onPlayHandler = () => {
    setIsExpanded(true);
    setShowVideo(true);
    setShowText(false);
  };

  const onHoverInHandler = () => {
    if (!showVideo) {
      setIsExpanded(true);
      setShowText(true);
    }
  };

  const onHoverOutHandler = () => {
    if (!showVideo) {
      setIsExpanded(false);
      setShowText(false);
    }
  };

  const onBackHandler = () => {
    setShowText(true);
    setShowVideo(false);
  };

  return (
    <div
      className={`relative border border-gray-800 transition-all duration-1000 ease-in transform ${
        isExpanded
          ? `${
              data.best
                ? `${classes.best} border-yellow-300 shadow-yellow-300`
                : `${classes.card} border-gray-300`
            } scale-y-110 z-50 shadow-xl h-36 sm:h-44 rounded-md`
          : `${
              data.best && classes.best
            } scale-100 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-md`
      } ${showVideo ? "p-0" : "p-4"}`}
      onMouseEnter={onHoverInHandler}
      onMouseLeave={onHoverOutHandler}
      onTouchStart={onHoverInHandler}
      onTouchEnd={onHoverOutHandler}
    >
      {!isExpanded && (
        <>
          <h3
            className={`${classes.bajorrelieve} text-xl text-center sm:text-start font-normal text-gray-300`}
          >
            {data.hangtime}
          </h3>
          <div
            className={`${classes.bajorrelieve} absolute hidden tracking-sm sm:block top-2 right-2 text-gray-300`}
          >
            {data.date}
          </div>
          <div
            className={`${classes.bajorrelieve} absolute hidden tracking-sm sm:block top-2/4 right-2 text-gray-300`}
          >
            {data.spot}
          </div>
        </>
      )}
      <Transition
        show={showText}
        enter="transition-opacity ease-in duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex">
            <span className="text-gray-400 tracking-xs w-28 uppercase self-center text-end mr-4 text-xs sm:text-base sm:tracking-sm sm:mr-12 sm:w-36">
              Hangtime
            </span>{" "}
            <span className="sm:text-lg text-gray-200">{data.hangtime}</span>
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
        <div
          className={`${classes.webkit} absolute mt-8 sm:mt-12 ml-1 sm:ml-4 cursor-pointer`}
          onClick={onPlayHandler}
        >
          {data.youtubeEmbedId && <SVG type="youtube" />}
        </div>
      </Transition>
      <Transition
        show={showVideo}
        enter="transition-opacity ease-in duration-[2s]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={`rounded-xl`}>
          <div
            className={`flex justify-between px-8 text-center bg-gray-500 tracking-xxs cursor-pointer ${
              data.best ? "text-yellow-300" : "text-gray-100"
            }`}
            onClick={onBackHandler}
          >
            <SVG type="backArrow" />
            {data.hangtime}
          </div>
          <YoutubeEmbed
            embedId={data.youtubeEmbedId}
            title={data.hangtime}
            className={"rounded-xl"}
          />
          {/* <div
            className="bg-gray-500 text-gray-100 tracking-xs text-center cursor-pointer hover:-translate-y-1 active:translate-y-1 hover:shadow-sm hover:border-none"
            onClick={onBackHandler}
          >
            Back
          </div> */}
        </div>
      </Transition>
    </div>
  );
};
export default JumpCard;
