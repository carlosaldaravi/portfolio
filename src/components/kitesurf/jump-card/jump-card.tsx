import { useTheme } from "@/store/theme-context";
import classes from "./jump-card.module.css";
import YoutubeIcon from "./youtube-icon";
import BackSideCard from "./back-side-car";
import HeaderJumpCard from "./header-jump-card";
import FrontSideCard from "./front-side-card";
import useJumpCardState from "./hooks/useJumpCardState";
import type { Jump } from "@/types/kitesurf";

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

  const { isDark } = useTheme();

  return (
    <div
      className={`kite-card mt-4 sm:mt-0 flex min-h-[140px] items-center justify-center h-max border transform duration-700 ease-out transition-card rounded-xl ${
        classes.kiteCard
      } ${
        isDark
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
