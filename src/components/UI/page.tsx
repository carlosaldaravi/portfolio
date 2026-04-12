import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

const Page = ({ children, className = "" }: PageProps) => {
  return (
    <div
      className={`min-w-lg min-h-[65vh] mt-32 sm:mt-44 mb-[20vh] ${className}`}
    >
      {children}
    </div>
  );
};

export default Page;
