import type { MeData } from "@/components/kitesurf/kiter-info/kiter-card";

export interface ExperienceData {
  date: string;
  startDate: string;
  endDate: string;
  now: string;
  place: string;
  rol: string;
  company: string;
  description: string;
  achievement: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  img: string;
  logo: string;
  url: string;
  year: string;
  stack: string[];
  github: {
    url: string;
    private: boolean;
  };
}

export interface StackItem {
  id: string;
  name: string;
  svg: string;
}

export interface DeveloperData {
  me: MeData[];
  experience: ExperienceData[];
  projects: Project[];
  stack: StackItem[];
}
