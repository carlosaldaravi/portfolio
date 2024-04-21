import path from "path";
import fs from "fs/promises";
import Page from "@/components/UI/page";
import Projects from "@/components/developer/projects/projects";
import Stack from "@/components/developer/stack";
import Curriculum from "@/components/developer/curriculum";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import useTracker from "@/hooks/useTracker";
import { useEffect } from "react";
import { TRACKING_TYPES } from "@/types/track";
import Experience from "@/components/developer/experience/experience";
import Head from "next/head";
import { useIntl } from "react-intl";

const Developer = ({ data }) => {
  const tracker = useTracker();
  const intl = useIntl();
  const meta = intl.formatMessage({ id: "page.home.meta" });

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.developer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page className="p-0">
      <Head>
        <title>Carlos Aldaravi Porfolio</title>
        <meta name="description" content={meta} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <KiterCard me={data.me} src="/yo-dev.png" />
      <Experience experience={data.experience} />
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
