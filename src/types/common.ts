export interface PageParams {
  params: Promise<{ locale: string }>;
}

/** A social network link rendered by `UI/rrss`. */
export interface RRSSItem {
  name: string;
  url: string;
  svg: string;
}
