import { FormattedMessage } from "react-intl";
import Card from "./card";
import CardsSection from "../UI/cards-section";
import Section from "../UI/section";

const OverlayCards = ({ cards }) => {
  return (
    <Section className="mt-12 sm:mt-24 text-center">
      <h3 className="text-gray-300 font-thin">
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
