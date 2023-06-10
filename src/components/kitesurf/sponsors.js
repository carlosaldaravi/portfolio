import Image from "next/image";
import SVG from "../svg";
import Link from "next/link";
import Section from "../UI/section";
import { SVG_TYPES } from '@/types/svg';

const Sponsors = ({ sponsors }) => {
  return (
    <Section className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-10">
        {sponsors.map((sponsor) => {
          if (sponsor.img) {
            return (
              <Link
                key={sponsor.name}
                href={sponsor.url}
                className="cursor-pointer hover:scale-110 transition-all duration-500"
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
                className="cursor-pointer mx-auto hover:scale-125 transition-all duration-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SVG type={SVG_TYPES[sponsor.svg]} />
              </Link>
            );
          }
        })}
    </Section>
  );
};

export default Sponsors;
