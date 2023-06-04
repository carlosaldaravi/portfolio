import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";

const ThemeContext = createContext({
  theme: null,
});

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(ThemeContext.theme);

  const changeThemeHandler = (nextTheme) => {
    if (nextTheme === "dark" || nextTheme === "light") {
      setCookie("THEME", nextTheme);
      setTheme(nextTheme);
    }
  };

  useEffect(() => {
    const savedThem = getCookie("THEME");
    if (savedThem) setTheme(savedThem);
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
