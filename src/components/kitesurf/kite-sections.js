import { useEffect, useState } from "react";
import NewsCards from "./news-cards/news-cards";
import Sponsors from "./sponsors";
import KiteSectionTransition from "./kite-sections-transition";
import JumpsCards from "./jump-card/jumps-cards";

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

  useEffect(() => {
    if (touchEnd !== 0) {
      if (touchStart - touchEnd > 100) {
        onChangeSection(1); // to the next section
        setTouchStart(0);
        setTouchEnd(0);
      } else if (touchEnd - touchStart > 100) {
        onChangeSection(-1); // to the previous section
        setTouchStart(0);
        setTouchEnd(0);
      }
    }
  }, [touchStart, touchEnd, onChangeSection]);

  return (
    <div
      className="overflow-hidden"
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
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
    </div>
  );
};

export default KiteSections;
