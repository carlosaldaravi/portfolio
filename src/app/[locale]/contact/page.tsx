import ContactContent from "./contact-content";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = pageMetadata({
  titleSuffix: "Contact",
  descriptionKey: "page.contact.meta",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
