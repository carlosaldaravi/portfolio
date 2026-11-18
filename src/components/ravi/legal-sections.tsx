"use client";

import Page from "@/components/UI/page";
import Section from "@/components/UI/section";
import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";

interface LegalSectionsProps {
  /** i18n key of the page title */
  titleKey: string;
  /** i18n key prefixes: each one renders `<key>.title` and `<key>` */
  sectionKeys: string[];
  children?: ReactNode;
}

/** A text-only page made of titled paragraphs, all from the i18n messages. */
export default function LegalSections({ titleKey, sectionKeys, children }: LegalSectionsProps) {
  return (
    <Page>
      <Section>
        <h1 className="my-12 text-center">
          <FormattedMessage id={titleKey} />
        </h1>
        {sectionKeys.map((key) => (
          <div className="my-8" key={key}>
            <h3>
              <FormattedMessage id={`${key}.title`} />
            </h3>
            <p className="text-xl">
              <FormattedMessage id={key} />
            </p>
          </div>
        ))}
        {children}
      </Section>
    </Page>
  );
}
