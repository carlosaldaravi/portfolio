import Head from "next/head";
import RoleCard from "../components/role-card/role-card";
import SVG from "../components/svg";
import path from "path";
import fs from "fs/promises";
import { useState } from "react";
import classes from "../styles/Home.module.css";

export default function Home({ roles, translations }) {
  const [language, setLanguage] = useState('es');
  return (
    <div>
      <Head>
        <title>Carlos Aldaravi Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-gray-900 py-28 sm:py-36">
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <div className={`${classes.languages} flex justify-end gap-2`}>
              <SVG type="spain" selectedLanguage={(lang) => setLanguage(lang)} actualLanguage={language} />
              <SVG type="england" selectedLanguage={(lang) => setLanguage(lang)} actualLanguage={language} />
            </div>
          </div>
          <div className="px-6 text-center lg:px-8">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2/3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className={`${classes.name} uppercase block font-extralight text-3xl sm:text-5xl tracking-wide ml-1`}>
                  Carlos
                </span>
                <span className={`${classes.surname} uppercase block font-extralight text-sm sm:text-2xl tracking-wider mt-4`}>
                  Aldaravi
                </span>
              </h2>
              <p className={`${classes.description} mt-4 text-sm sm:text-lg leading-8 text-gray-400 font-thin`}>
                {translations[language].description}
              </p>
            </div>
            <RoleCard roles={roles} />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const translationsFilePath = path.join(process.cwd(), "src/translations", "index.json");
  const dataFilePath = path.join(process.cwd(), "src/data", "roles.json");
  const jsonData = await fs.readFile(dataFilePath);
  const jsonTranslations = await fs.readFile(translationsFilePath);
  const data = JSON.parse(jsonData);
  const translations = JSON.parse(jsonTranslations);
  return {
    props: { roles: data, translations },
  };
}
