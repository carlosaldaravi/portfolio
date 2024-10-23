import Experience from "@/components/curriculum/experience";
import Education from "@/components/curriculum/education";
import Certification from "@/components/curriculum/certification";
import HonorAndAward from "@/components/curriculum/honor-and-award";
import OtherInfo from "@/components/curriculum/other-info";

const sectionsData = [
  { id: "experience", Component: Experience },
  { id: "education", Component: Education },
  { id: "certification", Component: Certification },
  { id: "honorAndAward", Component: HonorAndAward },
  { id: "otherInfo", Component: OtherInfo },
];

export default sectionsData;
