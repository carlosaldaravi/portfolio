import { useState, useEffect, ChangeEvent, FormEvent, ReactNode } from "react";

export interface FormValues {
  [key: string]: string | boolean;
}

export interface FormErrors {
  [key: string]: ReactNode;
}

type ValidateFn = (values: FormValues) => FormErrors;

const useForm = (callback: () => void, validate: ValidateFn) => {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
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
