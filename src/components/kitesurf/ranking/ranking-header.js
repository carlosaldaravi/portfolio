import Image from "next/image";
import { useContext } from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";
import { getBgSecondaryColor } from "@/tools/theme";
import ThemeContext from "@/store/theme-context";

const RankingHeader = () => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);
  return (
    <div
      className={`flex justify-between items-center px-8 sm:px-16 bg-opacity-70 ${bgSecondaryColor}`}
    >
      <div>
        <TrophyIcon className="h-16 w-16" />
      </div>
      <div className="h-28 flex flex-col justify-center items-center">
        {/* <span className="text-center tracking-xs text-4xl">Surfr.</span>*/}
        <Image
          src="/images/logos/surfr.png"
          height={100}
          width={100}
          alt="surfr logo"
          className="w-44"
        />
        <span className="text-center uppercase text-xl tracking-xxs">
          <FormattedMessage id="page.kitesurf.ranking.header" />
        </span>
      </div>
    </div>
  );
};
export default RankingHeader;
