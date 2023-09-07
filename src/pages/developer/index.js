import { FormattedMessage } from "react-intl";
import path from "path";
import fs from "fs/promises";
import Page from "@/components/UI/page";
import Projects from "@/components/developer/projects/projects";
import Stack from "@/components/developer/stack";
import Curriculum from "@/components/developer/curriculum";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";

const Developer = ({ data }) => {
  return (
    <Page className="p-0">
      <KiterCard me={data.me} src="/yo-dev.png" />
      <Projects projects={data.projects} />
      {/* <Skills skills={data.skills} /> */}
      <Stack stack={data.stack} />
      <Curriculum curriculum={data.curriculum} />
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
