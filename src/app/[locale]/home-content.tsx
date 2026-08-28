"use client";

import Page from "@/components/UI/page";
import HomeInfo from "@/components/home/home-info";
import type { Role } from "@/types/home";

interface HomeContentProps {
  roles: Role[];
}

// Home is the brand landing: name + the two facets (developer / kitesurfer)
// linking out to /developer and /kitesurf. The technical deep-dive
// (experience, projects, stack) lives on /developer, so the two pages no
// longer render identical content.
export default function HomeContent({ roles }: HomeContentProps) {
  return (
    <Page>
      <HomeInfo roles={roles} />
    </Page>
  );
}
