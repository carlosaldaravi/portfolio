import React from "react";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import KiterCard from "../../components/kitesurf/kiter-info/kiter-card";
import JumpsCards from "../../components/kitesurf/jump-card/jumps-cards";
import classes from "./kitesurf.module.css";

const KiteSurf = ({ events, me }) => {
  const router = useRouter();

  return (
    <div className={classes.main}>
      <KiterCard me={me} />
      <JumpsCards jumps={events} />
    </div>
  );
};

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "kitesurf.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  return {
    props: { events: data.events, me: data.me },
  };
}

export default KiteSurf;
