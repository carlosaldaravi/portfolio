import { useState } from "react";

interface YoutubeHomeProps {
  size?: string;
  className?: string;
}

export const YoutubeHome = ({ size, className = "" }: YoutubeHomeProps) => {
  const [mouseIn, setMouseIn] = useState(false);

  const onMouseEnterHandler = () => {
    setMouseIn(true);
  };
  const onMouseLeaveHandler = () => {
    setMouseIn(false);
  };

  return (
    <svg
      onMouseEnter={onMouseEnterHandler}
      onTouchStart={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onTouchEnd={onMouseLeaveHandler}
      className={`cursor-pointer transition-all duration-300 ease-in-out ${
        size ? size : "h-8 w-8"
      } ${mouseIn ? "opacity-100" : "opacity-60"} ${className}`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 461.001 461.001"
    >
      <path d="M365.3 67.4H95.7A95.7 95.7 0 0 0 0 163V298a95.7 95.7 0 0 0 95.7 95.7h269.6A95.7 95.7 0 0 0 461 298V163a95.7 95.7 0 0 0-95.7-95.7zM300.5 237l-126 60a5 5 0 0 1-7.3-4.5v-124a5 5 0 0 1 7.4-4.5l126 63.9a5 5 0 0 1 0 9z" />
    </svg>
  );
};
