import classes from "./about.module.css";
import path from "path";
import fs from "fs/promises";
import OverlayCard from "../../components/about/overlay-card";
import AboutHeader from "../../components/about/header";

const About = ({ cards }) => {
  return (
    <section>
      <AboutHeader />
      <div
        className={`${classes.content} mx-auto top-24 text-justify sm:text-start z-50`}
      ></div>
      <OverlayCard cards={cards} />
    </section>
  );
};

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "about.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  return {
    props: { cards: data },
  };
}

export default About;
