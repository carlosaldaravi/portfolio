"use client";

import Page from "@/components/UI/page";
import Projects from "@/components/developer/projects/projects";
import Stack from "@/components/developer/stack";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import usePageTracking from "@/hooks/usePageTracking";
import { TRACKING_TYPES } from "@/types/track";
import Experience from "@/components/developer/experience/experience";
import type { DeveloperData } from "@/types/developer";

interface DeveloperContentProps {
  data: DeveloperData;
}

export default function DeveloperContent({ data }: DeveloperContentProps) {
  usePageTracking(TRACKING_TYPES.page.developer);

  return (
    <Page className="p-0">
      <KiterCard me={data.me} src="/images/yo-dev.png" />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Stack stack={data.stack} />
    </Page>
  );
}
