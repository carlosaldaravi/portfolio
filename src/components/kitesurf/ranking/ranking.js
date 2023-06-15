import Section from "@/components/UI/section";
import RankingKiter from "./ranking-kiter";
import RankingHeader from "./ranking-header";

const Ranking = ({ ranking }) => {
  
  return (
    <Section className="flex justify-center">
      <div className="min-w-lg sm:min-w-xl rounded-xl overflow-hidden">
        <RankingHeader />
        <div className=" bg-gray-500 bg-opacity-80">
          {ranking.map((kiter) => (
            <RankingKiter key={kiter.name} kiter={kiter} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Ranking;
