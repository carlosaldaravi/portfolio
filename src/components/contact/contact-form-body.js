import Link from "next/link";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { FORMSPARK_URL } from "@/env/constants";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";
import Input from "@/components/UI/input";
import useForm from "@/hooks/useForm";
import validate from "@/tools/validateForm";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";

const ContactFormBody = () => {
  const [responseError, setResponseError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { post } = useFetch(FORMSPARK_URL);
  const { values, errors, handleChange, handleSubmit, clearValues } = useForm(
    submit,
    validate
  );

  const intl = useIntl();
  const name = intl.formatMessage({ id: "page.contact.name" });
  const email = intl.formatMessage({ id: "page.contact.email" });
  const message = intl.formatMessage({ id: "page.contact.message" });
  const send = intl.formatMessage({ id: "page.contact.send" });
  const privacyPolicy = intl.formatMessage({ id: "page.privacyPolicy" });
  const legalNotice = intl.formatMessage({ id: "page.legalNotice" });

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
      }, 3000);
    }
    if (errors) {
      setIsFormSubmitted(false);
      setResponseError(errors[0]);
      setTimeout(() => {
        setResponseError("");
      }, 7000);
    }
    setIsLoading(false);
  }

  return (
    <div className={`grid sm:grid-cols-2 p-6`}>
      <div className="mx-auto hidden sm:block">
        <h3 className="text-center">
          <FormattedMessage id="page.contact.description" />
        </h3>
        <Image
          src="/yo-contact.png"
          alt="img"
          width={600}
          height={800}
          className="p-6 w-full"
        />
      </div>
      <div className="sm:ml-4 lg:ml-0 mx-auto w-full">
        <form onSubmit={handleSubmit} noValidate className="w-full">
          <Input
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            type="text"
            placeholder={name}
            className={"input-contact"}
            required={true}
          />
          {errors.name && (
            <p className="italic text-red-500 text-xl">{errors.name}</p>
          )}
          <Input
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            type="email"
            placeholder={email}
            className={"input-contact"}
            required={true}
          />
          {errors.email && (
            <p className="italic text-red-500 text-xl">{errors.email}</p>
          )}
          <textarea
            name="message"
            value={values.message || ""}
            onChange={handleChange}
            className="input-contact font-semibold text-xl sm:text-2xl mt-2 h-64"
            placeholder={message}
            required
          />
          {errors.message && (
            <p className="italic text-red-500 text-xl">{errors.message}</p>
          )}

          <div className="mt-4">
            <label htmlFor="privacy">
              <input
                id="privacy"
                name="privacy"
                checked={values.privacy || false}
                onChange={handleChange}
                aria-describedby="privacy"
                type="checkbox"
                className="mr-2"
                required={true}
              />
              <FormattedMessage
                id="page.contact.privacy"
                values={{
                  privacyPolicy: (
                    <Link href="/privacy-policy">
                      <span className="font-bold lowercase">
                        {privacyPolicy}
                      </span>
                    </Link>
                  ),
                  legalNotice: (
                    <Link href="/legal-notice">
                      <span className="font-semibold lowercase">
                        {legalNotice}
                      </span>
                    </Link>
                  ),
                }}
              />
            </label>
          </div>
          {errors.privacy && (
            <p className="italic text-red-500 text-xl">
              {errors.privacy}
            </p>
          )}
          <div className="my-6 text-center">
            <button type="submit" className="uppercase text-2xl tracking-xxs">
              {!isLoading && send}
              {isLoading && <ArrowPathIcon className="h-8 w-8 animate-spin" />}
            </button>
          </div>
          {responseError && (
            <p className="animate-appear-1 italic text-red-500 text-xl text-center">
              {responseError}
            </p>
          )}
          {isFormSubmitted && (
            <p className="animate-appear-1 italic text-green-500 text-xl flex justify-center items-center">
              <span>
                <CheckIcon className="h-10 w-10" />
              </span>
              <FormattedMessage id="formSubmitted" />
            </p>
          )}
          <input
            type="checkbox"
            name="_honeypot"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactFormBody;
