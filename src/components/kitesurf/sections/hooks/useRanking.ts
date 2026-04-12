import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { API_GET_RANKING } from "@/env/constants";
import { leaderboard } from "@/data/leaderboard";
import { Kiter } from "@/components/kitesurf/ranking/ranking-kiter";

interface RankingApiItem {
  user: { name: string };
  value: number;
}

interface UseRankingReturn {
  ranking: Kiter[] | undefined;
}

const useRanking = (): UseRankingReturn => {
  const [ranking, setRanking] = useState<Kiter[] | undefined>();
  const { get } = useFetch(API_GET_RANKING);

  const getRanking = async () => {
    const { data } = await get<RankingApiItem[]>();

    if (data) {
      const topRanking = data.slice(0, 10);
      setRanking(
        topRanking.map((item: RankingApiItem, i: number) => {
          return {
            name: item.user.name,
            height: Number(item.value).toFixed(1),
            position: i + 1,
          };
        })
      );
    } else {
      setRanking(leaderboard);
    }
  };

  useEffect(() => {
    getRanking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ranking };
};

export default useRanking;
