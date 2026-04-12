import { THEMES_TYPES, Theme } from "@/types/themes";

const getTextColor = (theme: Theme | null) => {
  return theme === THEMES_TYPES.dark
    ? "text-light-primary"
    : "text-dark-primary";
};
const getColor = (theme: Theme | null) => {
  return theme === THEMES_TYPES.dark ? "dark-primary" : "light-primary";
};
const getOppositeColor = (theme: Theme | null) => {
  return theme === THEMES_TYPES.dark ? "#eee" : "#111827";
};
const getBgColor = (theme: Theme | null) => {
  return theme === THEMES_TYPES.dark ? "bg-dark-primary" : "bg-light-primary";
};
const getBgOppositeColor = (theme: Theme | null) => {
  return theme === THEMES_TYPES.dark ? "bg-light-primary" : "bg-dark-primary";
};
const getBgSecondaryColor = (theme: Theme | null) => {
  return theme === THEMES_TYPES.dark ? "bg-dark-secondary" : "bg-light-secondary";
};
const getShadowColor = (theme: Theme | null) => {
  return theme === THEMES_TYPES.dark ? "shadow-dark-primary" : "shadow-light-primary";
};

export { getTextColor, getColor, getOppositeColor, getBgColor, getBgOppositeColor, getShadowColor, getBgSecondaryColor };
