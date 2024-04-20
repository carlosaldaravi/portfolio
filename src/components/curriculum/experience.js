import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";

const Experience = () => {
  return (
    <CurriculumSection title={"Experience"}>
      <TimeLineEvent
        date="08/2023 - present"
        title="Teach Lead"
        place="EVM Group"
      >
        <PrettyParagraph>
          Working as a Full-Stack senior in EVM group playing the role of
          technical leader in <a href="https://tamiz.es">tamiz.es</a>
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="01/2023 - present"
        title="Full-Stack Developer"
        place="Freelance"
      >
        <PrettyParagraph>
          I decided to move forward with React and Node. I have been working for
          a different clients as Full-Stack developer. I developed projects with
          React + Node and others simply with NextJS. I am currently working for
          a client on a React Native project. These projects are accessible on
          my website.
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="04/2021 - 01/2023"
        title="Full-Stack Developer"
        place="Inbenta"
      >
        <PrettyParagraph>
          Working as 100% remote with JavaScript and VueJS on Frontend and PHP
          on Backend. All tasks managed by Jira. Use of GitLab to work with
          projects. All written communication and documentation in English.
          Daily in Spanish and monthly also in English.
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="08/2020 - 04/2021"
        title="Backend Developer"
        place="Z1"
      >
        <PrettyParagraph>
          Working as 100% remote with NestJS (NodeJS), GraphQL, PostgreSQL,
          Prisma, Jira, Everhour. The main programming language was TypeScript.
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="01/2019 - 07/2020"
        title="Full-Stack Developer"
        place="Conwork"
      >
        <PrettyParagraph>
          The main programming language of the company is PHP but we have had
          some projects in which I have had to work in Angular, Node and Vue.
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="07/2018 - 01/2019"
        title="Internship"
        place="Conwork"
      >
        <PrettyParagraph>
          I did my internship in this company for 6 month, I programmed for 4
          months with PHP and 2 month with JavaScript in NodeJS and Angular.
        </PrettyParagraph>
      </TimeLineEvent>
    </CurriculumSection>
  );
};

export default Experience;
