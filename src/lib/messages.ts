import { toLocale, type Locale } from "@/lib/i18n";
import en from "@/lang/en.json";
import es from "@/lang/es.json";

export type Messages = Record<string, string>;

const MESSAGES: Record<Locale, Messages> = { es, en };

/**
 * The translations for a locale, falling back to the default one for anything
 * unrecognised. Single entry point so pages, the layout and `createPageMetadata`
 * can never disagree on which bundle a locale maps to.
 */
export function getMessages(locale: string): Messages {
  return MESSAGES[toLocale(locale)];
}
