import { useState } from "react";

interface TwitterProps {
  size?: string;
  className?: string;
}

export const Twitter = ({ size, className = "" }: TwitterProps) => {
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
      enableBackground="new 0 0 72 72"
      viewBox="0 0 72 72"
      fill="currentColor"
      id="twitter-x"
    >
      <switch>
        <g>
          <path
            d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
        h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
          ></path>
        </g>
      </switch>
    </svg>
  );
};
