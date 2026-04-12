import React, { useCallback } from "react";
import NewsCards from "@/components/kitesurf/news-cards/news-cards";
import Sponsors from "@/components/kitesurf/sponsors";
import JumpsCards from "@/components/kitesurf/jump-card/jumps-cards";
import Gear from "@/components/kitesurf/gear/gear";
import Ranking from "@/components/kitesurf/ranking/ranking";
import KiteSectionTransition from "./kite-sections-transition";
import useSwipeDetection from "@/hooks/useSwipeDetection";
import useRanking from "./hooks/useRanking";
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

const KiteSections = ({ sectionSelected, direction, onChangeSection }: KiteSectionsProps) => {
  const { ranking } = useRanking();

  const onSwipeLeft = useCallback(() => {
    onChangeSection(1);
  }, [onChangeSection]);

  const onSwipeRight = useCallback(() => {
    onChangeSection(-1);
  }, [onChangeSection]);

  const { touchStartHandler, touchMoveHandler, touchEndHandler } =
    useSwipeDetection({ onSwipeLeft, onSwipeRight });

  const renderSectionContent = () => {
    switch (sectionSelected.name) {
      case "bestJumps":
        return <JumpsCards jumps={sectionSelected.data as Jump[]} />;
      case "sponsors":
        return <Sponsors sponsors={sectionSelected.data as Sponsor[]} />;
      case "news":
        return <NewsCards news={sectionSelected.data as NewsItem[]} />;
      case "gear":
        return <Gear gear={sectionSelected.data as GearGroupItem[]} />;
      case "ranking":
        return <Ranking ranking={ranking} />;
      default:
        return null;
    }
  };

  const content = renderSectionContent();

  return (
    <div
      className="overflow-hidden"
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
    >
      {content && (
        <KiteSectionTransition
          name={sectionSelected.name}
          sectionSelected={sectionSelected}
          direction={direction}
        >
          {content}
        </KiteSectionTransition>
      )}
    </div>
  );
};

export default KiteSections;
