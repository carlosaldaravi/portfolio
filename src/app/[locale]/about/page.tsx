import type { Metadata } from "next";
import AboutContent from "./about-content";

interface PageParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;

  const description = messages["page.about.description"] || "";
  const title = "Carlos Aldaravi - About";

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

export default function AboutPage() {
  return <AboutContent />;
}
