import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { getBgOppositeColor } from '@/tools/theme';
import { SVG_TYPES } from '@/types/svg';
import ThemeContext from "@/store/theme-context";
import Section from "@/components/UI/section";
import SVG from "@/components/svg";

const Sponsors = ({ sponsors }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgOppositeColor(theme);

  return (
    <Section className="items-center grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10">
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
                  className={`${sponsor.className} rounded-lg w-48 sm:w-56 lg:w-72 col-span-1 object-contain mx-auto ${bgSecondaryColor}`}
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
