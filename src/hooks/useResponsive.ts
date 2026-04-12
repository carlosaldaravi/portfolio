import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "@/constants/ui";

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    const handleResize = (event: MediaQueryListEvent) => {
      event.matches ? setIsMobile(true) : setIsMobile(false);
    };

    const desktopMediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    desktopMediaQuery.addEventListener("change", handleResize);

    return () => desktopMediaQuery.removeEventListener("change", handleResize);
  }, []);

  return { isMobile };
};
