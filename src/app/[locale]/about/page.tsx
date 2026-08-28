import AboutContent from "./about-content";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = pageMetadata({
  titleSuffix: "About",
  descriptionKey: "page.about.meta",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
