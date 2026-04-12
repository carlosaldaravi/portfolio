import { useEffect, useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import { Jump, JumpTextEntry } from "../jump-card";

interface UseJumpCardStateProps {
  jump: Jump;
  cardHovered: boolean;
  onSetCardHovered: () => void;
  onRemoveCardHovered: () => void;
}

interface UseJumpCardStateReturn {
  isExpanded: boolean;
  showBackSide: boolean;
  showFrontSide: boolean;
  onPlayHandler: () => void;
  onBackHandler: () => void;
  onHoverInHandler: () => void;
  onHoverOutHandler: () => void;
  isMobile: boolean;
}

const useJumpCardState = ({
  jump,
  cardHovered,
  onSetCardHovered,
  onRemoveCardHovered,
}: UseJumpCardStateProps): UseJumpCardStateReturn => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBackSide, setShowBackSide] = useState(false);
  const [showFrontSide, setShowFrontSide] = useState(false);
  const { isMobile } = useResponsive();
  const tracker = useTracker();

  const onPlayHandler = () => {
    setShowBackSide(true);
    setShowFrontSide(false);

    tracker.track(
      TRACKING_TYPES.event.youtubeIconClick,
      jump.texts.reduce((result: Record<string, string | number>, currentObject: JumpTextEntry) => {
        return Object.assign(result, currentObject);
      }, {})
    );
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

  return {
    isExpanded,
    showBackSide,
    showFrontSide,
    onPlayHandler,
    onBackHandler,
    onHoverInHandler,
    onHoverOutHandler,
    isMobile,
  };
};

export default useJumpCardState;
