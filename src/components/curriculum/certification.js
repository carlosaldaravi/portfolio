import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";

const Certification = () => {
  return (
    <CurriculumSection title="Certifications">
      <TimeLineEvent
        date="04/2023"
        title="Next.js and React - The Complete Guide"
        place="Udemy"
      >
        <PrettyParagraph>25 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="02/2023"
        title="React - The Complete Guide (incl Hooks, React Router, Redux)"
        place="Udemy"
      >
        <PrettyParagraph>58,5 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="12/2022"
        title="Mastering React"
        place="CodewithMosh"
      >
        <PrettyParagraph>13 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="12/2020"
        title="Professional Git y Github course"
        place="Platzi"
      >
        <PrettyParagraph>6 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="03/2020"
        title="NestJS: Zero to Hero - Modern TypeScript back-end development"
        place="Platzi"
      >
        <PrettyParagraph>6,5 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="01/2019"
        title="Angular: real time applications with Sockets and REST"
        place="Udemy"
      >
        <PrettyParagraph>8 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent date="11/2018" title="TypeScript" place="Udemy">
        <PrettyParagraph>6,5 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="11/2018"
        title="Node: from 0 to expert"
        place="Udemy"
      >
        <PrettyParagraph>11,5 hours</PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent date="08/2018" title="Git + GitHub" place="Udemy">
        <PrettyParagraph>7 hours</PrettyParagraph>
      </TimeLineEvent>
    </CurriculumSection>
  );
};
export default Certification;
