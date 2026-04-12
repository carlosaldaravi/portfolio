import { useState } from "react";

interface InstagramProps {
  size?: string;
  className?: string;
}

export const Instagram = ({ size, className = "" }: InstagramProps) => {
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
      viewBox="0 0 122.9 122.9"
    >
      <path d="M61.5 0A435 435 0 0 0 36 .4a45 45 0 0 0-14.9 2.8 29.9 29.9 0 0 0-10.9 7.1 30.3 30.3 0 0 0-7 10.9 45 45 0 0 0-3 15C.2 42.6 0 44.6 0 61.3s0 18.8.4 25.4a45 45 0 0 0 2.8 14.9 30.1 30.1 0 0 0 7.1 10.9 30.1 30.1 0 0 0 10.9 7 45.2 45.2 0 0 0 15 3c6.5.2 8.5.3 25.2.3s18.8 0 25.4-.4a45.2 45.2 0 0 0 14.9-2.8 31.5 31.5 0 0 0 18-18 45.6 45.6 0 0 0 2.8-15c.3-6.5.4-8.6.4-25.3s0-18.8-.4-25.3a45.7 45.7 0 0 0-2.8-15 30.1 30.1 0 0 0-7.1-10.8 29.8 29.8 0 0 0-10.9-7 45.1 45.1 0 0 0-15-3C80.3.2 78.2 0 61.5 0Zm-5.6 11h5.6c16.4 0 18.3.1 24.8.4a34 34 0 0 1 11.4 2.1 19 19 0 0 1 7 4.6 19.2 19.2 0 0 1 4.6 7.1 34 34 0 0 1 2.2 11.4c.3 6.5.3 8.4.3 24.8s0 18.4-.3 24.9a33.9 33.9 0 0 1-2.2 11.4 20.4 20.4 0 0 1-11.6 11.6 33.6 33.6 0 0 1-11.4 2.1c-6.5.3-8.4.4-24.8.4s-18.4 0-24.9-.4a34 34 0 0 1-11.4-2.1 19 19 0 0 1-7-4.6 19 19 0 0 1-4.6-7 34 34 0 0 1-2.2-11.5c-.3-6.4-.3-8.4-.3-24.8s0-18.3.3-24.8a33.7 33.7 0 0 1 2.2-11.4 19 19 0 0 1 4.5-7 19.1 19.1 0 0 1 7.1-4.7 34.2 34.2 0 0 1 11.4-2.1c5.7-.3 7.9-.3 19.3-.3Zm38.3 10.3a7.4 7.4 0 1 0 7.4 7.3 7.4 7.4 0 0 0-7.4-7.3Zm-32.8 8.6A31.6 31.6 0 1 0 93 61.4 31.6 31.6 0 0 0 61.5 30Zm0 11A20.5 20.5 0 1 1 41 61.5 20.5 20.5 0 0 1 61.5 41Z" />
    </svg>
  );
};
