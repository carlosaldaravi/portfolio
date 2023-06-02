import CardsSection from "../UI/cards-section";
import Skill from "./skill";

const Skills = ({ skills }) => {
  return (
    <CardsSection className="mt-64 sm:mt-64 profile-skills max-w-8xl">
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </CardsSection>
  );
};

export default Skills;
