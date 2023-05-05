import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import classes from "./jump-card.module.css";
import TextsJumpCard from "./texts-jump-card";
import YoutubeIcon from "./youtube-icon";
import YoutubePlayer from "./youtube-player";
import HeaderJumpCard from "./header-jump-card";

const JumpCard = ({ jump }) => {
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
      className={`relative flex items-center justify-center h-max border border-gray-800 ${
        isExpanded
          ? `${
              jump.best
                ? `${classes.best} border-yellow-300 shadow-yellow-300`
                : `${classes.card} border-gray-50`
            } z-30 shadow-xl rounded-md`
          : `${
              jump.best && classes.best
            } scale-100 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-md block`
      } ${showVideo ? "p-0" : "p-4"}`}
      onMouseEnter={onHoverInHandler}
      onMouseLeave={onHoverOutHandler}
    >
      {isExpanded && !showVideo && (
        <div className="absolute sm:hidden cursor-pointer right-2 top-2 animate-appear">
          <XMarkIcon
            className="h-6 w-6 text-gray-300"
            onClick={onHoverOutHandler}
          />
        </div>
      )}
      {!isExpanded && <HeaderJumpCard jump={jump} />}
      {showText && (
        <>
          <TextsJumpCard texts={jump.texts} />
          {jump.youtubeEmbedId && <YoutubeIcon onPlay={onPlayHandler} />}
        </>
      )}
      {showVideo && <YoutubePlayer jump={jump} onBack={onBackHandler} />}
    </div>
  );
};
export default JumpCard;
