import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useTools } from "@/hooks/useTools";
import classes from "./header.module.css";

const AboutHeader = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [originalDescription, setOriginalDescription] = useState("");
  const [switcherDescription, setSwitcherDescription] = useState("");

  const intl = useIntl();
  const { isMobile } = useTools();

  const sequence = [700, originalDescription, 3000, switcherDescription];

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
      <div className="header__title pl-2 sm:ml-10 sm:mt-12 self-center sm:self-start">
        <h2 className={`${classes.header} `}>
          <span className={`${classes.header__title__text}`}>{title}</span>
        </h2>
        {
          <p
            key={description}
            className={`${classes.description} mt-6 sm:mt-14 text-xl sm:text-3xl flex gap-2`}
          >
            <TypeAnimation
              className="text-xl sm:text-3xl"
              sequence={sequence}
              repeat={Infinity}
              cursor={true}
              speed={20}
              deletionSpeed={80}
            />
          </p>
        }
      </div>
      {!isMobile && (
        <div className={`${classes.right}`}>
          <Image
            src="/yo-dev.png"
            alt="me"
            width={200}
            height={200}
            className={`float-right translate-x-6 bg-white sm:translate-x-14 ${classes.imagen}`}
          />
        </div>
      )}
    </div>
  );
};

export default AboutHeader;
