import { useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TypeAnimation } from "react-type-animation";
import classes from "./header.module.css";

const AboutHeader = () => {
  const intl = useIntl();

  const { description, sequence } = useMemo(() => {
    const original = intl.formatMessage({ id: "page.about.description" });
    const switcher = intl.formatMessage({ id: "page.about.descriptionSwitcher" });
    return { description: original, sequence: [700, original, 3000, switcher] };
  }, [intl]);

  return (
    <div className={`${classes.wrapper} about__wrapper__header mx-auto`}>
      <div className="header__title pl-2 sm:ml-10 sm:mt-12 self-center sm:self-start">
        <h1 className={`${classes.header} text-4xl sm:text-5xl`}>
          <span className={`${classes.header__title__text}`}>
            <FormattedMessage id="page.about.title" />
          </span>
        </h1>
        {
          <p
            key={description}
            className={`${classes.description} mt-6 sm:mt-14 text-xl sm:text-3xl flex gap-2`}
          >
            <TypeAnimation
              className="text-2xl md:text-3xl"
              sequence={sequence}
              repeat={Infinity}
              cursor={true}
              speed={20}
              deletionSpeed={80}
            />
          </p>
        }
      </div>
    </div>
  );
};

export default AboutHeader;
