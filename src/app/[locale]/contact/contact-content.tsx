"use client";

import Page from "@/components/UI/page";
import ContactForm from "@/components/contact/contact-form";
import { FormattedMessage } from "react-intl";

export default function ContactContent() {
  return (
    <Page>
      <h1 className="text-center my-8 sm:sr-only">
        <FormattedMessage id="page.contact" />
      </h1>
      <ContactForm />
    </Page>
  );
}
