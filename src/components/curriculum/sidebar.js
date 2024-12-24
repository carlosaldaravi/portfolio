import { useState } from "react";
import { useIntl } from "react-intl";
import PersonalInfoSection from "./personal-info-section";
import LanguagesSection from "./languages-section";
import SkillsSection from "./skills-section";

const Sidebar = ({ isEditable, isGeneratingPDF }) => {
  const intl = useIntl();
  const [personalInfo, setPersonalInfo] = useState([
    {
      id: "p-info-website",
      title: intl.formatMessage({ id: "page.curriculum.sidebar.website" }),
      text: "https://carlosaldaravi.com",
    },
    {
      id: "p-info-address",
      title: intl.formatMessage({ id: "page.curriculum.sidebar.address" }),
      text: "Elche, Alicante",
    },
    {
      id: "p-info-skype",
      title: "skype",
      text: "carlosaldaravi.skype",
    },
    {
      id: "p-info-email",
      title: "email",
      text: "carlosaldaravi@gmail.com",
    },
    {
      id: "p-info-github",
      title: "github",
      text: "github.com/carlosaldaravi",
    },
  ]);

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

  const [skills, setSkills] = useState([
    {
      id: "personal-skill",
      title: intl.formatMessage({
        id: "page.curriculum.sidebar.personalSkills",
      }),
      data: [
        {
          id: "personal-skill-1",
          skill: intl.formatMessage({
            id: "page.curriculum.sidebar.personalSkills.teamwork",
          }),
          color: "blue-500",
          size: "12rem",
          head: true,
        },
        {
          id: "personal-skill-2",
          skill: intl.formatMessage({
            id: "page.curriculum.sidebar.personalSkills.responsability",
          }),
          color: "blue-800",
          size: "9.5rem",
          top: "-14%",
          left: "-14%",
        },
        {
          id: "personal-skill-3",
          skill: intl.formatMessage({
            id: "page.curriculum.sidebar.personalSkills.commitment",
          }),
          color: "green-500",
          size: "7.8rem",
          top: "-25%",
          left: "35%",
        },
        {
          id: "personal-skill-4",
          skill: intl.formatMessage({
            id: "page.curriculum.sidebar.personalSkills.proactivity",
          }),
          color: "orange-500",
          size: "5em",
          top: "10%",
          left: "73%",
        },
        {
          id: "personal-skill-5",
          skill: intl.formatMessage({
            id: "page.curriculum.sidebar.personalSkills.adaptability",
          }),
          color: "red-500",
          size: "8rem",
          top: "63%",
          left: "-8%",
        },
        {
          id: "personal-skill-6",
          skill: intl.formatMessage({
            id: "page.curriculum.sidebar.personalSkills.fastLearning",
          }),
          color: "pink-500",
          size: "7rem",
          top: "52%",
          left: "75%",
        },
        {
          id: "personal-skill-7",
          skill: intl.formatMessage({
            id: "page.curriculum.sidebar.personalSkills.problemSolving",
          }),
          color: "green-900",
          size: "7.5rem",
          top: "78%",
          left: "40%",
        },
      ],
    },
    {
      id: "programming-skill",
      title: intl.formatMessage({
        id: "page.curriculum.sidebar.programming",
      }),
      data: [
        {
          id: "programming-skill-1",
          skill: "React",
          color: "blue-500",
          size: "12rem",
          head: true,
        },
        {
          id: "programming-skill-2",
          skill: "Angular",
          size: "5.3rem",
          top: "25%",
          left: "-3%",
        },
        {
          id: "programming-skill-3",
          skill: "CSS",
          size: "4.7rem",
          top: "82%",
          left: "22%",
        },
        {
          id: "programming-skill-4",
          skill: "Node",
          size: "4.9rem",
          top: "58%",
          left: "69%",
        },
        {
          id: "programming-skill-5",
          skill: "SQL",
          size: "4.7rem",
          top: "-2%",
          left: "60%",
        },
        {
          id: "programming-skill-6",
          skill: "HTML",
          size: "4.9rem",
          top: "-15%",
          left: "29%",
        },
        {
          id: "programming-skill-7",
          skill: "Vue",
          size: "4.6rem",
          top: "60%",
          left: "7%",
        },
        {
          id: "programming-skill-8",
          skill: "Tailwind",
          size: "5.5rem",
          top: "80%",
          left: "50%",
        },
        {
          id: "programming-skill-9",
          skill: "Laravel",
          size: "5rem",
          top: "28%",
          left: "72%",
        },
        {
          id: "programming-skill-10",
          skill: "GIT",
          size: "4.8rem",
          top: "4%",
          left: "7%",
        },
      ],
    },
  ]);
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
        <SkillsSection
          skills={skills}
          setSkills={setSkills}
          isEditable={isEditable}
          isGeneratingPDF={isGeneratingPDF}
        />
      </div>
    </div>
  );
};
export default Sidebar;
