import Image from "next/image";
import SVG from "../svg";
import Link from "next/link";

const Sponsors = ({ sponsors }) => {
  return (
    <div className="bg-gray-900 py-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-4 sm:mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:max-w-none lg:grid-cols-3">
          {sponsors.map((sponsor) => {
            if (sponsor.img) {
              return (
                <Link
                  key={sponsor.name}
                  href={sponsor.url}
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className={`${sponsor.className} rounded-lg h-24 w-64 col-span-1 object-contain mx-auto bg-gray-200 px-4`}
                    src={sponsor.img}
                    alt={sponsor.name}
                    width={200}
                    height={150}
                  />
                </Link>
              );
            } else if (sponsor.svg) {
              return (
                <Link
                  key={sponsor.name}
                  href={sponsor.url}
                  className="cursor-pointer mx-auto"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SVG type="ionLogo" />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
