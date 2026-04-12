import { useEffect } from "react";
import useTracker from "./useTracker";

const usePageTracking = (pageName: string) => {
  const tracker = useTracker();
  useEffect(() => {
    tracker.page(pageName);
  }, [tracker, pageName]);
};

export default usePageTracking;
