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
      <Section className="flex justify-center flex-col items-center lg:max-w-6xl">
        {projects.map((project, i) => (
          <Proyect key={project.id} project={project} index={i} />
        ))}
      </Section>
    </ProjectsHeader>
  );
};

export default Projects;
