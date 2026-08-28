import { useCallback, useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { API_GET_RANKING } from "@/env/constants";
import { leaderboard } from "@/data/leaderboard";
import type { Kiter } from "@/types/kitesurf";

interface RankingApiItem {
  user: { name: string };
  value: number;
}

const TOP_RANKING_SIZE = 10;

interface UseRankingReturn {
  ranking: Kiter[] | undefined;
}

const useRanking = (): UseRankingReturn => {
  const [ranking, setRanking] = useState<Kiter[] | undefined>();
  const { get } = useFetch(API_GET_RANKING);

  const getRanking = useCallback(async () => {
    const { data } = await get<RankingApiItem[]>();

    // Fall back to the last known top 10 so the section never renders empty
    // when the Surfr. API is unreachable or answers something unexpected.
    setRanking(
      Array.isArray(data)
        ? data.slice(0, TOP_RANKING_SIZE).map((item, i) => ({
            name: item.user.name,
            height: Number(item.value).toFixed(1),
            position: i + 1,
          }))
        : leaderboard
    );
  }, [get]);

  useEffect(() => {
    // Fetching from an external API is exactly what an effect is for; the state
    // is written from the response callback, not synchronously.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getRanking();
  }, [getRanking]);

  return { ranking };
};

export default useRanking;
