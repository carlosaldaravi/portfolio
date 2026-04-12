import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import { THEMES_TYPES } from "@/types/themes";

interface ReactProps {
  size?: string;
}

export const React = ({ size }: ReactProps) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  return (
    <svg
      className={size ? size : "w-16 h-16"}
      viewBox="-11.5 -10.23174 23 20.46348"
    >
      <circle
        r="2.05"
        fill={theme === THEMES_TYPES.dark ? "#61dafb" : "black"}
      />
      <g
        fill="none"
        stroke={theme === THEMES_TYPES.dark ? "#61dafb" : "black"}
      >
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
};
