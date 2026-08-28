"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getCookie, setCookie } from "cookies-next";
import { THEMES_TYPES, Theme } from "@/types/themes";

const COOKIE_NAME = "THEME";

const isTheme = (value: unknown): value is Theme =>
  value === THEMES_TYPES.dark || value === THEMES_TYPES.light;

interface ThemeContextType {
  theme: Theme | null;
  onChangeTheme: (nextTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  onChangeTheme: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  const changeThemeHandler = useCallback((nextTheme: Theme) => {
    if (!isTheme(nextTheme)) return;
    setCookie(COOKIE_NAME, nextTheme);
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    // Read after mount on purpose: resolving the cookie during render would
    // make the server and the client disagree and break hydration.
    const saved = getCookie(COOKIE_NAME);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(isTheme(saved) ? saved : THEMES_TYPES.dark);
  }, []);

  useEffect(() => {
    if (theme) document.body.classList.add(theme);
    return () => {
      if (theme) document.body.classList.remove(theme);
    };
  }, [theme]);

  const context = useMemo<ThemeContextType>(
    () => ({ theme, onChangeTheme: changeThemeHandler }),
    [theme, changeThemeHandler]
  );

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}

/**
 * The active theme plus the `isDark` flag almost every consumer derives from
 * it. Preferred over `useContext(ThemeContext)` so the comparison against
 * `THEMES_TYPES.dark` lives in exactly one place.
 */
export function useTheme() {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  return { theme, isDark: theme === THEMES_TYPES.dark, onChangeTheme };
}

export default ThemeContext;
