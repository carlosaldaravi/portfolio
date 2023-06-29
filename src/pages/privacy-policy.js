import Page from "@/components/UI/page";
import Section from "@/components/UI/section";
import { FormattedMessage } from "react-intl";

const PrivacyPolicy = () => {
  return (
    <Page>
      <Section>
        <h1 className="my-12 text-center">
          <FormattedMessage id="page.privacyPolicy" />
        </h1>
        <div className="my-8">
          <h3>
            <FormattedMessage id="page.privacyPolicy.dataController.title" />
          </h3>
          <p className="text-xl sm:text-2xl">
            <FormattedMessage id="page.privacyPolicy.dataController" />
          </p>
        </div>
        <div className="my-8">
          <h3>
            <FormattedMessage id="page.privacyPolicy.dataCollectionUse.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.privacyPolicy.dataCollectionUse" />
          </p>
        </div>
        <div className="my-8">
          <h3>
            <FormattedMessage id="page.privacyPolicy.consent.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.privacyPolicy.consent" />
          </p>
        </div>
        <div className="my-8">
          <h3>
            <FormattedMessage id="page.privacyPolicy.userRights.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.privacyPolicy.userRights" />
          </p>
        </div>
        <div className="my-8">
          <h3>
            <FormattedMessage id="page.privacyPolicy.dataSecurity.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.privacyPolicy.dataSecurity" />
          </p>
        </div>
        <div className="my-8">
          <h3>
            <FormattedMessage id="page.privacyPolicy.changes.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.privacyPolicy.changes" />
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default PrivacyPolicy;
