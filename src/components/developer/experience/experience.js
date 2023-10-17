import Company from "./company";
import SectionTitle from "@/components/UI/section-title";
import Section from "@/components/UI/section";

const Experience = ({ experience }) => {
  return (
    <Section className="">
      <SectionTitle
        title="page.developer.experience"
        description="page.developer.experience.description"
        className="section-title-big-vars"
      />
      <ul className="timeline mt-10">
        {experience.map((exp) => (
          <Company key={`experience-${exp.date}`} experience={exp} />
        ))}
      </ul>
    </Section>
  );
};

export default Experience;
