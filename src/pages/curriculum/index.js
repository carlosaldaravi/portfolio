import Page from "@/components/UI/page";
import BigInfo from "@/components/curriculum/big-info";
import Experience from "@/components/curriculum/experience";
import SmallInfo from "@/components/curriculum/small-info";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef } from "react";

const Curriculum = () => {
  const resumeRef = useRef(null);

  const downloadResumeAsPDF = () => {
    html2canvas(resumeRef.current, {
      scale: 2,
      windowWidth: resumeRef.current.scrollWidth,
      windowHeight: resumeRef.current.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      pdf.save("curriculum-carlos-aldaravi.pdf");
    });
  };
  return (
    <Page className="p-0">
      <div ref={resumeRef} className="main">
        <div className="main__left">
          <div className="main__left__body">
            <SmallInfo title="Website">
              <a
                href="https://carlosaldaravi.com"
                target="_blank"
                rel="noreferrer"
              >
                www.carlosaldaravi.com
              </a>
            </SmallInfo>
            <SmallInfo title="Address">
              <p>Elche, Alicante</p>
            </SmallInfo>
            <SmallInfo title="Skype">
              <p>carlosaldaravi</p>
              <p>.skype</p>
            </SmallInfo>
            <SmallInfo title="Email">
              <a href="mailto:carlosaldaravi@gmail.com">
                <p className="font-bold">carlosaldaravi@</p>
                <p>gmail.com</p>
              </a>
            </SmallInfo>
            <SmallInfo title="GitHub">
              <a href="https://github.com/carlosaldaravi" target="_blank">
                <p>github.com/carlosaldaravi</p>
              </a>
            </SmallInfo>
            <SmallInfo title="Personal Skills">
              <div className="relative h-64 w-full flex justify-center items-center">
                <div className="bubble size-48 p-6 bg-blue-500 rounded-full text-white font-bold flex justify-center items-center !text-2xl">
                  Team Player
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-blue-800"
                  style={{ position: "absolute", top: "3%", left: "0%" }}
                >
                  Curiosity
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-green-500 flex justify-center items-center text-center"
                  style={{ position: "absolute", top: "0%", left: "37%" }}
                >
                  Clean Code
                </div>
                <div
                  className="bubble bubble-dynamic size-20 bg-orange-500"
                  style={{ position: "absolute", top: "10%", left: "73%" }}
                >
                  Initiative
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-red-500"
                  style={{ position: "absolute", top: "52%", left: "3%" }}
                >
                  Organize
                </div>
                <div
                  className="bubble bubble-dynamic size-20 bg-pink-500"
                  style={{ position: "absolute", top: "52%", left: "75%" }}
                >
                  Manage
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-green-900 flex justify-center items-center text-center"
                  style={{ position: "absolute", top: "75%", left: "40%" }}
                >
                  Problem Solving
                </div>
              </div>
            </SmallInfo>
            <SmallInfo title="Programming">
              <div className="relative h-64 w-full flex justify-center items-center">
                <div className="bubble size-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-blue-500 rounded-full text-white font-bold !text-2xl">
                  React
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-blue-800"
                  style={{ position: "absolute", top: "18%", left: "0%" }}
                >
                  Angular
                </div>
                <div
                  className="bubble bubble-dynamic size-20 bg-green-500"
                  style={{ position: "absolute", top: "75%", left: "25%" }}
                >
                  Vue
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-red-500"
                  style={{ position: "absolute", top: "40%", left: "65%" }}
                >
                  Node
                </div>
                <div
                  className="bubble bubble-dynamic size-16 bg-purple-500"
                  style={{ position: "absolute", top: "3%", left: "60%" }}
                >
                  Git
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-gray-500"
                  style={{ position: "absolute", top: "0%", left: "27%" }}
                >
                  HTML
                </div>
                <div
                  className="bubble bubble-dynamic size-16 bg-yellow-500"
                  style={{ position: "absolute", top: "60%", left: "10%" }}
                >
                  CSS
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-pink-500"
                  style={{ position: "absolute", top: "65%", left: "50%" }}
                >
                  Tailwind
                </div>
                <div
                  className="bubble bubble-dynamic size-24 bg-green-900"
                  style={{ position: "absolute", top: "12%", left: "70%" }}
                >
                  Laravel
                </div>
                <div
                  className="bubble bubble-dynamic size-16 bg-orange-500"
                  style={{ position: "absolute", top: "6%", left: "10%" }}
                >
                  SQL
                </div>
              </div>
            </SmallInfo>
          </div>
        </div>
        <div className="main__right">
          <div className="main__right__header">
            <h1 className="header__title">
              <span className="header__title__name">Carlos</span>{" "}
              <span className="header__title__surname">Aldaravi</span>
            </h1>
            <h2 className="header__subtitle">Full-Stack Developer</h2>
          </div>
          <div className="main__right__body">
            <BigInfo title={"Education"}>
              <div className="body__section__header">
                <p className="header__date">2015 - 2019</p>
                <p className="header__title">Multimedia Engineering</p>
                <p className="header__place">University of Alicante</p>
              </div>
              <div className="body__section__body">
                <p>
                  Last year of university consisted of create an application by
                  groups formed by 5 members. My group and I did an application
                  similar to info jobs. Most of my work in the team has been
                  backend although I have also touched some frontend to
                  implement notification system with real time sockets and
                  messaging system. We have used as technologies, Angular,
                  NodeJS with Sequelize as ORM, MySQL and Mongo (for logs and
                  messages), Elastic- Search and Grafana. The url of the website
                  is <a href="https://kwee.ovh/">https://kwee.ovh/</a>.{" "}
                </p>
                <p>
                  About my final degree work, I did a water sports school PWA. I
                  decided to do it with this technologies: VueJS and Tailwind on
                  frontend, NodeJS (NestJS) on backend and PostgreSQL as
                  database. I deployed the backend in Heroku and the frontend in
                  Netlify both with CI/CD. The url of the website is{" "}
                  <a href="https://ocean-platform.netlify.app/">
                    https://ocean-platform.netlify.app/
                  </a>
                  .
                </p>
                <p className="italic font-medium">GPA: 7,8/10</p>
              </div>
            </BigInfo>
            <BigInfo title={"Experience"}>
              <Experience
                date="08/2023 - present"
                title="Teach Lead"
                place="EVM Group"
              >
                <p>
                  Working as a Full-Stack senior in EVM group playing the role
                  of technical leader in <a href="https://tamiz.es">tamiz.es</a>
                </p>
              </Experience>
              <Experience
                date="01/2023 - present"
                title="Full-Stack Developer"
                place="Freelance"
              >
                <p>
                  I decided to move forward with React and Node. I have been
                  working for a different clients as Full-Stack developer. I
                  developed projects with React + Node and others simply with
                  NextJS. I am currently working for a client on a React Native
                  project. These projects are accessible on my website.
                </p>
              </Experience>
              <Experience
                date="04/2021 - 01/2023"
                title="Full-Stack Developer"
                place="Inbenta"
              >
                <p>
                  Working as 100% remote with JavaScript and VueJS on Frontend
                  and PHP on Backend. All tasks managed by Jira. Use of GitLab
                  to work with projects. All written communication and
                  documentation in English. Daily in Spanish and monthly also in
                  English.
                </p>
              </Experience>
              <Experience
                date="08/2020 - 04/2021"
                title="Backend Developer"
                place="Z1"
              >
                <p>
                  Working as 100% remote with NestJS (NodeJS), GraphQL,
                  PostgreSQL, Prisma, Jira, Everhour. The main programming
                  language was TypeScript.
                </p>
              </Experience>
              <Experience
                date="01/2019 - 07/2020"
                title="Full-Stack Developer"
                place="Conwork"
              >
                <p>
                  The main programming language of the company is PHP but we
                  have had some projects in which I have had to work in Angular,
                  Node and Vue.
                </p>
              </Experience>
              <Experience
                date="07/2018 - 01/2019"
                title="Internship"
                place="Conwork"
              >
                <p>
                  I did my internship in this company for 6 month, I programmed
                  for 4 months with PHP and 2 month with JavaScript in NodeJS
                  and Angular.
                </p>
              </Experience>
            </BigInfo>
            <BigInfo title="Certifications">
              <Experience
                date="04/2023"
                title="Next.js and React - The Complete Guide"
                place="Udemy"
              >
                <p>25 hours</p>
              </Experience>
              <Experience
                date="02/2023"
                title="React - The Complete Guide (incl Hooks, React Router, Redux)"
                place="Udemy"
              >
                <p>58,5 hours</p>
              </Experience>
              <Experience
                date="12/2022"
                title="Mastering React"
                place="CodewithMosh"
              >
                <p>13 hours</p>
              </Experience>
              <Experience
                date="12/2020"
                title="Professional Git y Github course"
                place="Platzi"
              >
                <p>6 hours</p>
              </Experience>
              <Experience
                date="03/2020"
                title="NestJS: Zero to Hero - Modern TypeScript back-end development"
                place="Platzi"
              >
                <p>6,5 hours</p>
              </Experience>
              <Experience
                date="01/2019"
                title="Angular: real time applications with Sockets and REST"
                place="Udemy"
              >
                <p>8 hours</p>
              </Experience>
              <Experience date="11/2018" title="TypeScript" place="Udemy">
                <p>6,5 hours</p>
              </Experience>
              <Experience
                date="11/2018"
                title="Node: from 0 to expert"
                place="Udemy"
              >
                <p>11,5 hours</p>
              </Experience>
              <Experience date="08/2018" title="Git + GitHub" place="Udemy">
                <p>7 hours</p>
              </Experience>
            </BigInfo>
            <BigInfo title="Honors & Awards">
              <Experience date="10/2017" title="Award" place="Hackaton">
                <p>
                  By the company Dinapsis to the project carried out in group in
                  the Hackaton of Tourism that made the University of Alicante
                  in the headquarters of Torrevieja.
                </p>
              </Experience>
              <Experience date="03/2017" title="Award" place="Hack for good">
                <p>
                  By the company AdSalsa to the project carried out in group in
                  the Hack For Good organized by the University of Alicante
                  together with Telefónica.
                </p>
              </Experience>
            </BigInfo>
            <BigInfo title="Other Info">
              <p>
                I am a person who likes to learn and overcome challenges,
                passionate about new tech- nologies and the digital age. I like
                sports, especially those that have to do with the sea and
                sailing. I also like to travel and meet new places, people and
                cultures. During the years I’ve been working as a kitesurf
                instructor. I’ve been able to travel to a lot of coun- tries in
                the world. I’m passionate about the sea and kitesurfing is my
                favourite hobby. I would like and I’m able to learn new skills
                and new languages, knowledge is every- thing. I really enjoy
                programming Javascript and especially with any of its frameworks
                Vue, React or Angular.
              </p>
            </BigInfo>
            <p className="italic">Apr 16th, 2024</p>
            <o className="text-right italic">Carlos Aldaravi</o>
          </div>
        </div>
      </div>
      {/* <button onClick={downloadResumeAsPDF}>Descargar CV en PDF</button> */}
    </Page>
  );
};

export default Curriculum;
