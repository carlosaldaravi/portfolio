import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const CV_STORAGE_PREFIX = "cv:v1:";

/**
 * useState that persists to localStorage under `CV_STORAGE_PREFIX + key`, so
 * the "¡Hazlo tuyo!" edits survive a reload (the whole point of a CV you make
 * yours). Pass `key = null` to opt out of persistence (behaves like plain
 * useState) — used for structural state that isn't JSON-serializable.
 *
 * Hydration-safe: the initial render (server + first client render) uses the
 * default; the stored value is loaded in an effect after mount, so there is no
 * SSR/client mismatch. Saving only starts once the stored value has loaded, so
 * the default never clobbers a saved value.
 */
export function usePersistentState<T>(
  key: string | null,
  initial: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);
  const storageKey = key === null ? null : CV_STORAGE_PREFIX + key;

  useEffect(() => {
    /* The stored value is read after mount on purpose — see the hydration note
       above — so every setState in this effect is deliberate. */
    /* eslint-disable react-hooks/set-state-in-effect */
    if (storageKey === null) {
      setLoaded(true);
      return;
    }
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw !== null) setState(JSON.parse(raw) as T);
    } catch {
      /* ignore corrupt/unavailable storage */
    }
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [storageKey]);

  useEffect(() => {
    if (!loaded || storageKey === null) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      /* ignore quota/unavailable storage */
    }
  }, [loaded, storageKey, state]);

  return [state, setState];
}

/** Clears every persisted CV edit (used by the "reset" control). */
export function clearPersistedCv(): void {
  try {
    Object.keys(window.localStorage)
      .filter((k) => k.startsWith(CV_STORAGE_PREFIX))
      .forEach((k) => window.localStorage.removeItem(k));
  } catch {
    /* ignore */
  }
}
