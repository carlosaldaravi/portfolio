import { useState } from "react";
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

  async function submit() {
    setIsLoading(true);
    const { data, errors } = await post({
      ...values,
    });
    if (data) {
      setIsFormSubmitted(true);
      setResponseError("");
      clearValues();
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, TIMEOUTS.FORM_SUCCESS);
    }
    if (errors) {
      setIsFormSubmitted(false);
      setResponseError(errors[0]);
      setTimeout(() => {
        setResponseError("");
      }, TIMEOUTS.FORM_ERROR);
    }
    setIsLoading(false);
  }

  return { isLoading, isFormSubmitted, responseError, submit };
};

export default useContactSubmit;
