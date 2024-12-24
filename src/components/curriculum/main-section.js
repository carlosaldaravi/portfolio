import { useIntl } from "react-intl";
import { useState } from "react";
import EditableSection from "./editable-section";
import Experience from "./experience";
import Education from "./education";
import Certification from "./certification";
import HonorAndAward from "./honor-and-award";
import OtherInfo from "./other-info";

const MainSection = ({ isEditable }) => {
  const intl = useIntl();
  const [sections, setSections] = useState([
    {
      id: "section-experience",
      title: intl.formatMessage({ id: "page.developer.experience" }),
    },
    {
      id: "section-education",
      title: intl.formatMessage({
        id: "page.curriculum.body.education.title",
      }),
    },
    {
      id: "section-certifications",
      title: intl.formatMessage({
        id: "page.curriculum.body.certifications",
      }),
    },
    {
      id: "section-honorsAndAwards",
      title: intl.formatMessage({
        id: "page.curriculum.body.honorsAndAwards.title",
      }),
    },
    {
      id: "section-otherInfo",
      title: intl.formatMessage({
        id: "page.curriculum.body.otherInfo.title",
      }),
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: "experience-1",
      order: 1,
      date: "08/2023 - " + intl.formatMessage({ id: "present" }),
      title: "Tech Lead",
      place: "EVM Group",
      text: intl.formatMessage({ id: "page.developer.experience.evm" }),
    },
    {
      id: "experience-2",
      order: 2,
      date: "01/2023 - " + intl.formatMessage({ id: "present" }),
      title: "Full-Stack Developer",
      place: "Freelance",
      text: intl.formatMessage({ id: "page.developer.experience.freelance" }),
    },
    {
      id: "experience-3",
      order: 3,
      date: "04/2021 - 01/2023",
      title: "Full-Stack Developer",
      place: "Inbenta",
      text: intl.formatMessage({ id: "page.developer.experience.inbenta" }),
    },
    {
      id: "experience-4",
      order: 4,
      date: "08/2020 - 04/2021",
      title: "Backend Developer",
      place: "Z1",
      text: intl.formatMessage({ id: "page.developer.experience.z1" }),
    },
    {
      id: "experience-5",
      order: 5,
      date: "07/2018 - 07/2020",
      title: "Full-Stack Developer",
      place: "Conwork",
      text: intl.formatMessage({ id: "page.developer.experience.conwork" }),
    },
  ]);

  const [educations, setEducations] = useState([
    {
      id: "education-1",
      date: "2015 - 2019",
      title: intl.formatMessage({ id: "page.home.engineer" }),
      place: "University of Alicante",
      text1: intl.formatMessage({ id: "page.curriculum.body.education.text1" }),
      text2: intl.formatMessage({ id: "page.curriculum.body.education.text2" }),
      gpa: "7,8/10",
    },
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: "cert-1",
      date: "04/2023",
      title: "Next.js and React - The Complete Guide",
      place: "Udemy",
      hours: "25 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-2",
      date: "02/2023",
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      place: "Udemy",
      hours: "58.5 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-3",
      date: "12/2022",
      title: "Mastering React",
      place: "CodewithMosh",
      hours: "13 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-4",
      date: "12/2020",
      title: "Professional Git y Github course",
      place: "Platzi",
      hours: "6 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-5",
      date: "03/2020",
      title: "NestJS: Zero to Hero - Modern TypeScript back-end development",
      place: "Platzi",
      hours: "6.5 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-6",
      date: "01/2019",
      title: "Angular: real time applications with Sockets and REST",
      place: "Udemy",
      hours: "8 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-7",
      date: "11/2018",
      title: "TypeScript",
      place: "Udemy",
      hours: "6.5 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-8",
      date: "11/2018",
      title: "Node: from 0 to expert",
      place: "Udemy",
      hours: "11.5 " + intl.formatMessage({ id: "hours" }),
    },
    {
      id: "cert-9",
      date: "08/2018",
      title: "Git + GitHub",
      place: "Udemy",
      hours: "7 " + intl.formatMessage({ id: "hours" }),
    },
  ]);

  const [otherInfo, setOtherInfo] = useState([
    {
      id: "info-1",
      text: intl.formatMessage({ id: "page.curriculum.body.otherInfo.text" }),
    },
  ]);

  const [honorsAndAwards, setHonorsAndAwards] = useState([
    {
      id: "award-1",
      date: "10/2017",
      title: intl.formatMessage({
        id: "page.curriculum.body.honorsAndAwards.award",
      }),
      place: "Hackaton",
      description: intl.formatMessage({
        id: "page.curriculum.body.honorsAndAwards.award1",
      }),
    },
    {
      id: "award-2",
      date: "03/2017",
      title: intl.formatMessage({
        id: "page.curriculum.body.honorsAndAwards.award",
      }),
      place: "Hack for good",
      description: intl.formatMessage({
        id: "page.curriculum.body.honorsAndAwards.award2",
      }),
    },
  ]);

  const handleChangeSectionTitle = (sectionId, newTitle) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === "section-" + sectionId
          ? { ...section, title: newTitle }
          : section
      )
    );
  };

  const handleOnRemoveSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  return (
    <div className="main__right__body">
      {sections.map(({ id, title }) => (
        <div key={`section-${id}`} className="section">
          <EditableSection
            isEditable={isEditable}
            bigSection={true}
            onRemove={() => handleOnRemoveSection(id)}
          >
            {id === "section-experience" && (
              <Experience
                title={title}
                isEditable={isEditable}
                experiences={experiences}
                setExperiences={setExperiences}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-education" && (
              <Education
                title={title}
                isEditable={isEditable}
                educations={educations}
                setEducations={setEducations}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-certifications" && (
              <Certification
                title={title}
                isEditable={isEditable}
                certifications={certifications}
                setCertifications={setCertifications}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-honorsAndAwards" && (
              <HonorAndAward
                title={title}
                isEditable={isEditable}
                honorsAndAwards={honorsAndAwards}
                setHonorsAndAwards={setHonorsAndAwards}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
            {id === "section-otherInfo" && (
              <OtherInfo
                title={title}
                isEditable={isEditable}
                otherInfo={otherInfo}
                setOtherInfo={setOtherInfo}
                onChangeTitle={(sectionId, newTitle) =>
                  handleChangeSectionTitle(sectionId, newTitle)
                }
              />
            )}
          </EditableSection>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
