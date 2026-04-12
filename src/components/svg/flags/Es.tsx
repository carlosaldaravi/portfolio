import { useParams } from "next/navigation";
import { useState } from "react";
import { LANGUAGES_TYPES } from "@/types/languages";

export const Es = () => {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "es";
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
        locale === LANGUAGES_TYPES.es
          ? "opacity-100"
          : mouseIn
          ? "opacity-100"
          : "opacity-20"
      }`}
      viewBox="0 0 6 4"
      onMouseEnter={onMouseEnterHandler}
      onTouchStart={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onTouchEnd={onMouseLeaveHandler}
    >
      <path fill="#ad1519" d="M0 0h6v4H0z" />
      <path fill="#fabd00" d="M0 1h6v2H0z" />
    </svg>
  );
};
