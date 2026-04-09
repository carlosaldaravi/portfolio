import path from "path";
import fs from "fs/promises";
import Page from "@/components/UI/page";
import Projects from "@/components/developer/projects/projects";
import Stack from "@/components/developer/stack";
import KiterCard from "@/components/kitesurf/kiter-info/kiter-card";
import useTracker from "@/hooks/useTracker";
import { useEffect } from "react";
import { TRACKING_TYPES } from "@/types/track";
import Experience from "@/components/developer/experience/experience";
import Head from "next/head";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

const Developer = ({ data }) => {
  const tracker = useTracker();
  const intl = useIntl();
  const { locale } = useRouter();
  const description = intl.formatMessage({ id: "page.home.meta" });
  const title = "Carlos Aldaravi - Developer";
  const url = "https://carlosaldaravi.com/developer";

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.developer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page className="p-0">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://carlosaldaravi.com/images/yo-dev.png" />
        <meta property="og:locale" content={locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
      </Head>
      <KiterCard me={data.me} src="/images/yo-dev.png" />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      {/* <Skills skills={data.skills} /> */}
      <Stack stack={data.stack} />
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
