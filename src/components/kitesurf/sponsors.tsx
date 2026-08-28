import Image from "next/image";
import Link from "next/link";
import { getBgOppositeColor } from "@/tools/theme";
import { SVG_TYPES } from "@/types/svg";
import { useTheme } from "@/store/theme-context";
import Section from "@/components/UI/section";
import SVG from "@/components/svg";
import type { Sponsor } from "@/types/kitesurf";

interface SponsorsProps {
  sponsors: Sponsor[];
}

const Sponsors = ({ sponsors }: SponsorsProps) => {
  const { theme } = useTheme();
  const bgColor = getBgOppositeColor(theme);

  return (
    <Section className="w-full items-center grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-10">
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
                  className={`${sponsor.className} rounded-lg w-48 sm:w-56 lg:w-72 col-span-1 object-contain mx-auto ${bgColor}`}
                  src={sponsor.img}
                  alt={sponsor.name}
                  width={200}
                  height={150}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpAN42RTZKQAAAABJRU5ErkJggg=="
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
                <SVG type={SVG_TYPES[sponsor.svg as keyof typeof SVG_TYPES]} />
              </Link>
            );
          }
          return null;
        })}
    </Section>
  );
};

export default Sponsors;
