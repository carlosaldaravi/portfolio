"use client";

import Page from "@/components/UI/page";
import Projects from "@/components/developer/projects/projects";
import Stack from "@/components/developer/stack";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import usePageTracking from "@/hooks/usePageTracking";
import { TRACKING_TYPES } from "@/types/track";
import Experience from "@/components/developer/experience/experience";
import type { DeveloperData } from "@/types/developer";
import type { MeData } from "@/components/kitesurf/kiter-info/kiter-card";

interface HomeContentProps {
  data: DeveloperData;
  kiteMe: MeData[];
}

export default function HomeContent({ data, kiteMe }: HomeContentProps) {
  usePageTracking(TRACKING_TYPES.page.developer);

  return (
    <Page className="p-0">
      <KiterCard
        me={data.me}
        src="/images/yo-dev.png"
        flipTarget={{
          me: kiteMe,
          src: "/images/yo-kite.png",
          href: "/kitesurf",
          label: "Kitesurfer",
        }}
      />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Stack stack={data.stack} />
    </Page>
  );
}
