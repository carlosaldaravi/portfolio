import { createContext, ReactNode, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { THEMES_TYPES, Theme } from "@/types/themes";

const COOKIE_NAME = "THEME";

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

  const changeThemeHandler = (nextTheme: Theme) => {
    if (
      Object.keys(THEMES_TYPES).some(
        (type) => THEMES_TYPES[type as keyof typeof THEMES_TYPES] === nextTheme
      )
    ) {
      setCookie(COOKIE_NAME, nextTheme);
      setTheme(nextTheme);
    }
  };

  useEffect(() => {
    const savedTheme = getCookie(COOKIE_NAME) as Theme | undefined;
    if (savedTheme) setTheme(savedTheme);
    else setTheme(THEMES_TYPES.dark);
  }, []);

  useEffect(() => {
    if (theme) document.body.className = theme;
  }, [theme]);

  const context: ThemeContextType = { theme, onChangeTheme: changeThemeHandler };

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
