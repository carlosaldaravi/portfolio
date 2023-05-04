import { Transition } from "@headlessui/react";
import { useState } from "react";
import classes from "./jump-card.module.css";
import SVG from "./svg";
import YoutubeEmbed from "./youtube-embed";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const JumpCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

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
      className={`relative border border-gray-800 ${
        isExpanded
          ? `${
              data.best
                ? `${classes.best} border-yellow-300 shadow-yellow-300`
                : `${classes.card} border-gray-200`
            } z-30 shadow-xl h-36 sm:h-44 rounded-md`
          : `${
              data.best && classes.best
            } scale-100 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-md`
      } ${showVideo ? "p-0" : "p-4"}`}
      onMouseEnter={onHoverInHandler}
      onMouseLeave={onHoverOutHandler}
      // onTouchStart={onHoverInHandler}
      // onTouchEnd={onHoverOutHandler}
    >
      {isExpanded && !showVideo && (
        <motion.div
          className="absolute sm:hidden cursor-pointer right-2 top-2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1, ease: "easeInOut" },
            fill: { duration: 1, ease: [1, 0, 0.8, 1] },
          }}
        >
          <XMarkIcon
            className="h-6 w-6 text-gray-300"
            onClick={onHoverOutHandler}
          />
        </motion.div>
      )}
      {!isExpanded && (
        <>
          <h3
            className={`${classes.bajorrelieve} flex justify-center sm:justify-start text-xl text-center sm:text-start font-normal text-gray-300`}
          >
            {data.hangtime}
            {data.youtubeEmbedId && (
              <PlayCircleIcon className="w-6 h-6 text-gray-500 self-center ml-2" />
            )}
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
      {showText && (
        <>
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 1, ease: "easeInOut" },
              fill: { duration: 1, ease: [1, 0, 0.8, 1] },
            }}
          >
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
              <span className="tracking-xxs sm:text-lg text-gray-200">
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
          </motion.div>
          {data.youtubeEmbedId && (
            <motion.div
              className={`${classes.webkit} absolute mt-8 sm:mt-12 ml-1 sm:ml-4 cursor-pointer z-50`}
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1, ease: "easeInOut" },
                fill: { duration: 1, ease: [1, 0, 0.8, 1] },
              }}
              onClick={onPlayHandler}
              // onTap={onPlayHandler}
            >
              <SVG type="youtube" />
            </motion.div>
          )}
        </>
      )}

      <Transition
        show={showVideo}
        enter="transition-opacity ease-in duration-700"
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
        </div>
      </Transition>
    </div>
  );
};
export default JumpCard;
