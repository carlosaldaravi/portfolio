"use client";

import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import ThemeContext from "@/store/theme-context";
import { useCookieConsent } from "@/store/cookie-consent-context";
import { getBgColor, getTextColor } from "@/tools/theme";
import CookiePolicyLink from "./cookie-policy-link";

const buttonClass =
  "px-5 py-2 rounded border border-current text-sm sm:text-base font-semibold whitespace-nowrap";

const CookieConsentBanner = () => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const {
    consent,
    isBannerVisible,
    isSettingsOpen,
    acceptAll,
    rejectAll,
    savePreferences,
    closeSettings,
  } = useCookieConsent();

  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(
    consent?.analytics ?? false
  );

  const isOpen = isBannerVisible || isSettingsOpen;

  useEffect(() => {
    if (isOpen) {
      setAnalyticsChecked(consent?.analytics ?? false);
    }
  }, [isOpen, consent?.analytics]);

  if (!isOpen) return null;

  const expanded = showDetails || isSettingsOpen;

  const handleSave = () => {
    savePreferences(analyticsChecked);
    setShowDetails(false);
  };

  const handleClose = () => {
    setShowDetails(false);
    closeSettings();
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-gray-500 p-6 sm:p-8 ${getBgColor(
        theme
      )} ${getTextColor(theme)}`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <p className="text-base sm:text-xl font-extralight">
          <FormattedMessage
            id="cookieConsent.description"
            values={{
              cookiePolicyLink: (
                <CookiePolicyLink key="cookie-policy-link">
                  <FormattedMessage id="cookieConsent.policyLinkText" />
                </CookiePolicyLink>
              ),
            }}
          />
        </p>

        {expanded && (
          <div className="flex flex-col gap-3 border-t border-gray-500 pt-4">
            <label className="flex items-center gap-3 opacity-70">
              <input type="checkbox" checked disabled />
              <span className="text-sm sm:text-base">
                <FormattedMessage id="cookieConsent.necessary" />
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analyticsChecked}
                onChange={(e) => setAnalyticsChecked(e.target.checked)}
              />
              <span className="text-sm sm:text-base">
                <FormattedMessage id="cookieConsent.analytics" />
              </span>
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-end">
          {isSettingsOpen && (
            <button onClick={handleClose} className={buttonClass}>
              <FormattedMessage id="cookieConsent.close" />
            </button>
          )}
          {!expanded && (
            <button onClick={() => setShowDetails(true)} className={buttonClass}>
              <FormattedMessage id="cookieConsent.customize" />
            </button>
          )}
          <button onClick={rejectAll} className={buttonClass}>
            <FormattedMessage id="cookieConsent.rejectAll" />
          </button>
          {expanded ? (
            <button onClick={handleSave} className={buttonClass}>
              <FormattedMessage id="cookieConsent.savePreferences" />
            </button>
          ) : (
            <button onClick={acceptAll} className={buttonClass}>
              <FormattedMessage id="cookieConsent.acceptAll" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
