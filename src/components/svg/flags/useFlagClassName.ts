import { useState } from "react";
import { useLocaleRouter } from "@/hooks/useLocaleRouter";
import type { Locale } from "@/lib/i18n";

/**
 * Shared behaviour of the two flag icons: full opacity while its locale is the
 * active one or the pointer is over it, dimmed otherwise.
 */
export function useFlagClassName(flagLocale: Locale) {
  const { locale } = useLocaleRouter();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = locale === flagLocale || isHovered;

  return {
    className: `h-12 w-12 sm:h-14 sm:w-14 cursor-pointer transform duration-300 ${
      isActive ? "opacity-100" : "opacity-20"
    }`,
    handlers: {
      onMouseEnter: () => setIsHovered(true),
      onTouchStart: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onTouchEnd: () => setIsHovered(false),
    },
  };
}
