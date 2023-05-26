import Image from "next/image";
import { FormattedMessage } from "react-intl";
import classes from "./header.module.css";
import { useTools } from "../../hooks/useTools";

const AboutHeader = () => {
  const { isMobile } = useTools();

  return (
    <div className={`${classes.wrapper} mx-auto`}>
      <div className="px-4 sm:ml-12 sm:mt-12 self-center sm:self-start">
        <h2 className={`${classes.header} text-4xl sm:text-7xl`}>
          <FormattedMessage id="page.about.title" />
        </h2>
        <h3 className={`${classes.subTitle} mt-6 text-xl sm:text-3xl`}>
          <FormattedMessage id="page.about.description" />
        </h3>
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
