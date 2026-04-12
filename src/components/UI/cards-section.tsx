import { ReactNode } from "react";
import Section from "./section";

interface CardsSectionProps {
  children: ReactNode;
  className?: string;
}

const CardsSection = ({ children, className = "" }: CardsSectionProps) => {
  return (
    <Section>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 ${className}`}
      >
        {children}
      </div>
    </Section>
  );
};

export default CardsSection;
