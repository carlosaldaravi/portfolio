import { useContext, useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import ThemeContext from "@/store/theme-context";

const ToggleButton = () => {
  const [enabled, setEnabled] = useState(true);
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const onChangeHandler = (e) => {
    setEnabled(e);
    e ? themeCtx.onChangeTheme("dark") : themeCtx.onChangeTheme("light");
  };

  useEffect(() => {
    if (theme === "light") setEnabled(false);
  }, [theme]);

  return (
    <Switch
      checked={enabled}
      onChange={(e) => onChangeHandler(e)}
      className={`self-center relative inline-flex h-9 w-16 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out
        ${enabled ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={`pointer-events-none relative inline-block h-7 w-7 transform rounded-full shadow transition duration-200 ease-in-out ${
          theme === "dark" ? "bg-dark-primary" : "bg-light-secondary"
        }
          ${enabled ? "translate-x-7" : "translate-x-0"}
          
        `}
      >
        {!enabled && (
          <span
            className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
        ${
          enabled
            ? "opacity-0 duration-100 ease-out"
            : "opacity-100 duration-200 ease-in"
        }
        `}
            aria-hidden="true"
          >
            <SunIcon
              className={`h-10 w-10 text-gray-900 ${
                theme === "dark" ? "text-light-primary" : "text-dark-primary"
              }`}
            />
          </span>
        )}
        {enabled && (
          <span
            className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
            ${
              enabled
                ? "opacity-100 duration-200 ease-in"
                : "opacity-0 duration-100 ease-out"
            }
          `}
            aria-hidden="true"
          >
            <MoonIcon className="h-10 w-10 text-gray-50" />
          </span>
        )}
      </span>
    </Switch>
  );
};
export default ToggleButton;
