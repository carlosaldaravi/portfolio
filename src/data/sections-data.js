import Experience from "@/components/curriculum/experience";
import Education from "@/components/curriculum/education";
import Certification from "@/components/curriculum/certification";
import HonorAndAward from "@/components/curriculum/honor-and-award";
import OtherInfo from "@/components/curriculum/other-info";

const sectionsData = [
  {
    id: "section-experience",
    titleId: "page.developer.experience",
    Component: Experience,
  },
  {
    id: "section-education",
    titleId: "page.curriculum.body.education.title",
    Component: Education,
  },
  {
    id: "section-certifications",
    titleId: "page.curriculum.body.certifications",
    Component: Certification,
  },
  {
    id: "section-honorsAndAwards",
    titleId: "page.curriculum.body.honorsAndAwards.title",
    Component: HonorAndAward,
  },
  {
    id: "section-otherInfo",
    titleId: "page.curriculum.body.otherInfo.title",
    Component: OtherInfo,
  },
];

export default sectionsData;
