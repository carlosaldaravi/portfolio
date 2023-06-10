import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { THEMES_TYPES } from "@/types/themes";

const COOKIE_NAME = "THEME";

const ThemeContext = createContext({
  theme: null,
});

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(ThemeContext.theme);

  const changeThemeHandler = (nextTheme) => {
    if (
      Object.keys(THEMES_TYPES).some((type) => THEMES_TYPES[type] === nextTheme)
    ) {
      setCookie(COOKIE_NAME, nextTheme);
      setTheme(nextTheme);
    }
  };

  useEffect(() => {
    const savedThem = getCookie(COOKIE_NAME);
    if (savedThem) setTheme(savedThem);
    else setTheme(THEMES_TYPES.dark);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const context = { theme, onChangeTheme: changeThemeHandler };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
