import React, { useState } from "react";
import path from "path";
import fs from "fs/promises";
import KiteSectionsSelector from "@/components/kitesurf/kite-sections-selector";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import KiteSections from "@/components/kitesurf/kite-sections";
import Page from "@/components/UI/page";
import { useTools } from "@/hooks/useTools";

const KiteSurf = ({ sections, me }) => {
  const [sectionSelected, setSectionSelected] = useState(sections[0]);
  const [actualSectionIndex, setActualSectionIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const { isMobile } = useTools();

  const videoUrl = isMobile ? "/video-short.mp4" : "/video.MP4";

  const changeSectionHandler = (oper) => {
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

  const setSectionHandler = (i) => {
    setActualSectionIndex(i);
    setSectionSelected(sections[i]);
  };

  return (
    <Page className="relative kitesurf__page__container">
      <div className="fixed inset-0 z-0 opacity-50">
        <video
          className="w-full h-screen object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="relative z-10">
        <KiterCard me={me} />
        <KiteSectionsSelector
          sections={sections}
          sectionSelected={sectionSelected}
          onChangeSection={(oper) => changeSectionHandler(oper)}
          onSelectSection={(i) => setSectionHandler(i)}
        />
        <KiteSections
          sectionSelected={sectionSelected}
          direction={direction}
          onChangeSection={(oper) => changeSectionHandler(oper)}
        />
      </div>
    </Page>
  );
};

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "kitesurf.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  const sections = data.sections.filter((section) => section.data.length > 0);

  return {
    props: { sections, me: data.me },
  };
}

export default KiteSurf;
