import type { MeData } from "@/components/kitesurf/kiter-info/kiter-card";

export interface SectionData {
  name: string;
  title: string;
  data: unknown[];
}

export interface KitesurfData {
  me: MeData[];
  sections: SectionData[];
}
