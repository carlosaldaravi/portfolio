import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";

const Education = () => {
  return (
    <CurriculumSection title={"Education"}>
      <TimeLineEvent
        date="2015 - 2019"
        title="Multimedia Engineering"
        place="University of Alicante"
      >
        <PrettyParagraph>
          Last year of university consisted of create an application by groups
          formed by 5 members. My group and I did an application similar to info
          jobs. Most of my work in the team has been backend although I have
          also touched some frontend to implement notification system with real
          time sockets and messaging system. We have used as technologies,
          Angular, NodeJS with Sequelize as ORM, MySQL and Mongo (for logs and
          messages), Elastic- Search and Grafana. The url of the website is{" "}
          <a href="https://kwee.ovh/">https://kwee.ovh/</a>.{" "}
        </PrettyParagraph>
        <PrettyParagraph>
          About my final degree work, I did a water sports school PWA. I decided
          to do it with this technologies: VueJS and Tailwind on frontend,
          NodeJS (NestJS) on backend and PostgreSQL as database. I deployed the
          backend in Heroku and the frontend in Netlify both with CI/CD. The url
          of the website is{" "}
          <a href="https://ocean-platform.netlify.app/">
            https://ocean-platform.netlify.app/
          </a>
          .
        </PrettyParagraph>
        <p className="italic font-medium">GPA: 7,8/10</p>
      </TimeLineEvent>
    </CurriculumSection>
  );
};

export default Education;
