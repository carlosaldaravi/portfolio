import { FormattedMessage } from "react-intl";
import path from "path";
import fs from "fs/promises";
import Page from "@/components/UI/page";
import Skills from "@/components/developer/skills/skills";
import Projects from "@/components/developer/projects/projects";

const Developer = ({ data }) => {
  return (
    <Page>
      <h1 className="text-center tracking-xxs">
        <FormattedMessage id="page.developer.fullstack" />
      </h1>
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
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
