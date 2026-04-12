import Page from "@/components/UI/page";
import ContactForm from "@/components/contact/contact-form";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";

const Contact = () => {
  const tracker = useTracker();
  const intl = useIntl();
  const description = intl.formatMessage({ id: "page.contact.description" });
  const title = "Carlos Aldaravi - Contact";
  const url = "https://carlosaldaravi.com/contact";

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.contact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <h1 className="text-center my-8 sm:hidden">
        <FormattedMessage id="page.contact" />
      </h1>
      <ContactForm />
    </Page>
  );
};

export default Contact;
