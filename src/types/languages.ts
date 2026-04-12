export const LANGUAGES_TYPES = {
  es: "es",
  en: "en",
} as const;

export type Language = (typeof LANGUAGES_TYPES)[keyof typeof LANGUAGES_TYPES];
