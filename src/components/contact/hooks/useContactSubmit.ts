import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { FORMSPARK_URL } from "@/env/constants";
import { TIMEOUTS } from "@/constants/ui";

interface UseContactSubmitReturn {
  isLoading: boolean;
  isFormSubmitted: boolean;
  responseError: string;
  submit: () => Promise<void>;
}

const useContactSubmit = (
  values: Record<string, unknown>,
  clearValues: () => void
): UseContactSubmitReturn => {
  const [responseError, setResponseError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { post } = useFetch(FORMSPARK_URL);
  const feedbackTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  // The success/error notice hides itself on a timer; cancel it on unmount so
  // it can't fire against a component that is already gone.
  useEffect(() => () => clearTimeout(feedbackTimeout.current), []);

  const submit = useCallback(async () => {
    setIsLoading(true);
    const { data, errors } = await post({ ...values });
    clearTimeout(feedbackTimeout.current);

    if (data) {
      setIsFormSubmitted(true);
      setResponseError("");
      clearValues();
      feedbackTimeout.current = setTimeout(
        () => setIsFormSubmitted(false),
        TIMEOUTS.FORM_SUCCESS
      );
    }
    if (errors) {
      setIsFormSubmitted(false);
      setResponseError(errors[0]);
      feedbackTimeout.current = setTimeout(
        () => setResponseError(""),
        TIMEOUTS.FORM_ERROR
      );
    }
    setIsLoading(false);
  }, [post, values, clearValues]);

  return { isLoading, isFormSubmitted, responseError, submit };
};

export default useContactSubmit;
