import { useState } from "react";
import CardsSection from "@/components/UI/cards-section";
import Project from "@/components/developer/projects/project";
import ProjectsHeader from "./header";

const Projects = ({ projects }) => {
  const [projectHovered, setProjectHovered] = useState(false);
  const [colorNumSelected, setColorNumSelected] = useState("1");

  return (
    <ProjectsHeader
      projectHovered={projectHovered}
      onSelectColor={(num) => setColorNumSelected(num)}
    >
      <CardsSection className="mt-10 px-12 gap-4 sm:gap-8 lg:gap-12">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            colorNum={colorNumSelected}
            onHover={(value) => setProjectHovered(value)}
          />
        ))}
      </CardsSection>
    </ProjectsHeader>
  );
};

export default Projects;
