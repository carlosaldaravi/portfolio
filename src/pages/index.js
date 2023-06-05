import Head from "next/head";
import path from "path";
import fs from "fs/promises";
import HomeInfo from "../components/home/home-info";
import Page from "../components/UI/page";

export default function Home({ roles }) {
  return (
    <Page>
      <Head>
        <title>Carlos Aldaravi Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeInfo roles={roles} />
    </Page>
  );
}

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "roles.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  return {
    props: { roles: data },
  };
}
