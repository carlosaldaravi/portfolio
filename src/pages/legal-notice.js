import Page from "@/components/UI/page";
import Section from "@/components/UI/section";
import { FormattedMessage } from "react-intl";

const PrivacyPolicy = () => {
  return (
    <Page>
      <Section>
        <h1 className="my-12 text-center">
          <FormattedMessage id="page.legalNotice" />
        </h1>
        <div className="my-8">
          <p className="text-xl sm:text-2xl text-center sm:text-start">
            <FormattedMessage id="page.legalNotice.text" />
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default PrivacyPolicy;
