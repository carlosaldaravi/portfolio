import { useEffect, useState } from "react";
import JumpsCards from "./jump-card/jumps-cards";
import NewsCards from "./news-cards/news-cards";
import Sponsors from "./sponsors";

const KiteSections = ({ sectionSelected, onChangeSection }) => {
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
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
    >
      {sectionSelected.name === "bestJumps" && (
        <JumpsCards
          jumps={sectionSelected.data}
          onChangeSection={(oper) => onChangeSection(oper)}
        />
      )}
      {sectionSelected.name === "sponsors" && (
        <Sponsors sponsors={sectionSelected.data} />
      )}
      {sectionSelected.name === "news" && (
        <NewsCards news={sectionSelected.data} />
      )}
    </div>
  );
};

export default KiteSections;
