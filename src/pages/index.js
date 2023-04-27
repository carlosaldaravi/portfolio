// pages/index.js
import Head from "next/head";
import RoleCard from "../components/role-card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Aldaravi Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                @carlosaldaravi
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                Bienvenido, descubre los dos mundos que me apasionan la programación web y el kitesurf.
              </p>
            </div>
            <RoleCard />
          </div>
        </div>
      </main>
    </div>
  );
}
