import { useEffect, useState } from "react";
import NewsCards from "@/components/kitesurf/news-cards/news-cards";
import Sponsors from "@/components/kitesurf/sponsors";
import JumpsCards from "@/components/kitesurf/jump-card/jumps-cards";
import Gear from "@/components/kitesurf/gear/gear";
import Ranking from "@/components/kitesurf/ranking/ranking";
import KiteSectionTransition from "./kite-sections-transition";
import useFetch from "@/hooks/useFetch";
import { API_GET_RANKING } from "@/env/constants";

const KiteSections = ({ sectionSelected, direction, onChangeSection }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [ranking, setRanking] = useState();
  const { get } = useFetch(API_GET_RANKING);

  const getRanking = async () => {
    const { data } = await get();

    if (data) {
      const dataAux = data.slice(0, 10);
      setRanking(
        dataAux.map((item, i) => {
          return {
            name: item.user.name,
            height: Number(item.value).toFixed(1),
            position: i + 1,
          };
        })
      );
    }
  };

  const touchStartHandler = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const touchMoveHandler = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const touchEndHandler = (e) => {
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
          onChangeSection={onChangeSection}
        >
          <JumpsCards
            jumps={sectionSelected.data}
            onChangeSection={(oper) => onChangeSection(oper)}
          />
        </KiteSectionTransition>
      )}

      {sectionSelected.name === "sponsors" && (
        <KiteSectionTransition
          name="sponsors"
          sectionSelected={sectionSelected}
          direction={direction}
          onChangeSection={onChangeSection}
        >
          <Sponsors sponsors={sectionSelected.data} />
        </KiteSectionTransition>
      )}
      {sectionSelected.name === "news" && (
        <KiteSectionTransition
          name="news"
          sectionSelected={sectionSelected}
          direction={direction}
          onChangeSection={onChangeSection}
        >
          <NewsCards news={sectionSelected.data} />
        </KiteSectionTransition>
      )}
      {sectionSelected.name === "gear" && (
        <KiteSectionTransition
          name="gear"
          sectionSelected={sectionSelected}
          direction={direction}
          onChangeSection={onChangeSection}
        >
          <Gear gear={sectionSelected.data} />
        </KiteSectionTransition>
      )}
      {sectionSelected.name === "ranking" && (
        <KiteSectionTransition
          name="ranking"
          sectionSelected={sectionSelected}
          direction={direction}
          onChangeSection={onChangeSection}
        >
          <Ranking ranking={ranking} />
        </KiteSectionTransition>
      )}
    </div>
  );
};

export default KiteSections;
