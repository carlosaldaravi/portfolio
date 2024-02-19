import Section from "./section";

const CardsSection = ({ children, className }) => {
  return (
    <Section>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    </Section>
  );
};

export default CardsSection;
