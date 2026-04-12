import type { Metadata } from "next";
import ContactContent from "./contact-content";

interface PageParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const messages = locale === "en"
    ? (await import("@/lang/en.json")).default
    : (await import("@/lang/es.json")).default;

  const description = messages["page.contact.description"] || "";
  const title = "Carlos Aldaravi - Contact";

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

export default function ContactPage() {
  return <ContactContent />;
}
