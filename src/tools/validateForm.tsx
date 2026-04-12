import { FormattedMessage } from "react-intl";
import { FormValues, FormErrors } from "@/hooks/useForm";
import { FORM_VALIDATION } from "@/constants/ui";

const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name) {
    errors.name = <FormattedMessage id="page.contact.form.name.required" />;
  } else if (typeof values.name === "string" && values.name.length < FORM_VALIDATION.MIN_NAME_LENGTH) {
    errors.name = <FormattedMessage id="page.contact.form.name.length" />;
  }

  if (!values.email) {
    errors.email = <FormattedMessage id="page.contact.form.email.required" />;
  } else if (typeof values.email === "string") {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(values.email)) {
      errors.email = <FormattedMessage id="page.contact.form.email.valid" />;
    }
  }

  if (!values.message) {
    errors.message = (
      <FormattedMessage id="page.contact.form.message.required" />
    );
  } else if (typeof values.message === "string" && values.message.length < FORM_VALIDATION.MIN_MESSAGE_LENGTH) {
    errors.message = <FormattedMessage id="page.contact.form.message.length" />;
  }

  if (!values.privacy || values.privacy === "false") {
    errors.privacy = (
      <FormattedMessage id="page.contact.form.privacy.required" />
    );
  }

  return errors;
};

export default validateForm;
