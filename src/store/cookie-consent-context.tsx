"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";

const COOKIE_NAME = "cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function clearCookie(name: string) {
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const hostname = window.location.hostname;
  document.cookie = `${name}=; path=/; ${expire}`;
  document.cookie = `${name}=; path=/; domain=${hostname}; ${expire}`;
  document.cookie = `${name}=; path=/; domain=.${hostname}; ${expire}`;
}

function clearAnalyticsCookies() {
  const gaSuffix = process.env.NEXT_PUBLIC_ANALYTICS_ID?.replace(/^G-/, "");
  const cookieNames = [
    "_ga",
    "_gid",
    "ajs_anonymous_id",
    "ajs_user_id",
    "ajs_prior_session",
    "ajs_group_id",
    ...(gaSuffix ? [`_ga_${gaSuffix}`] : []),
  ];
  cookieNames.forEach(clearCookie);

  try {
    ["ajs_anonymous_id", "ajs_user_id", "ajs_prior_session", "ajs_group_id"].forEach(
      (key) => window.localStorage.removeItem(key)
    );
  } catch {
    // localStorage may be unavailable (e.g. private browsing); nothing to clean up then
  }
}

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  isBannerVisible: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (analytics: boolean) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: null,
  isBannerVisible: false,
  isSettingsOpen: false,
  acceptAll: () => {},
  rejectAll: () => {},
  savePreferences: () => {},
  openSettings: () => {},
  closeSettings: () => {},
});

export function CookieConsentContextProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const saved = getCookie(COOKIE_NAME);
    if (typeof saved === "string") {
      try {
        const parsed = JSON.parse(saved);
        setConsent({ necessary: true, analytics: Boolean(parsed.analytics) });
      } catch {
        setConsent(null);
      }
    }
    setHasLoaded(true);
  }, []);

  const persist = (next: CookieConsent) => {
    setCookie(COOKIE_NAME, JSON.stringify(next), { maxAge: COOKIE_MAX_AGE });
    if (!next.analytics) {
      clearAnalyticsCookies();
    }
    setConsent(next);
  };

  const context: CookieConsentContextType = {
    consent,
    isBannerVisible: hasLoaded && consent === null,
    isSettingsOpen,
    acceptAll: () => persist({ necessary: true, analytics: true }),
    rejectAll: () => persist({ necessary: true, analytics: false }),
    savePreferences: (analytics: boolean) => {
      persist({ necessary: true, analytics });
      setIsSettingsOpen(false);
    },
    openSettings: () => setIsSettingsOpen(true),
    closeSettings: () => setIsSettingsOpen(false),
  };

  return (
    <CookieConsentContext.Provider value={context}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export default CookieConsentContext;
