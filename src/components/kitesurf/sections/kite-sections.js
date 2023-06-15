import { useEffect, useState } from "react";
import NewsCards from "@/components/kitesurf/news-cards/news-cards";
import Sponsors from "@/components/kitesurf/sponsors";
import JumpsCards from "@/components/kitesurf/jump-card/jumps-cards";
import Gear from "@/components/kitesurf/gear/gear";
import Ranking from "@/components/kitesurf/ranking/ranking";
import KiteSectionTransition from "./kite-sections-transition";

const KiteSections = ({
  sectionSelected,
  direction,
  onChangeSection,
}) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
    if (touchEnd !== 0) {
      if (touchStart - touchEnd > 100) {
        onChangeSection(1); // to the next section
        touchEndHandler();
      } else if (touchEnd - touchStart > 100) {
        onChangeSection(-1); // to the previous section
        touchEndHandler()
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
          <Ranking ranking={sectionSelected.data} />
        </KiteSectionTransition>
      )}
    </div>
  );
};

export default KiteSections;
