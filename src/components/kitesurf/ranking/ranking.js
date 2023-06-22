import Section from "@/components/UI/section";
import RankingKiter from "./ranking-kiter";
import RankingHeader from "./ranking-header";
import { FormattedMessage } from "react-intl";

const Ranking = ({ ranking }) => {
  return (
    <Section className="flex justify-center">
      <div className="min-w-lg sm:min-w-xl rounded-xl overflow-hidden">
        <RankingHeader />
        <div className=" bg-gray-500 bg-opacity-80">
          {ranking &&
            ranking.map((kiter) => (
              <RankingKiter key={kiter.name} kiter={kiter} />
            ))}
          {!ranking && (
            <div className="text-center p-4 text-red-300 italic sm:text-xl">
              <FormattedMessage id="page.kitesurf.ranking.noData" />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Ranking;
