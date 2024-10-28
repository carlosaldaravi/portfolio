import { FormattedMessage, useIntl } from "react-intl";
import Bubble from "./bubble";
import Bubbles from "./bubbles";
import SidebarSection from "./sidebar-section";
import { useState } from "react";
import PersonalInfoSection from "./personal-info-section";
import LanguagesSection from "./languages-section";

const Sidebar = ({ isEditable, isGeneratingPDF }) => {
  const intl = useIntl();
  const [personalInfo, setPersonalInfo] = useState({
    website: "https://carlosaldaravi.com",
    address: "Elche, Alicante",
    skype: "carlosaldaravi.skype",
    email: "carlosaldaravi@gmail.com",
    github: "github.com/carlosaldaravi",
  });

  const [languages, setLanguages] = useState([
    {
      id: "lang-1",
      language: intl.formatMessage({ id: "spanish" }),
      starsFilled: 5,
    },
    {
      id: "lang-2",
      language: intl.formatMessage({ id: "english" }),
      starsFilled: 4,
    },
    {
      id: "lang-3",
      language: intl.formatMessage({ id: "catalonian" }),
      starsFilled: 3,
    },
  ]);

  const [skills, setSkills] = useState({
    personalSkills: [
      { id: "teamwork", name: "Teamwork", color: "blue-500", size: "12rem" },
      // Agrega los demás elementos aquí
    ],
    programmingSkills: [
      { id: "react", name: "React", color: "blue-500", size: "12rem" },
      // Agrega los demás elementos aquí
    ],
  });
  return (
    <div className="main__left">
      <div className="main__left__body">
        <PersonalInfoSection
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          isEditable={isEditable}
        />
        <LanguagesSection
          languages={languages}
          setLanguages={setLanguages}
          isEditable={isEditable}
        />
        {/* <SidebarSection title={<FormattedMessage id="languages" />}>
          <StarsSection titleId="spanish" starsFilled={5} />
          <StarsSection titleId="english" starsFilled={4} />
          <StarsSection titleId="catalonian" starsFilled={3} />
        </SidebarSection> */}
        <SidebarSection
          title={
            <FormattedMessage id="page.curriculum.sidebar.personalSkills" />
          }
        >
          <Bubbles>
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.teamwork" />
              }
              color="blue-500"
              size="12rem"
              head={true}
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.responsability" />
              }
              color="blue-800"
              size="9.5rem"
              top="-14%"
              left="-14%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.commitment" />
              }
              color="green-500"
              size="7.8rem"
              top="-25%"
              left="35%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.proactivity" />
              }
              color="orange-500"
              size="5em"
              top="10%"
              left="73%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.adaptability" />
              }
              color="red-500"
              size="8rem"
              top="63%"
              left="-8%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.fastLearning" />
              }
              color="pink-500"
              size="7rem"
              top="52%"
              left="75%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.problemSolving" />
              }
              color="green-900"
              size="7.5rem"
              top="78%"
              left="40%"
              isGeneratingPDF={isGeneratingPDF}
            />
          </Bubbles>
        </SidebarSection>
        <SidebarSection
          title={
            <FormattedMessage
              id="page.curriculum.sidebar.programming"
              classes="mt-60"
            />
          }
        >
          <Bubbles>
            <Bubble
              name="React"
              color="blue-500"
              size="12rem"
              head={true}
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Angular"
              top="25%"
              left="-3%"
              size="5.3rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="CSS"
              top="82%"
              left="22%"
              size="4.7rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Node"
              top="58%"
              left="69%"
              size="4.9rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="SQL"
              top="-2%"
              left="60%"
              size="4.7rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="HTML"
              top="-15%"
              left="29%"
              size="4.9rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Vue"
              top="60%"
              left="7%"
              size="4.6rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Tailwind"
              top="80%"
              left="50%"
              size="5.5rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Laravel"
              top="28%"
              left="72%"
              size="5rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="GIT"
              top="4%"
              left="8%"
              size="4.8rem"
              isGeneratingPDF={isGeneratingPDF}
            />
          </Bubbles>
        </SidebarSection>
      </div>
    </div>
  );
};
export default Sidebar;
