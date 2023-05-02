// pages/index.js
import Head from "next/head";
import RoleCard from "../components/role-card";
import SVG from '../components/svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Aldaravi Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-gray-900 py-28 sm:py-36">
          <div className="absolute top-0 right-0 mt-2 mr-2">
          <div className="flex justify-end gap-2">
            <SVG type="espana" />
            {/* <SVG type="espana" /> */}
          </div>
          </div>
          <div className="px-6 text-center lg:px-8">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2/3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">

                {/* <span className="uppercase block font-extralight text-2xl tracking-wider ml-7">Carlos</span>
                <span className="uppercase block font-extralight text-5xl tracking-normal mt-4">Aldaravi</span> */}
                <span className="uppercase block font-extralight text-3xl sm:text-5xl tracking-wide ml-1">Carlos</span>
                <span className="uppercase block font-extralight text-sm sm:text-2xl tracking-wider mt-4">Aldaravi</span>
              </h2>
              <p className="mt-4 text-sm sm:text-lg leading-8 text-gray-400 font-thin ">
                Bienvenido, descubre los dos mundos que me apasionan
              </p>
            </div>
            <RoleCard />
          </div>
        </div>
      </main>
    </div>
  );
}
