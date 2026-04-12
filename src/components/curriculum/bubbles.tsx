import { ReactNode } from "react";

interface BubblesProps {
  children: ReactNode;
}

const Bubbles = ({ children }: BubblesProps) => {
  return (
    <div className="mt-20 relative h-64 w-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default Bubbles;
