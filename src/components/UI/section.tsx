import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section
      className={`mx-auto my-10 min-w-md max-w-xl sm:max-w-6xl animate-appear-1 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
