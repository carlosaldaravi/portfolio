import React, { useState } from "react";
import path from "path";
import fs from "fs/promises";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import JumpsCards from "@/components/kitesurf/jump-card/jumps-cards";
import NewsCards from "@/components/kitesurf/news-cards/news-cards";
import KiteSections from "@/components/kitesurf/sections";
import Sponsors from "@/components/kitesurf/sponsors";
import Page from "@/components/UI/page";
import SectionTitle from "@/components/UI/section-title";

const KiteSurf = ({ sections, me }) => {
  const [sectionSelected, setSectionSelected] = useState(sections[0]);
  const [actualSectionIndex, setActualSectionIndex] = useState(0);

  const changeSectionHandler = (oper) => {
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

  return (
    <Page className="kitesurf__page__container">
      <KiterCard me={me} />
      <SectionTitle title="page.kitesurf.achievements" className="mt-24 mb-12 sm:my-24" />
      <KiteSections
        sections={sections}
        sectionSelected={sectionSelected}
        onChangeSection={(oper) => changeSectionHandler(oper)}
      />
      {sectionSelected.name === "bestJumps" && (
        <JumpsCards jumps={sectionSelected.data} />
      )}
      {sectionSelected.name === "sponsors" && (
        <Sponsors sponsors={sectionSelected.data} />
      )}
      {sectionSelected.name === "news" && (
        <NewsCards news={sectionSelected.data} />
      )}
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
