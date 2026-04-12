"use client";

import Page from "@/components/UI/page";
import ContactForm from "@/components/contact/contact-form";
import usePageTracking from "@/hooks/usePageTracking";
import { TRACKING_TYPES } from "@/types/track";
import { FormattedMessage } from "react-intl";

export default function ContactContent() {
  usePageTracking(TRACKING_TYPES.page.contact);

  return (
    <Page>
      <h1 className="text-center my-8 sm:hidden">
        <FormattedMessage id="page.contact" />
      </h1>
      <ContactForm />
    </Page>
  );
}
