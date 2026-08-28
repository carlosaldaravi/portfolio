import React, { useRef } from "react";
import { SWIPE_THRESHOLD } from "@/constants/ui";

interface UseSwipeDetectionProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

interface UseSwipeDetectionReturn {
  touchStartHandler: (e: React.TouchEvent) => void;
  touchMoveHandler: (e: React.TouchEvent) => void;
  touchEndHandler: () => void;
}

/**
 * Horizontal swipe detection for the kitesurf section slider.
 *
 * The touch coordinates live in refs, not state: they are transient input, and
 * holding them in state re-rendered the whole section on every `touchmove`.
 */
const useSwipeDetection = ({
  onSwipeLeft,
  onSwipeRight,
}: UseSwipeDetectionProps): UseSwipeDetectionReturn => {
  const touchStart = useRef(0);

  // Clearing the origin also disarms the gesture: further moves are ignored
  // until the next touchstart, so a single swipe fires exactly once.
  const reset = () => {
    touchStart.current = 0;
  };

  const touchStartHandler = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const touchMoveHandler = (e: React.TouchEvent) => {
    if (touchStart.current === 0) return;

    const travelled = touchStart.current - e.touches[0].clientX;
    if (Math.abs(travelled) <= SWIPE_THRESHOLD) return;

    reset();
    if (travelled > 0) onSwipeLeft();
    else onSwipeRight();
  };

  return { touchStartHandler, touchMoveHandler, touchEndHandler: reset };
};

export default useSwipeDetection;
