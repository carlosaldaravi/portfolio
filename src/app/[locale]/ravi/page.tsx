import RaviContent from "./ravi-content";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = pageMetadata({
  titleSuffix: (messages) => messages["page.ravi"] || "Ravi",
  descriptionKey: "page.ravi.meta",
  path: "/ravi",
});

export default function RaviPage() {
  return <RaviContent />;
}
