import path from "path";
import fs from "fs/promises";
import Page from "../../components/UI/page";
import Skills from "../../components/developer/skills";

const Developer = ({ data }) => {
  return (
    <Page>
      <div className="text-center text-3xl tracking-xs">
        <Skills skills={data.skills} />
      </div>
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
