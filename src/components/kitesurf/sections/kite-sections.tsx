import React, { useEffect, useState } from "react";
import NewsCards from "@/components/kitesurf/news-cards/news-cards";
import Sponsors from "@/components/kitesurf/sponsors";
import JumpsCards from "@/components/kitesurf/jump-card/jumps-cards";
import Gear from "@/components/kitesurf/gear/gear";
import Ranking from "@/components/kitesurf/ranking/ranking";
import KiteSectionTransition from "./kite-sections-transition";
import useFetch from "@/hooks/useFetch";
import { API_GET_RANKING } from "@/env/constants";
import { leaderboard } from "@/data/leaderboard";
import { Kiter } from "@/components/kitesurf/ranking/ranking-kiter";
import { Jump } from "@/components/kitesurf/jump-card/jump-card";
import { Sponsor } from "@/components/kitesurf/sponsors";
import { NewsItem } from "@/components/kitesurf/news-cards/news-card";
import { GearGroupItem } from "@/components/kitesurf/gear/gear";

interface SectionData {
  name: string;
  title: string;
  data: unknown[];
}

interface KiteSectionsProps {
  sectionSelected: SectionData;
  direction: string;
  onChangeSection: (direction: number) => void;
}

interface RankingApiItem {
  user: { name: string };
  value: number;
}

const KiteSections = ({ sectionSelected, direction, onChangeSection }: KiteSectionsProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [ranking, setRanking] = useState<Kiter[] | undefined>();
  const { get } = useFetch(API_GET_RANKING);

  const getRanking = async () => {
    const { data } = await get<RankingApiItem[]>();

    if (data) {
      const dataAux = data.slice(0, 10);
      setRanking(
        dataAux.map((item: RankingApiItem, i: number) => {
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

  const touchStartHandler = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const touchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const touchEndHandler = () => {
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    getRanking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (touchEnd !== 0) {
      if (touchStart - touchEnd > 100) {
        onChangeSection(1); // to the next section
        touchEndHandler();
      } else if (touchEnd - touchStart > 100) {
        onChangeSection(-1); // to the previous section
        touchEndHandler();
      }
    }
  }, [touchStart, touchEnd, onChangeSection]);

  return (
    <div
      className="overflow-hidden"
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
    >
      {sectionSelected.name === "bestJumps" && (
        <KiteSectionTransition
          name="bestJumps"
          sectionSelected={sectionSelected}
          direction={direction}
        >
          <JumpsCards
            jumps={sectionSelected.data as Jump[]}
          />
        </KiteSectionTransition>
      )}

      {sectionSelected.name === "sponsors" && (
        <KiteSectionTransition
          name="sponsors"
          sectionSelected={sectionSelected}
          direction={direction}
        >
          <Sponsors sponsors={sectionSelected.data as Sponsor[]} />
        </KiteSectionTransition>
      )}
      {sectionSelected.name === "news" && (
        <KiteSectionTransition
          name="news"
          sectionSelected={sectionSelected}
          direction={direction}
        >
          <NewsCards news={sectionSelected.data as NewsItem[]} />
        </KiteSectionTransition>
      )}
      {sectionSelected.name === "gear" && (
        <KiteSectionTransition
          name="gear"
          sectionSelected={sectionSelected}
          direction={direction}
        >
          <Gear gear={sectionSelected.data as GearGroupItem[]} />
        </KiteSectionTransition>
      )}
      {sectionSelected.name === "ranking" && (
        <KiteSectionTransition
          name="ranking"
          sectionSelected={sectionSelected}
          direction={direction}
        >
          <Ranking ranking={ranking} />
        </KiteSectionTransition>
      )}
    </div>
  );
};

export default KiteSections;
