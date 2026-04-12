export const THEMES_TYPES = {
  dark: "dark",
  light: "light",
} as const;

export type Theme = (typeof THEMES_TYPES)[keyof typeof THEMES_TYPES];
