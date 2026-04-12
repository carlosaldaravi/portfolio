import type { Metadata } from "next";
import CurriculumContent from "./curriculum-content";

const description = "Curriculum Vitae de Carlos Aldaravi. Descarga o edita mi CV online.";
const title = "Carlos Aldaravi - CV";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function CurriculumPage() {
  return <CurriculumContent />;
}
