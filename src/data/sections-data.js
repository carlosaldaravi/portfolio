import Experience from "@/components/curriculum/experience";
import Education from "@/components/curriculum/education";
import Certification from "@/components/curriculum/certification";
import HonorAndAward from "@/components/curriculum/honor-and-award";
import OtherInfo from "@/components/curriculum/other-info";

const sectionsData = [
  { titleId: "page.developer.experience", Component: Experience },
  { titleId: "page.curriculum.body.education.title", Component: Education },
  { titleId: "page.curriculum.body.certifications", Component: Certification },
  {
    titleId: "page.curriculum.body.honorsAndAwards.title",
    Component: HonorAndAward,
  },
  { titleId: "page.curriculum.body.otherInfo.title", Component: OtherInfo },
];

export default sectionsData;
