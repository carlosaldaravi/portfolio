import { useState } from "react";

interface TiktokProps {
  size?: string;
  className?: string;
}

export const Tiktok = ({ size, className = "" }: TiktokProps) => {
  const [mouseIn, setMouseIn] = useState(false);

  const onMouseEnterHandler = () => {
    setMouseIn(true);
  };
  const onMouseLeaveHandler = () => {
    setMouseIn(false);
  };

  return (
    <svg
      className={`cursor-pointer transition-all duration-300 ease-in-out ${
        size ? size : "h-8 w-8"
      } ${mouseIn ? "opacity-100" : "opacity-60"} ${className}`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 2859 3333"
      onMouseEnter={onMouseEnterHandler}
      onTouchStart={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onTouchEnd={onMouseLeaveHandler}
    >
      <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" />
    </svg>
  );
};
