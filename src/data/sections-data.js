import Experience from "@/components/curriculum/experience";
import Education from "@/components/curriculum/education";
import Certification from "@/components/curriculum/certification";
import HonorAndAward from "@/components/curriculum/honor-and-award";
import OtherInfo from "@/components/curriculum/other-info";

const sectionsData = [
  {
    id: "section-experience",
    titleId: "page.developer.experience",
    title: "",
    titleEdited: false,
    Component: Experience,
  },
  {
    id: "section-education",
    titleId: "page.curriculum.body.education.title",
    title: "",
    titleEdited: false,
    Component: Education,
  },
  {
    id: "section-certifications",
    titleId: "page.curriculum.body.certifications",
    title: "",
    titleEdited: false,
    Component: Certification,
  },
  {
    id: "section-honors-and-awards",
    titleId: "page.curriculum.body.honorsAndAwards.title",
    title: "",
    titleEdited: false,
    Component: HonorAndAward,
  },
  {
    id: "section-other-info",
    titleId: "page.curriculum.body.otherInfo.title",
    title: "",
    titleEdited: false,
    Component: OtherInfo,
  },
];

const experiencesData = [
  {
    id: "experience-1",
    order: 2,
    date: "01/2023 - ",
    dateEdited: false,
    titleId: "page.developer.experience.fullStackDeveloper",
    title: "Full-Stack Developer",
    titleEdited: false,
    place: "Freelance",
    placeEdited: false,
    textId: "page.developer.experience.freelance",
    text: "",
    textEdited: false,
  },
  {
    id: "experience-2",
    order: 1,
    date: "08/2023 - 01/2025",
    dateEdited: false,
    titleId: "page.developer.experience.techLead",
    title: "Tech Lead",
    titleEdited: false,
    place: "EVM Group",
    placeEdited: false,
    textId: "page.developer.experience.evm",
    text: "",
    textEdited: false,
  },
  {
    id: "experience-3",
    order: 3,
    date: "04/2021 - 01/2023",
    dateEdited: false,
    titleId: "page.developer.experience.fullStackDeveloper",
    title: "Full-Stack Developer",
    titleEdited: false,
    place: "Inbenta",
    placeEdited: false,
    textId: "page.developer.experience.inbenta",
    text: "",
    textEdited: false,
  },
  {
    id: "experience-4",
    order: 4,
    date: "08/2020 - 04/2021",
    dateEdited: false,
    titleId: "page.developer.experience.backendDeveloper",
    title: "Backend Developer",
    titleEdited: false,
    place: "Z1",
    placeEdited: false,
    textId: "page.developer.experience.z1",
    text: "",
    textEdited: false,
  },
  {
    id: "experience-5",
    order: 5,
    date: "07/2018 - 07/2020",
    dateEdited: false,
    titleId: "page.developer.experience.fullStackDeveloper",
    title: "Full-Stack Developer",
    titleEdited: false,
    place: "Conwork",
    placeEdited: false,
    textId: "page.developer.experience.conwork",
    text: "",
    textEdited: false,
  },
];

const educationsData = [
  {
    id: "education-1",
    date: "2015 - 2019",
    dateEdited: false,
    titleId: "page.home.engineer",
    title: "",
    titleEdited: false,
    placeId: "page.curriculum.body.education.myUniversity",
    place: "",
    placeEdited: false,
    text1Id: "page.curriculum.body.education.text1",
    text1: "",
    text1Edited: false,
    text2Id: "page.curriculum.body.education.text2",
    text2: "",
    text2Edited: false,
    gpa: "7,8/10",
    gpaEdited: false,
  },
];

const certificationsData = [
  {
    id: "cert-1",
    date: "04/2023",
    title: "Next.js and React - The Complete Guide",
    place: "Udemy",
    hours: "25 ",
  },
  {
    id: "cert-2",
    date: "02/2023",
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    place: "Udemy",
    hours: "58.5 ",
  },
  {
    id: "cert-3",
    date: "12/2022",
    title: "Mastering React",
    place: "CodewithMosh",
    hours: "13 ",
  },
  {
    id: "cert-4",
    date: "12/2020",
    title: "Professional Git y Github course",
    place: "Platzi",
    hours: "6 ",
  },
  {
    id: "cert-5",
    date: "03/2020",
    title: "NestJS: Zero to Hero - Modern TypeScript back-end development",
    place: "Platzi",
    hours: "6.5 ",
  },
  {
    id: "cert-6",
    date: "01/2019",
    title: "Angular: real time applications with Sockets and REST",
    place: "Udemy",
    hours: "8 ",
  },
  {
    id: "cert-7",
    date: "11/2018",
    title: "TypeScript",
    place: "Udemy",
    hours: "6.5 ",
  },
  {
    id: "cert-8",
    date: "11/2018",
    title: "Node: from 0 to expert",
    place: "Udemy",
    hours: "11.5 ",
  },
  {
    id: "cert-9",
    date: "08/2018",
    title: "Git + GitHub",
    place: "Udemy",
    hours: "7 ",
  },
];

const honorsAndAwardsData = [
  {
    id: "award-1",
    date: "10/2017",
    titleId: "page.curriculum.body.honorsAndAwards.award",
    title: "",
    titleEdited: false,
    place: "Hackaton",
    textId: "page.curriculum.body.honorsAndAwards.award1",
    text: "",
    textEdited: false,
  },
  {
    id: "award-2",
    date: "03/2017",
    titleId: "page.curriculum.body.honorsAndAwards.award",
    title: "",
    titleEdited: false,
    place: "Hack for good",
    textId: "page.curriculum.body.honorsAndAwards.award2",
    text: "",
    textEdited: false,
  },
];

const otherInfoData = [
  {
    id: "info-1",
    textId: "page.curriculum.body.otherInfo.text",
    text: "",
    textEdited: false,
  },
];

export {
  sectionsData,
  experiencesData,
  educationsData,
  certificationsData,
  otherInfoData,
  honorsAndAwardsData,
};
