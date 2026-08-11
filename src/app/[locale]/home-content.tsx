"use client";

import Page from "@/components/UI/page";
import HomeInfo, { type Role } from "@/components/home/home-info";
import usePageTracking from "@/hooks/usePageTracking";
import { TRACKING_TYPES } from "@/types/track";

interface HomeContentProps {
  roles: Role[];
}

// Home is the brand landing: name + the two facets (developer / kitesurfer)
// linking out to /developer and /kitesurf. The technical deep-dive
// (experience, projects, stack) lives on /developer, so the two pages no
// longer render identical content.
export default function HomeContent({ roles }: HomeContentProps) {
  usePageTracking(TRACKING_TYPES.page.home);

  return (
    <Page>
      <HomeInfo roles={roles} />
    </Page>
  );
}
