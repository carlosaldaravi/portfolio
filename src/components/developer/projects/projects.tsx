import { useState } from "react";
import ProjectsHeader from "./header";
import Proyect from "./project";
import Section from "@/components/UI/section";

interface Project {
  id: string;
  name: string;
  description: string;
  img: string;
  logo: string;
  url: string;
  year: string;
  stack: string[];
  github: {
    url: string;
    private: boolean;
  };
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [projectHovered, setProjectHovered] = useState(false);

  return (
    <ProjectsHeader
      projectHovered={projectHovered}
      onSelectColor={() => {}}
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
