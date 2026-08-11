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

// The CV content (experience, education, certifications, awards, other info)
// now lives in a single source of truth: `src/data/cv.data.ts`. This file
// keeps only the structural list of sections (which component renders each,
// and its generic i18n title label).

export { sectionsData };
