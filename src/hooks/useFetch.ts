import { useIntl } from "react-intl";

interface FetchResponse<T> {
  data: T | null;
  errors: string[] | null;
}

const useFetch = (url: string) => {
  const intl = useIntl();
  const somethingWrongError = intl.formatMessage({ id: "somethingWrong" });

  async function get<T = unknown>(endpoint = "", options?: RequestInit): Promise<FetchResponse<T>> {
    const toFetch = fetch(url + endpoint, {
      headers: getHeaders(),
      ...options,
    });

    return await doFetch<T>(toFetch);
  }

  const post = async <T = unknown>(body: Record<string, unknown>, endpoint = "", options?: RequestInit): Promise<FetchResponse<T>> => {
    const toFetch = fetch(`${url}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: getHeaders(),
      ...options,
    });

    return await doFetch<T>(toFetch);
  };

  const doFetch = async <T>(toFetch: Promise<Response>): Promise<FetchResponse<T>> => {
    try {
      const res = await toFetch;
      const json = await res.json();

      return res.ok
        ? { data: (json.data || json) as T, errors: null }
        : checkError(json);
    } catch (error) {
      return checkError(error);
    }
  };

  const getHeaders = (): HeadersInit => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  };

  const checkError = (json: unknown): FetchResponse<never> => {
    const errors: string[] = [];
    if (typeof json === "string") {
      errors.push(json);
    } else if (json && typeof json === "object" && "error" in json) {
      const err = (json as { error: unknown }).error;
      if (typeof err === "string") {
        errors.push(err);
      } else if (Array.isArray(err)) {
        errors.push(...err.map(String));
      }
    } else if (Array.isArray(json)) {
      errors.push(...json.map(String));
    } else {
      errors.push(somethingWrongError);
    }

    return { errors, data: null };
  };

  return { get, post };
};

export default useFetch;
