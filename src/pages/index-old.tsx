import Head from "next/head";
import path from "path";
import fs from "fs/promises";
import HomeInfo from "../components/home/home-info";
import Page from "../components/UI/page";
import useTracker from "@/hooks/useTracker";
import { useIntl } from "react-intl";
import { useEffect } from "react";
import { TRACKING_TYPES } from "@/types/track";
import type { InferGetStaticPropsType } from "next";

export default function Home({ roles }: InferGetStaticPropsType<typeof getStaticProps>) {
  const intl = useIntl();
  const meta = intl.formatMessage({ id: "page.home.meta" });
  const tracker = useTracker();

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <Head>
        <title>Carlos Aldaravi Porfolio</title>
        <meta name="description" content={meta} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <HomeInfo roles={roles} />
    </Page>
  );
}

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "roles.json");
  const jsonData = await fs.readFile(dataFilePath, "utf-8");
  const data = JSON.parse(jsonData);
  return {
    props: { roles: data },
  };
}
