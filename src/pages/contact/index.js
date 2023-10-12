import Page from "@/components/UI/page";
import ContactForm from "@/components/contact/contact-form";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  const tracker = useTracker();

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.contact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <h1 className="text-center my-8 sm:hidden">
        <FormattedMessage id="page.contact" />
      </h1>
      <ContactForm />
    </Page>
  );
};

export default Contact;
