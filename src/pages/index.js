import { FormattedMessage } from "react-intl";
import Head from "next/head";
import RoleCard from "../components/role-card/role-card";
import classes from "../styles/Home.module.css";

import path from "path";
import fs from "fs/promises";

export default function Home({ roles }) {
  return (
    <>
      <Head>
        <title>Carlos Aldaravi Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 py-28 sm:py-36">
        <div className="px-6 text-center lg:px-8">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2/3">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span
                className={`${classes.name} uppercase block font-extralight text-3xl sm:text-5xl tracking-wide ml-1`}
              >
                Carlos
              </span>
              <span
                className={`${classes.surname} uppercase block font-extralight text-sm sm:text-2xl tracking-wider mt-4`}
              >
                Aldaravi
              </span>
            </h2>
            <p
              className={`${classes.description} mt-4 text-sm sm:text-lg leading-8 text-gray-400 font-thin`}
            >
              <FormattedMessage id="page.home.description" />
            </p>
          </div>
          <RoleCard roles={roles} />
        </div>
      </div>
    </>
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
