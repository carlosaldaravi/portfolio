import { FormattedMessage } from "react-intl";

const validateForm = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = <FormattedMessage id="page.contact.form.name.required" />;
  } else if (values.name.length < 3) {
    errors.name = <FormattedMessage id="page.contact.form.name.length" />;
  }

  if (!values.email) {
    errors.email = <FormattedMessage id="page.contact.form.email.required" />;
  } else {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(values.email)) {
      errors.email = <FormattedMessage id="page.contact.form.email.valid" />;
    }
  }

  if (!values.message) {
    errors.message = (
      <FormattedMessage id="page.contact.form.message.required" />
    );
  } else if (values.message.length < 10) {
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
