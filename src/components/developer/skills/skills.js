import { useIntl } from "react-intl";
import CardsSection from "@/components/UI/cards-section";
import SectionTitle from "@/components/UI/section-title";
import Skill from "./skill";

const Skills = ({ skills }) => {
  const intl = useIntl();
  const sectionTitle = intl.formatMessage({ id: "page.developer.skills" });
  const sectionDescription = intl.formatMessage({
    id: "page.developer.skills.description",
  });
  return (
    <div className="">
      <SectionTitle
        title={sectionTitle}
        description={sectionDescription}
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
