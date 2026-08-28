import type { RRSSItem } from "./common";

/** One of the two facets the landing page links out to (developer / kitesurfer). */
export interface Role {
  name: string;
  to: string;
  avatar: string;
  customClass: string;
  rrss: RRSSItem[];
}
