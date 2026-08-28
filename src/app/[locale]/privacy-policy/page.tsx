import PrivacyPolicyContent from "./privacy-policy-content";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = pageMetadata({
  titleSuffix: (messages) => messages["page.privacyPolicy"] || "Privacy Policy",
  descriptionKey: "page.privacyPolicy.meta",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
