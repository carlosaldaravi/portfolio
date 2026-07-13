"use client";

import Page from "@/components/UI/page";
import Section from "@/components/UI/section";
import usePageTracking from "@/hooks/usePageTracking";
import { TRACKING_TYPES } from "@/types/track";
import { useCookieConsent } from "@/store/cookie-consent-context";
import { FormattedMessage } from "react-intl";

export default function CookiePolicyContent() {
  usePageTracking(TRACKING_TYPES.page.cookiePolicy);
  const { openSettings } = useCookieConsent();

  return (
    <Page>
      <Section>
        <h1 className="my-12 text-center">
          <FormattedMessage id="page.cookiePolicy" />
        </h1>

        <div className="my-8">
          <h3>
            <FormattedMessage id="page.cookiePolicy.intro.title" />
          </h3>
          <p className="text-xl sm:text-2xl">
            <FormattedMessage id="page.cookiePolicy.intro" />
          </p>
        </div>

        <div className="my-8">
          <h3>
            <FormattedMessage id="page.cookiePolicy.necessary.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.cookiePolicy.necessary" />
          </p>
          <ul className="mt-4 list-disc pl-6">
            <li className="text-xl">
              <FormattedMessage id="page.cookiePolicy.necessary.item1" />
            </li>
            <li className="text-xl">
              <FormattedMessage id="page.cookiePolicy.necessary.item2" />
            </li>
            <li className="text-xl">
              <FormattedMessage id="page.cookiePolicy.necessary.item3" />
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h3>
            <FormattedMessage id="page.cookiePolicy.analytics.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.cookiePolicy.analytics" />
          </p>
          <ul className="mt-4 list-disc pl-6">
            <li className="text-xl">
              <FormattedMessage id="page.cookiePolicy.analytics.item1" />
            </li>
            <li className="text-xl">
              <FormattedMessage id="page.cookiePolicy.analytics.item2" />
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h3>
            <FormattedMessage id="page.cookiePolicy.manage.title" />
          </h3>
          <p className="text-xl">
            <FormattedMessage id="page.cookiePolicy.manage" />
          </p>
          <button
            onClick={openSettings}
            className="mt-4 px-5 py-2 rounded border border-current text-lg font-semibold"
          >
            <FormattedMessage id="page.cookiePolicy.manage.button" />
          </button>
        </div>
      </Section>
    </Page>
  );
}
