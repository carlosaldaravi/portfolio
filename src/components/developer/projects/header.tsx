import { ReactNode } from "react";
import { useIntl } from "react-intl";
import SectionTitle from "@/components/UI/section-title";

interface ProjectsHeaderProps {
  children: ReactNode;
}

const ProjectsHeader = ({ children }: ProjectsHeaderProps) => {
  const intl = useIntl();
  const sectionTitle = intl.formatMessage({ id: "page.developer.projects" });

  return (
    <div className="">
      <SectionTitle title={sectionTitle} className="section-title-big-vars" />
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ProjectsHeader;
