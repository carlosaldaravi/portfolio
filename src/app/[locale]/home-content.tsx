"use client";

import { useEffect } from "react";
import Page from "@/components/UI/page";
import Projects from "@/components/developer/projects/projects";
import Stack from "@/components/developer/stack";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import Experience from "@/components/developer/experience/experience";
import type { MeData } from "@/components/kitesurf/kiter-info/text-kiter-card";

interface ExperienceData {
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

interface Project {
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

interface StackItem {
  id: string;
  name: string;
  svg: string;
}

interface HomeContentProps {
  data: {
    me: MeData[];
    experience: ExperienceData[];
    projects: Project[];
    stack: StackItem[];
  };
}

export default function HomeContent({ data }: HomeContentProps) {
  const tracker = useTracker();

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.developer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page className="p-0">
      <KiterCard me={data.me} src="/images/yo-dev.png" />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Stack stack={data.stack} />
    </Page>
  );
}
