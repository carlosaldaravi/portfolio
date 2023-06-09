import { FormattedMessage } from "react-intl";
import CardsSection from "@/components/UI/cards-section";
import Skill from "./skill";
import SectionTitle from "@/components/UI/section-title";

const Skills = ({ skills }) => {
  return (
    <div className="">
      <SectionTitle
        title="page.developer.skills"
        description="page.developer.skills.description"
        className="mt-24 section-title-big-vars"
      />

      <CardsSection className="mt-24 sm:mt-32 profile-skills max-w-8xl text-3xl tracking-xs -mb-10">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </CardsSection>
    </div>
  );
};

export default Skills;
