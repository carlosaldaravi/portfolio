import { useRouter } from "next/router";
import { useState } from "react";
import { LANGUAGES_TYPES } from "@/types/languages";

export const En = () => {
  const { locale } = useRouter();
  const [mouseIn, setMouseIn] = useState(false);

  const onMouseEnterHandler = () => {
    setMouseIn(true);
  };
  const onMouseLeaveHandler = () => {
    setMouseIn(false);
  };

  return (
    <svg
      className={`h-12 w-12 sm:h-14 sm:w-14 cursor-pointer transform duration-300 ${
        locale === LANGUAGES_TYPES.en
          ? "opacity-100"
          : mouseIn
          ? "opacity-100"
          : "opacity-20"
      }`}
      viewBox="0 0 192.756 192.756"
      onMouseEnter={onMouseEnterHandler}
      onTouchStart={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onTouchEnd={onMouseLeaveHandler}
    >
      <path fill="none" d="M0 0h192.8v192.8H0V0z" clipRule="evenodd" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M184.3 149.6V43.1H8.5v106.5h175.8z"
        clipRule="evenodd"
      />
      <path
        fill="#33348e"
        fillRule="evenodd"
        d="M184.3 149.6V43.1H8.5v106.5h175.8z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M116.8 149.6v-37.1h67.5V80.3h-67.6V43H75.2v37.2H8.5v32.2h66.6v37.1h41.7z"
        clipRule="evenodd"
      />
      <path fill="#fff" d="m30 43.1 154.3 93.6v13h-21L8.4 55.8V43h21.4z" />
      <path
        fill="#fff"
        d="M162.8 43.1 8.5 136.7v13h21l154.8-93.8V43h-21.5z"
      />
      <path
        fill="#cc2229"
        fillRule="evenodd"
        d="M184.3 86.1H109v-43H83.7v43H8.5v20.5h75.2v43h25.4v-43h75.2V86.1z"
        clipRule="evenodd"
      />
      <path
        fill="#cc2229"
        d="m8.6 43.1 61 37.2H56L8.5 51.4v-8.3zm-.1 106.3v.2h13.4l53.2-32.3v-4.8h-5.8l-60.8 37zm175.8.2V142l-48.4-29.4h-13.7l61.1 37.1h1zM169.8 43.1l-53 32.3v4.9h5.6l61-37.2h-13.6z"
      />
    </svg>
  );
};
