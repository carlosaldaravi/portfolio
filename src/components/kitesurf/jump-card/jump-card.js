import { useContext, useEffect, useState } from "react";
import { useTools } from "@/hooks/useTools";
import ThemeContext from "@/store/theme-context";
import classes from "./jump-card.module.css";
import YoutubeIcon from "./youtube-icon";
import BackSideCard from "./back-side-car";
import HeaderJumpCard from "./header-jump-card";
import FrontSideCard from "./front-side-card";
import { createUseStyles } from "react-jss";

const useStyles = (style) => createUseStyles(style);

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
  const styles = useStyles(jump.style)();
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
      className={`kite-card mt-4 sm:mt-0 flex min-h-[140px] items-center justify-center h-max border transform duration-700 ease-out transition-card rounded-xl ${
        classes.kiteCard
      } ${styles.kiteCard} ${
        theme === "dark" ? classes.kiteCardDark : classes.kiteCardLight
      } ${jump.best ? classes.bestJump : ""} ${
        cardHovered && !isExpanded ? "blur-xxs opacity-40" : ""
      } `}
      onMouseEnter={onHoverInHandler}
      onMouseLeave={onHoverOutHandler}
    >
      {!isExpanded && !showFrontSide && !isMobile && (
        <HeaderJumpCard jump={jump} />
      )}
      {(isMobile || showFrontSide) && !showBackSide && (
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
