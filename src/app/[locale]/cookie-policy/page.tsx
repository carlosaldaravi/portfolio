import CookiePolicyContent from "./cookie-policy-content";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = pageMetadata({
  titleSuffix: (messages) => messages["page.cookiePolicy"] || "Cookie Policy",
  descriptionKey: "page.cookiePolicy.meta",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
