import Link from "next/link";
import { ReactNode } from "react";

const CookiePolicyLink = ({ children }: { children: ReactNode }) => (
  <Link href="/cookie-policy" className="underline font-semibold">
    {children}
  </Link>
);

export default CookiePolicyLink;
