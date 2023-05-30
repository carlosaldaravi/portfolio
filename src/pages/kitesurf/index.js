import React, { useEffect, useState } from "react";
import path from "path";
import fs from "fs/promises";
import KiterCard from "../../components/kitesurf/kiter-info/kiter-card";
import JumpsCards from "../../components/kitesurf/jump-card/jumps-cards";
import KiteSections from "../../components/kitesurf/sections";
import Sponsors from "@/components/kitesurf/sponsors";

const KiteSurf = ({ data }) => {
  const { sections, me } = data;
  const [sectionSelected, setSectionSelected] = useState(sections[0]);
  const [actualSectionIndex, setActualSectionIndex] = useState(0);

  useEffect(() => {
    console.log("actualSectionIndex: ", actualSectionIndex);
  }, [actualSectionIndex]);

  useEffect(() => {
    console.log("sectionSelected: ", sectionSelected);
  }, [sectionSelected]);

  const changeSectionHandler = (oper) => {
    console.log("oper: ", oper);
    if (actualSectionIndex + oper === sections.length) {
      setActualSectionIndex(0);
    } else if (actualSectionIndex + oper === -1) {
      setActualSectionIndex(sections.length - 1);
    } else {
      setActualSectionIndex(actualSectionIndex + oper);
    }
    setSectionSelected(sections[actualSectionIndex]);
  };

  return (
    <section className="kitesurf__page__container">
      <KiterCard me={me} />
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
    </section>
  );
};

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "kitesurf.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  return {
    props: { data },
  };
}

export default KiteSurf;
