import { useMemo } from "react";
import { useIntl } from "react-intl";

interface FetchResponse<T> {
  data: T | null;
  errors: string[] | null;
}

const JSON_HEADERS: HeadersInit = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

/** Normalises whatever a failed request produced into a list of messages. */
function toErrors(payload: unknown, fallback: string): string[] {
  if (typeof payload === "string") return [payload];
  if (Array.isArray(payload)) return payload.map(String);
  if (payload && typeof payload === "object" && "error" in payload) {
    const error = (payload as { error: unknown }).error;
    if (typeof error === "string") return [error];
    if (Array.isArray(error)) return error.map(String);
  }
  return [fallback];
}

/**
 * Minimal JSON client bound to a base URL. Returns a stable object so callers
 * can list `get`/`post` in their effect dependencies.
 */
const useFetch = (url: string) => {
  const intl = useIntl();
  const somethingWrongError = intl.formatMessage({ id: "somethingWrong" });

  return useMemo(() => {
    const run = async <T>(request: Promise<Response>): Promise<FetchResponse<T>> => {
      try {
        const response = await request;
        const json = await response.json();

        return response.ok
          ? { data: (json.data || json) as T, errors: null }
          : { data: null, errors: toErrors(json, somethingWrongError) };
      } catch (error) {
        return { data: null, errors: toErrors(error, somethingWrongError) };
      }
    };

    const get = <T = unknown>(endpoint = "", options?: RequestInit) =>
      run<T>(fetch(`${url}${endpoint}`, { headers: JSON_HEADERS, ...options }));

    const post = <T = unknown>(
      body: Record<string, unknown>,
      endpoint = "",
      options?: RequestInit
    ) =>
      run<T>(
        fetch(`${url}${endpoint}`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: JSON_HEADERS,
          ...options,
        })
      );

    return { get, post };
  }, [url, somethingWrongError]);
};

export default useFetch;
