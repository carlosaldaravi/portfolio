import { FormattedMessage } from "react-intl";
import Card from "./card";
import CardsSection from "@/components/UI/cards-section";
import Section from "@/components/UI/section";

interface OverlayCard {
  name: string;
  text: string;
  img: string;
  before: string;
}

interface OverlayCardsProps {
  cards: OverlayCard[];
}

const OverlayCards = ({ cards }: OverlayCardsProps) => {
  return (
    <Section className="sm:mt-24 text-center">
      <h3 className="font-thin">
        <FormattedMessage id="page.about.freeTime" />
      </h3>
      <CardsSection>
        {cards.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </CardsSection>
    </Section>
  );
};

export default OverlayCards;
