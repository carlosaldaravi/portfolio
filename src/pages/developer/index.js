import path from "path";
import fs from "fs/promises";
import Page from "../../components/UI/page";
import Skills from "../../components/developer/skills";

const Developer = ({ data }) => {
  return (
    <Page>
      <h1 className="text-center tracking-xxs">Fullstack Developer</h1>
      <Skills skills={data.skills} />
    </Page>
  );
};

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "developer.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);

  return {
    props: { data },
  };
}

export default Developer;
