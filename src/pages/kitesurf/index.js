import { EyeDropperIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import KiterCard from "../../components/kiter-card/kiter-card";
import JumpsCards from "../../components/jumps-cards";
import classes from "./kitesurf.module.css";

const KiteSurf = ({ events }) => {
  const router = useRouter();

  return (
    <div className={classes.main}>
      <KiterCard />
      <JumpsCards jumps={events} />
    </div>
  );
};

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "kitesurf.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  return {
    props: { events: data },
  };
}

export default KiteSurf;
