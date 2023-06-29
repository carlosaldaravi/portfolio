import Page from "@/components/UI/page";
import ContactForm from "@/components/contact/contact-form";
import { FormattedMessage } from "react-intl";

const Contact = () => {
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
