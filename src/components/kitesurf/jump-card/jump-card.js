import { useContext, useEffect, useState } from "react";
import { useTools } from "@/hooks/useTools";
import ThemeContext from "@/store/theme-context";
import classes from "./jump-card.module.css";
import YoutubeIcon from "./youtube-icon";
import BackSideCard from "./back-side-car";
import HeaderJumpCard from "./header-jump-card";
import FrontSideCard from "./front-side-card";

const JumpCard = ({
  jump,
  cardHovered,
  onSetCardHovered,
  onRemoveCardHovered,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBackSide, setShowBackSide] = useState(false);
  const [showFrontSide, setShowFrontSide] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const { isMobile } = useTools();

  const theme = themeCtx.theme;

  const onPlayHandler = () => {
    setShowBackSide(true);
    setShowFrontSide(false);
  };

  const onBackHandler = () => {
    setShowFrontSide(true);
    setShowBackSide(false);
  };

  const onHoverInHandler = () => {
    if (!isMobile && !showBackSide) {
      setShowFrontSide(true);
      onSetCardHovered();
    }
  };

  const onHoverOutHandler = () => {
    if (!isMobile && !showBackSide) {
      setShowFrontSide(false);
    }
    if (!isMobile && cardHovered) {
      onRemoveCardHovered();
    }
  };

  useEffect(() => {
    if (showFrontSide || showBackSide) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [showFrontSide, showBackSide]);

  return (
    <div
      className={`relative flex min-h-[140px] items-center justify-center h-max border sm:transform sm:duration-500 sm:ease-in sm:transition-all ${
        isExpanded || isMobile
          ? `${
              jump.best
                ? `${classes.best} border-yellow-300 shadow-yellow-300`
                : `${classes.card} border-gray-100`
            } z-10 shadow-lg rounded-md ${cardHovered && "blur-none"}`
          : `${
              jump.best && classes.best
            } scale-100 bg-gradient-to-r rounded-t-md block transform duration-300 ease-in ${
              theme === "dark"
                ? "from-[#404652] to-[#111827] border-dark-secondary"
                : "from-[#bebebe] to-[#777] border-light-secondary"
            } ${cardHovered ? "blur-xxs opacity-40" : "blur-none"}`
      } ${showBackSide ? "p-0" : "p-4"}`}
      onMouseEnter={onHoverInHandler}
      onMouseLeave={onHoverOutHandler}
    >
      {!isExpanded && !showFrontSide && !isMobile && (
        <HeaderJumpCard jump={jump} />
      )}
      {((isMobile || showFrontSide) && !showBackSide) && (
        <>
          <FrontSideCard texts={jump.texts} />
          {jump.youtubeEmbedId && <YoutubeIcon onPlay={onPlayHandler} />}
        </>
      )}
      {showBackSide && <BackSideCard jump={jump} onBack={onBackHandler} />}
    </div>
  );
};
export default JumpCard;
