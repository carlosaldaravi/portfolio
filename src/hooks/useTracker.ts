import { useMemo } from "react";
import { sendEvent } from "@/lib/gtag";
import { useCookieConsent } from "@/store/cookie-consent-context";

/**
 * Sends the site's custom interactions to GA4.
 *
 * Page views are not sent from here: GA4 measures them on its own from the
 * `config` call in `components/analytics.tsx` plus its enhanced measurement of
 * history changes, so emitting them again would double-count every visit.
 */
const useTracker = () => {
  const { consent } = useCookieConsent();
  const analyticsEnabled = consent?.analytics === true;

  return useMemo(() => {
    const track = (event: string, payload: Record<string, unknown> = {}) => {
      if (process.env.NODE_ENV === "development") return;
      if (!analyticsEnabled) return;
      sendEvent(event, payload);
    };

    return { track };
  }, [analyticsEnabled]);
};

export default useTracker;
