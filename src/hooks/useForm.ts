import { useState, ChangeEvent, FormEvent, ReactNode } from "react";

export interface FormValues {
  [key: string]: string | boolean;
}

export interface FormErrors {
  [key: string]: ReactNode;
}

type ValidateFn = (values: FormValues) => FormErrors;

const useForm = (onValid: () => void, validate: ValidateFn) => {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    // Submitting is a direct consequence of a valid form, not something to
    // rediscover in an effect once `errors` happens to settle empty.
    if (Object.keys(validationErrors).length === 0) onValid();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target;
    const isCheckbox = target instanceof HTMLInputElement && target.type === "checkbox";
    const value = isCheckbox ? (target as HTMLInputElement).checked : target.value;
    setValues((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };

  const clearValues = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    clearValues,
    values,
    errors,
  };
};

export default useForm;
