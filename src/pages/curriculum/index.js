import { useIntl } from "react-intl";
import useTracker from "@/hooks/useTracker";
import { useContext, useRef, useState } from "react";
import {
  ArrowDownTrayIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { TRACKING_TYPES } from "@/types/track";
import ThemeContext from "@/store/theme-context";
import Page from "@/components/UI/page";
import Footer from "@/components/curriculum/footer";
import Sidebar from "@/components/curriculum/sidebar";
import Header from "@/components/curriculum/header";
import sectionsData from "@/data/sections-data";
import EditableSection from "@/components/curriculum/editable-section";
import Experience from "@/components/curriculum/experience";
import Education from "@/components/curriculum/education";
import Certification from "@/components/curriculum/certification";
import HonorAndAward from "@/components/curriculum/honor-and-award";
import OtherInfo from "@/components/curriculum/other-info";

const Curriculum = () => {
  const intl = useIntl();
  const [sections, setSections] = useState(sectionsData);
  const [name, setName] = useState("Carlos");
  const [surname, setSurname] = useState("Aldaravi");
  const [isEditable, setIsEditable] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resumeRef = useRef(null);
  const tracker = useTracker();
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const [experiences, setExperiences] = useState([
    {
      id: "experience-1",
      order: 1,
      date: "08/2023 - " + intl.formatMessage({ id: "present" }),
      title: "Teach Lead",
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

  const handleOnRemoveSection = (titleId) => {
    setSections(sections.filter((s) => s.titleId !== titleId));
  };

  const downloadResumeAsPDF = () => {
    setIsGeneratingPDF(true);
    import("html2pdf.js").then((html2pdfModule) => {
      const html2pdf = html2pdfModule.default;
      const element = resumeRef.current;
      const opt = {
        margin: [0, 0, 0, 0],
        filename: "curriculum-carlos-aldaravi.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          dpi: 192,
          letterRendering: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          tracker.track(TRACKING_TYPES.event.downloadCV);
          setIsGeneratingPDF(false);
        })
        .catch(() => {
          setIsGeneratingPDF(false);
        });
    });
  };

  const handleEditCV = () => {
    isEditable
      ? tracker.track(TRACKING_TYPES.event.saveCV)
      : tracker.track(TRACKING_TYPES.event.editCV);

    setIsEditable(!isEditable);
  };

  return (
    <Page className="p-0">
      <div ref={resumeRef} className="relative main">
        {!isGeneratingPDF && (
          <div className="absolute z-10 w-56 top-0 right-5 flex flex-col justify-center items-center">
            {!isEditable && (
              <span
                className={`download-button flex flex-col justify-center items-center animate-pulse cursor-pointer`}
                onClick={downloadResumeAsPDF}
              >
                <ArrowDownTrayIcon className="download-icon size-14" />
                <p className="text-2xl font-bold italic">Descargar</p>
              </span>
            )}
            <span
              className={`flex flex-col justify-center items-center ${
                isEditable ? "mt-10" : ""
              }`}
            >
              {isEditable ? (
                <>
                  <CheckIcon
                    className={`cursor-pointer stroke-green-600 ${
                      isEditable ? "size-16" : "size-10"
                    }`}
                    onClick={handleEditCV}
                  />
                  <p className="text-xl font-bold italic">Terminar</p>
                </>
              ) : (
                <>
                  <PencilIcon
                    className="size-10 cursor-pointer"
                    onClick={handleEditCV}
                  />
                  <p className="text-xl font-bold italic">o.. ¡Hazlo Tuyo!</p>
                </>
              )}
            </span>
          </div>
        )}
        <Sidebar isEditable={isEditable} isGeneratingPDF={isGeneratingPDF} />
        <div className="main__right">
          <Header
            name={name}
            surname={surname}
            onChangeName={(newName) => setName(newName)}
            onChangeSurname={(newSurname) => setSurname(newSurname)}
            isEditable={isEditable}
          />
          <div className="main__right__body">
            {sections.map(({ titleId, Component }) => (
              <div key={titleId} className="section">
                <EditableSection
                  isEditable={isEditable}
                  bigSection={true}
                  onRemove={() => handleOnRemoveSection(titleId)}
                >
                  {titleId === "page.developer.experience" ? (
                    <Experience
                      titleId={titleId}
                      isEditable={isEditable}
                      experiences={experiences}
                      setExperiences={setExperiences}
                    />
                  ) : titleId === "page.curriculum.body.education.title" ? (
                    <Education
                      titleId={titleId}
                      isEditable={isEditable}
                      educations={educations}
                      setEducations={setEducations}
                    />
                  ) : titleId === "page.curriculum.body.certifications" ? (
                    <Certification
                      titleId={titleId}
                      isEditable={isEditable}
                      certifications={certifications}
                      setCertifications={setCertifications}
                    />
                  ) : titleId ===
                    "page.curriculum.body.honorsAndAwards.title" ? (
                    <HonorAndAward
                      titleId={titleId}
                      isEditable={isEditable}
                      honorsAndAwards={honorsAndAwards}
                      setHonorsAndAwards={setHonorsAndAwards}
                    />
                  ) : titleId === "page.curriculum.body.otherInfo.title" ? (
                    <OtherInfo
                      titleId={titleId}
                      isEditable={isEditable}
                      otherInfo={otherInfo}
                      setOtherInfo={setOtherInfo}
                    />
                  ) : (
                    <Component titleId={titleId} isEditable={isEditable} />
                  )}
                </EditableSection>
              </div>
            ))}
            <Footer name={name} surname={surname} />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Curriculum;
