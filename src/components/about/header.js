import Image from "next/image";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useTools } from "../../hooks/useTools";
import classes from "./header.module.css";

const AboutHeader = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [originalDescription, setOriginalDescription] = useState("");
  const [switcherDescription, setSwitcherDescription] = useState("");

  const intl = useIntl();
  const { isMobile } = useTools();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDescription((prevDescription) =>
        prevDescription === originalDescription
          ? switcherDescription
          : originalDescription
      );
    }, 6000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);

  useEffect(() => {
    if (intl) {
      const titleUpdated = intl.formatMessage({ id: "page.about.title" });
      const descriptionUpdated = intl.formatMessage({
        id: "page.about.description",
      });
      const descriptionSwitcher = intl.formatMessage({
        id: "page.about.descriptionSwitcher",
      });

      setTitle(titleUpdated);
      setDescription(descriptionUpdated);
      setOriginalDescription(descriptionUpdated);
      setSwitcherDescription(descriptionSwitcher);
    }
  }, [intl]);

  return (
    <div className={`${classes.wrapper} about__wrapper__header mx-auto`}>
      <div className="header__title px-4 sm:ml-12 sm:mt-12 self-center sm:self-start">
        <h2 className={`${classes.header}  text-4xl sm:text-7xl`}>
          <span className="header__title__text">{title}</span>
        </h2>
        {
          <h3
            className={`${classes.subTitle} header__description mt-6 sm:mt-14 text-xl sm:text-3xl flex gap-2`}
          >
            <span key={description} className="header__description__text">
              {description}
            </span>
          </h3>
        }
      </div>
      {!isMobile && (
        <div className={`${classes.right}`}>
          <Image
            src="/yo-dev.JPG"
            alt="me"
            width={200}
            height={200}
            className={`float-right translate-x-6 sm:translate-x-14 ${classes.imagen}`}
          />
        </div>
      )}
    </div>
  );
};

export default AboutHeader;
