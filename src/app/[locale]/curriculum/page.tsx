import CurriculumContent from "./curriculum-content";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = pageMetadata({
  titleSuffix: "CV",
  descriptionKey: "page.curriculum.meta",
  path: "/curriculum",
});

export default function CurriculumPage() {
  return <CurriculumContent />;
}
