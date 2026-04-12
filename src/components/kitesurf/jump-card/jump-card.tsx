import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import classes from "./jump-card.module.css";
import YoutubeIcon from "./youtube-icon";
import BackSideCard from "./back-side-car";
import HeaderJumpCard from "./header-jump-card";
import FrontSideCard from "./front-side-card";
import { THEMES_TYPES } from "@/types/themes";
import useJumpCardState from "./hooks/useJumpCardState";

export interface JumpTextEntry {
  [key: string]: string | number;
}

interface JumpStyleBeforeProps {
  backgroundImage?: string;
  backgroundPosition?: string;
}

export interface JumpStyle {
  kiteCard: {
    "&::before"?: JumpStyleBeforeProps;
  };
}

export interface Jump {
  style: JumpStyle;
  texts: JumpTextEntry[];
  best: boolean;
  youtubeEmbedId?: string;
}

interface JumpCardProps {
  jump: Jump;
  cardHovered: boolean;
  onSetCardHovered: () => void;
  onRemoveCardHovered: () => void;
}

const JumpCard = ({
  jump,
  cardHovered,
  onSetCardHovered,
  onRemoveCardHovered,
}: JumpCardProps) => {
  const {
    isExpanded,
    showBackSide,
    showFrontSide,
    onPlayHandler,
    onBackHandler,
    onHoverInHandler,
    onHoverOutHandler,
    isMobile,
  } = useJumpCardState({ jump, cardHovered, onSetCardHovered, onRemoveCardHovered });

  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  return (
    <div
      className={`kite-card mt-4 sm:mt-0 flex min-h-[140px] items-center justify-center h-max border transform duration-700 ease-out transition-card rounded-xl ${
        classes.kiteCard
      } ${
        theme === THEMES_TYPES.dark
          ? classes.kiteCardDark
          : classes.kiteCardLight
      } ${jump.best ? classes.bestJump : ""} ${
        cardHovered && !isExpanded ? "blur-xxs opacity-40" : ""
      } `}
      style={{
        '--card-bg-image': jump.style.kiteCard?.["&::before"]?.backgroundImage ?? 'none',
        '--card-bg-position': jump.style.kiteCard?.["&::before"]?.backgroundPosition ?? 'center',
      } as React.CSSProperties}
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
