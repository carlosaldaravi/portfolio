/** A "label: value" row of the kiter/developer identity card. */
export interface MeData {
  id: string;
  value: string;
}

/** One `{ key: value }` pair of a jump card ("hangtime", "date", "spot", …). */
export interface JumpTextEntry {
  [key: string]: string | number;
}

export interface JumpStyle {
  kiteCard: {
    "&::before"?: {
      backgroundImage?: string;
      backgroundPosition?: string;
    };
  };
}

export interface Jump {
  style: JumpStyle;
  texts: JumpTextEntry[];
  best: boolean;
  youtubeEmbedId?: string;
}

export interface Sponsor {
  name: string;
  url: string;
  img?: string;
  svg?: string;
  className?: string;
}

export interface NewsItem {
  id: string;
  img: string;
  url: string;
  date: string;
  title: string;
  source: string;
}

export interface GearItem {
  id: string;
  name: string;
  url: string;
  img: string;
  className?: string;
  sizes?: string[];
}

/** A gear family ("kites", "bars", …) whose items live under `[name]`. */
export interface GearGroupItem {
  name: string;
  [key: string]: string | GearItem[] | number;
}

/**
 * An entry of the gear section: either a family of items or a single piece
 * (a board, a wetsuit…) listed on its own.
 */
export type GearEntry = GearGroupItem | GearItem;

export interface Kiter {
  position: number;
  name: string;
  height: string;
}

export interface SectionData {
  name: string;
  title: string;
  data: unknown[];
}

export interface KitesurfData {
  me: MeData[];
  sections: SectionData[];
}
