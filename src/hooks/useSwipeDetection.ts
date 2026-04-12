import React, { useEffect, useState } from "react";
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

const useSwipeDetection = ({
  onSwipeLeft,
  onSwipeRight,
}: UseSwipeDetectionProps): UseSwipeDetectionReturn => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const touchStartHandler = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const touchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const touchEndHandler = () => {
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    if (touchEnd !== 0) {
      if (touchStart - touchEnd > SWIPE_THRESHOLD) {
        onSwipeLeft();
        touchEndHandler();
      } else if (touchEnd - touchStart > SWIPE_THRESHOLD) {
        onSwipeRight();
        touchEndHandler();
      }
    }
  }, [touchStart, touchEnd, onSwipeLeft, onSwipeRight]);

  return { touchStartHandler, touchMoveHandler, touchEndHandler };
};

export default useSwipeDetection;
