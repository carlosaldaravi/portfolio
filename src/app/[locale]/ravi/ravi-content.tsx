"use client";

import Link from "next/link";
import LegalSections from "@/components/ravi/legal-sections";
import { FormattedMessage, useIntl } from "react-intl";
import { localePath } from "@/lib/i18n";

export default function RaviContent() {
  const { locale } = useIntl();
  return (
    <LegalSections titleKey="page.ravi" sectionKeys={["page.ravi.about", "page.ravi.gmail"]}>
      <p className="my-8 text-xl underline">
        <Link href={localePath(locale, "/ravi/privacy")}>
          <FormattedMessage id="page.ravi.privacyLink" />
        </Link>
      </p>
    </LegalSections>
  );
}
