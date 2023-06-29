import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    const value = isCheckbox ? event.target.checked : event.target.value;
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: value,
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
