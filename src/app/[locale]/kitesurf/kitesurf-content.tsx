"use client";

import React, { useState } from "react";
import KiteSectionsSelector from "@/components/kitesurf/sections/kite-sections-selector";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import KiteSections from "@/components/kitesurf/sections/kite-sections";
import Page from "@/components/UI/page";
import { useResponsive } from "@/hooks/useResponsive";
import BackgroundVideo from "@/components/UI/background-video";
import usePageTracking from "@/hooks/usePageTracking";
import { TRACKING_TYPES } from "@/types/track";
import type { MeData } from "@/components/kitesurf/kiter-info/kiter-card";
import type { SectionData } from "@/types/kitesurf";

interface KitesurfContentProps {
  sections: SectionData[];
  me: MeData[];
}

export default function KitesurfContent({ sections, me }: KitesurfContentProps) {
  const [sectionSelected, setSectionSelected] = useState(sections[0]);
  const [actualSectionIndex, setActualSectionIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const { isMobile } = useResponsive();

  const videoUrl = isMobile ? "/videos/video-short.mp4" : "/videos/video.MP4";
  const videoUrlWebm = isMobile ? "/videos/video-short.webm" : "/videos/video.webm";
  const videoPoster = "/images/video-poster.png";

  usePageTracking(TRACKING_TYPES.page.kitesurfer);

  const changeSectionHandler = (oper: number) => {
    oper === 1 ? setDirection("left") : setDirection("right");
    let nextIndex = actualSectionIndex + oper;
    if (nextIndex === sections.length) {
      nextIndex = 0;
      setActualSectionIndex(nextIndex);
    } else if (nextIndex === -1) {
      nextIndex = sections.length - 1;
      setActualSectionIndex(nextIndex);
    } else {
      setActualSectionIndex(nextIndex);
    }
    setSectionSelected(sections[nextIndex]);
  };

  const setSectionHandler = (i: number) => {
    setActualSectionIndex(i);
    setSectionSelected(sections[i]);
  };

  return (
    <Page className="relative kitesurf__page__container">
      <BackgroundVideo
        src={videoUrl}
        srcWebm={videoUrlWebm}
        srcPoster={videoPoster}
      />

      <div className="relative z-10">
        <KiterCard me={me} src="/images/yo-kite.png" />
        <KiteSectionsSelector
          sections={sections}
          sectionSelected={sectionSelected}
          onChangeSection={(oper: number) => changeSectionHandler(oper)}
          onSelectSection={(i: number) => setSectionHandler(i)}
        />
        <KiteSections
          sectionSelected={sectionSelected}
          direction={direction}
          onChangeSection={(oper: number) => changeSectionHandler(oper)}
        />
      </div>
    </Page>
  );
}
