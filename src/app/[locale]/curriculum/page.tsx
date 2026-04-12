import type { Metadata } from "next";
import CurriculumContent from "./curriculum-content";

interface PageParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;

  const description = "Curriculum Vitae de Carlos Aldaravi. Descarga o edita mi CV online.";
  const title = "Carlos Aldaravi - CV";

  return {
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
}

export default function CurriculumPage() {
  return <CurriculumContent />;
}
