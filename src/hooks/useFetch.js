const useFetch = (url) => {
  async function get(endpoint = "", options) {
    const toFetch = fetch(url + endpoint, {
      headers: getHeaders(),
      ...options,
    });

    return await doFetch(toFetch);
  }

  const doFetch = async (toFetch) => {
    try {
      const res = await toFetch;
      const json = await res.json();

      return res.ok ? { data: json.data || json, errors: null } : checkError(json);
    } catch (error) {
      return checkError(error);
    }
  };

  const getHeaders = () => {
    return {
      "Content-Type": "application/json",
    };
  };

  const checkError = async (json) => {
    let errors = [];
    console.log('json: ', json);
    if (typeof json === "string") {
      errors.push(json);
    } else if (json.error.length) {
      errors = [json.error];
    } else if (typeof json.error === "string") {
      errors.push(json.error);
    } else if (Array.isArray(json)) {
      errors = json;
    } else {
      errors.push("Something went wrong");
    }

    return { errors, data: null };
  };

  return { get };
};

export default useFetch;
