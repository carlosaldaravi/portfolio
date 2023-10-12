import Page from "@/components/UI/page";
import Section from "@/components/UI/section";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";

const PrivacyPolicy = () => {
  const tracker = useTracker();

  useEffect(() => {
    tracker.page(TRACKING_TYPES.page.legalNotice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
