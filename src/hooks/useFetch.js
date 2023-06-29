import { useIntl } from "react-intl";

const useFetch = (url) => {
  const intl = useIntl();
  const somethingWrongError = intl.formatMessage({ id: "somethingWrong" });

  async function get(endpoint = "", options) {
    const toFetch = fetch(url + endpoint, {
      headers: getHeaders(),
      ...options,
    });

    return await doFetch(toFetch);
  }

  const post = async (body, endpoint = "", options) => {
    const toFetch = fetch(`${url}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: getHeaders(),
      ...options,
    });

    return await doFetch(toFetch);
  };

  const doFetch = async (toFetch) => {
    try {
      const res = await toFetch;
      const json = await res.json();

      return res.ok
        ? { data: json.data || json, errors: null }
        : checkError(json);
    } catch (error) {
      return checkError(error);
    }
  };

  const getHeaders = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  };

  const checkError = async (json) => {
    let errors = [];
    if (typeof json === "string") {
      errors.push(json);
    } else if (json.error && json.error.length) {
      errors = [json.error];
    } else if (typeof json.error === "string") {
      errors.push(json.error);
    } else if (Array.isArray(json)) {
      errors = json;
    } else {
      errors.push(somethingWrongError);
    }

    return { errors, data: null };
  };

  return { get, post };
};

export default useFetch;
