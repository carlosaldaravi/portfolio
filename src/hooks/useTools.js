import { useEffect, useState } from "react";

export const useTools = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    const handleResize = (event) => {
      event.matches ? setIsMobile(true) : setIsMobile(false);
    };

    const desktopMediaQuery = window.matchMedia("(max-width: 639px)");
    desktopMediaQuery.addEventListener("change", handleResize);

    return () => desktopMediaQuery.removeEventListener("change", handleResize);
  }, []);

  return { isMobile };
};
