import { FormattedMessage } from "react-intl";
import CardsSection from "@/components/UI/cards-section";
import Project from "@/components/developer/projects/project";

const Projects = ({ projects }) => {
  return (
    <div className="">
      <h2 className="text-center sm:text-start text-gray-400 tracking-xs">
        <FormattedMessage id="page.developer.projects" />
      </h2>
      <CardsSection className="mt-24 px-12 gap-4 sm:gap-8 lg:gap-12">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </CardsSection>
    </div>
  );
};

export default Projects;
