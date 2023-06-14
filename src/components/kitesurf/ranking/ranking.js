import { useContext } from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { getBgSecondaryColor } from "@/tools/theme";
import ThemeContext from "@/store/theme-context";
import Section from "@/components/UI/section";
import Image from "next/image";

const Ranking = ({ ranking }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);
  return (
    <Section className="flex justify-center">
      <div className="min-w-lg sm:min-w-xl rounded-xl overflow-hidden">
        <div
          className={`flex justify-between items-center px-8 sm:px-16 bg-opacity-70 ${bgSecondaryColor}`}
        >
          <div>
            <TrophyIcon className="h-16 w-16" />
          </div>
          <div className="h-28 flex flex-col justify-center items-center">
            {/* <span className="text-center tracking-xs text-4xl">Surfr.</span>*/}
            <Image
              src="/surfr.png"
              height={100}
              width={100}
              alt="surfr logo"
              className="w-44"
            />
            <span className="text-center uppercase text-xl tracking-xxs">
              LEADERBOARD
            </span>
          </div>
        </div>
        <div className=" bg-gray-500 bg-opacity-80">
          {ranking.map((rider) => (
            <div
              key={rider.name}
              className={`p-4 grid grid-cols-ranking border-b last:border-0 text-2xl sm:text-3xl bg-opacity-20 ${bgSecondaryColor}`}
            >
              <div className="">{rider.position}</div>
              <div className="">{rider.name}</div>
              <div className="">{rider.height}m</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Ranking;
