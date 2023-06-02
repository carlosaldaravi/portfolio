import CardsSection from "../UI/cards-section";
import Section from "../UI/section";
import Skill from "./skill";

const Skills = ({ skills }) => {
  return (
    <div className="mt-8">
      <h2>Skills</h2>
      <CardsSection className="mt-24 sm:mt-32 profile-skills max-w-8xl text-3xl tracking-xs">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </CardsSection>
    </div>
  );
};

export default Skills;
