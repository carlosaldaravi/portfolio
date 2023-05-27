import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import classes from "./jump-card.module.css";
import TextsJumpCard from "./texts-jump-card";
import YoutubeIcon from "./youtube-icon";
import YoutubePlayer from "./youtube-player";
import HeaderJumpCard from "./header-jump-card";
import { useTools } from "../../../hooks/useTools";

const JumpCard = ({
  jump,
  cardHovered,
  onSetCardHovered,
  onRemoveCardHovered,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);
  const { isMobile } = useTools();

  const onPlayHandler = () => {
    setIsExpanded(true);
    setShowVideo(true);
    setShowText(false);
  };

  const onHoverInHandler = () => {
    if (!isMobile && !showVideo) {
      setIsExpanded(true);
      setShowText(true);
      onSetCardHovered();
    }
  };

  const onShowMoreHandler = () => {
    if (isMobile && !showVideo && !cardHovered) {
      setIsExpanded(true);
      setShowText(true);
      onSetCardHovered();
    }
  };

  const onHoverOutHandler = () => {
    if (!isMobile && !showVideo) {
      setIsExpanded(false);
      setShowText(false);
    }
    if (!isMobile && cardHovered) {
      onRemoveCardHovered();
    }
  };

  const onCloseExpandedCardHandler = () => {
    setIsExpanded(false);
    setShowText(false);
    onRemoveCardHovered();
  };

  const onBackHandler = () => {
    setShowText(true);
    setShowVideo(false);
  };

  return (
    <div
      className={`relative flex items-center justify-center h-max border border-gray-800 transform duration-500 ease-in transition-all ${
        isExpanded
          ? `${
              jump.best
                ? `${classes.best} border-yellow-300 shadow-yellow-300`
                : `${classes.card} border-gray-100`
            } z-30 shadow-lg rounded-md ${
              cardHovered && "blur-none"
            }`
          : `${
              jump.best && classes.best
            } scale-100 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-md block transform duration-300 ease-in ${
              cardHovered ? "blur-xxs opacity-40" : "blur-none"
            }`
      } ${showVideo ? "p-0" : "p-4"}`}
      onMouseEnter={onHoverInHandler}
      onMouseLeave={onHoverOutHandler}
    >
      {isExpanded && !showVideo && (
        <div className="absolute sm:hidden cursor-pointer right-2 top-2 animate-appear">
          <XMarkIcon
            className="h-6 w-6 text-gray-300"
            onClick={onCloseExpandedCardHandler}
          />
        </div>
      )}
      {!isExpanded && <HeaderJumpCard jump={jump} onShowMore={onShowMoreHandler} />}
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
