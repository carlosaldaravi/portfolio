import { useMemo } from "react";
import { SEGMENT_KEY } from "@/env/constants";
import { AnalyticsBrowser } from "@segment/analytics-next";

const useTracker = () => {
  const analytics = AnalyticsBrowser.load({
    writeKey: SEGMENT_KEY,
  });

  return useMemo(() => {
    const track = (event: string, payload: Record<string, unknown> = {}) => {
      try {
        if (process.env.NODE_ENV === "development") return;
        analytics.track(event, payload);
      } catch (error) {
        console.log("Error while tracking: ", error);
      }
    };

    const page = (event: string) => {
      try {
        if (process.env.NODE_ENV === "development") return;
        analytics.page(event);
      } catch (error) {
        console.log("Error while tracking: ", error);
      }
    };

    return { track, page };
  }, [analytics]);
};

export default useTracker;
