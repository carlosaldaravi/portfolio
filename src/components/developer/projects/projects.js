import { useState } from "react";
import ProjectsHeader from "./header";
import Proyect from "./project";
import Section from "@/components/UI/section";

const Projects = ({ projects }) => {
  const [projectHovered, setProjectHovered] = useState(false);

  return (
    <ProjectsHeader
      projectHovered={projectHovered}
      onSelectColor={(num) => setColorNumSelected(num)}
    >
      <Section className="mt-10 px-12 gap-4 sm:gap-8 lg:gap-12 lg:grid-cols-4 sm:max-w-7xl">
        {projects.map((project, i) => (
          <Proyect key={project.id} project={project} index={i} />
        ))}
      </Section>
    </ProjectsHeader>
  );
};

export default Projects;
