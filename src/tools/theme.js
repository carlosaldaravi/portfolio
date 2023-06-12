import { THEMES_TYPES } from "@/types/themes";

const getTextColor = (theme) => {
  return theme === THEMES_TYPES.dark
    ? "text-light-primary"
    : "text-dark-primary";
};
const getColor = (theme) => {
  return theme === THEMES_TYPES.dark ? "white" : "black";
};
const getBgColor = (theme) => {
  return theme === THEMES_TYPES.dark ? "bg-dark-primary" : "bg-light-primary";
};
const getOppositeBgColor = (theme) => {
  return theme === THEMES_TYPES.dark ? "bg-light-primary" : "bg-dark-primary";
};
const getBgSecondaryColor = (theme) => {
  return theme === THEMES_TYPES.dark ? "bg-dark-secondary" : "bg-light-secondary";
};
const getShadowColor = (theme) => {
  return theme === THEMES_TYPES.dark ? "shadow-dark-primary" : "shadow-light-primary";
};

export { getTextColor, getColor, getBgColor, getOppositeBgColor, getShadowColor, getBgSecondaryColor };
