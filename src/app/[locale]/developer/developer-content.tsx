"use client";

import Page from "@/components/UI/page";
import Projects from "@/components/developer/projects/projects";
import Stack from "@/components/developer/stack";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import Experience from "@/components/developer/experience/experience";
import type { DeveloperData } from "@/types/developer";
import type { MeData } from "@/types/kitesurf";

interface DeveloperContentProps {
  data: DeveloperData;
  kiteMe: MeData[];
}

export default function DeveloperContent({ data, kiteMe }: DeveloperContentProps) {
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
