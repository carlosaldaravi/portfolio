import { useMemo } from "react";
import { AnalyticsBrowser } from "@segment/analytics-next";
import { SEGMENT_KEY } from "@/env/constants";
import { useCookieConsent } from "@/store/cookie-consent-context";

let analyticsInstance: AnalyticsBrowser | null = null;

const getAnalytics = () => {
  if (!analyticsInstance) {
    analyticsInstance = AnalyticsBrowser.load({ writeKey: SEGMENT_KEY });
  }
  return analyticsInstance;
};

const useTracker = () => {
  const { consent } = useCookieConsent();
  const analyticsEnabled = consent?.analytics === true;

  return useMemo(() => {
    const track = (event: string, payload: Record<string, unknown> = {}) => {
      try {
        if (process.env.NODE_ENV === "development") return;
        if (!analyticsEnabled) return;
        getAnalytics().track(event, payload);
      } catch (error) {
        console.log("Error while tracking: ", error);
      }
    };

    const page = (event: string) => {
      try {
        if (process.env.NODE_ENV === "development") return;
        if (!analyticsEnabled) return;
        getAnalytics().page(event);
      } catch (error) {
        console.log("Error while tracking: ", error);
      }
    };

    return { track, page };
  }, [analyticsEnabled]);
};

export default useTracker;
