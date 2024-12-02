import Company from "./company";
import SectionTitle from "@/components/UI/section-title";
import Section from "@/components/UI/section";
import { useIntl } from "react-intl";

const Experience = ({ experience }) => {
  const intl = useIntl();

  const calculateYears = () => {
    const startYear = 2018;
    const startMonth = 6;
    const currentDate = new Date();
    const yearsDifference = currentDate.getFullYear() - startYear;
    const monthsDifference = currentDate.getMonth() - startMonth;

    return monthsDifference >= 0 ? yearsDifference : yearsDifference - 1;
  };

  const numOfYears = calculateYears();

  const titleText = intl.formatMessage({ id: "page.developer.experience" });
  const sectionDescription = intl.formatMessage(
    { id: "page.developer.experience.description" },
    { numOfYears }
  );

  return (
    <Section className="">
      <SectionTitle
        title={titleText}
        description={sectionDescription}
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
