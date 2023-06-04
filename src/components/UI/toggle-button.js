import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ToggleButton = ({ onChangeTheme }) => {
  const [enabled, setEnabled] = useState(true);

  const onChangeHandler = (e) => {
    onChangeTheme(e);
    setEnabled(e);
  };

  useEffect(() => {
    const theme = getCookie("THEME");
    if (theme === "light") setEnabled(false);
  }, []);

  return (
    <Switch
      checked={enabled}
      onChange={(e) => onChangeHandler(e)}
      className={`self-center relative inline-flex h-9 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
        ${enabled ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={`pointer-events-none relative inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
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
            <SunIcon className="h-10 w-10 text-gray-900" />
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
            <MoonIcon className="h-10 w-10 text-black" />
          </span>
        )}
      </span>
    </Switch>
  );
};
export default ToggleButton;
