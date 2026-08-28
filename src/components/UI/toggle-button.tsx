import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import { useTheme } from "@/store/theme-context";
import { THEMES_TYPES } from "@/types/themes";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";

const ToggleButton = () => {
  const { theme, isDark, onChangeTheme } = useTheme();
  const tracker = useTracker();

  // The switch has no state of its own: it *is* the theme. Dark is the default
  // while the theme is still resolving (`theme === null`).
  const enabled = theme !== THEMES_TYPES.light;

  const onChangeHandler = (nextEnabled: boolean) => {
    tracker.track(
      nextEnabled
        ? TRACKING_TYPES.event.darkThemeClick
        : TRACKING_TYPES.event.lightThemeClick
    );
    onChangeTheme(nextEnabled ? THEMES_TYPES.dark : THEMES_TYPES.light);
  };

  return (
    <Switch
      checked={enabled}
      onChange={onChangeHandler}
      className={`self-center relative inline-flex h-9 w-16 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out
        ${enabled ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={`pointer-events-none relative inline-block h-7 w-7 transform rounded-full shadow transition duration-200 ease-in-out ${
          isDark ? "bg-dark-primary" : "bg-light-secondary"
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
                isDark
                  ? "text-light-primary"
                  : "text-dark-primary"
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
