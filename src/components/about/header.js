import Image from "next/image";
import { FormattedMessage } from "react-intl";
import classes from "./header.module.css";

const AboutHeader = () => {
  return (
    <div className={`${classes.wrapper} mx-auto`}>
      <div className="ml-12 mt-12">
        <div className={`${classes.header} text-2xl sm:text-4xl`}>
          <FormattedMessage id="page.about.title" />
        </div>
      </div>
      <div className={`${classes.right}`}>
        <Image
          src="/yo-dev.JPG"
          alt=""
          width={200}
          height={200}
          className={`float-right translate-x-6 sm:translate-x-14 ${classes.imagen}`}
        />
      </div>
    </div>
  );
};

export default AboutHeader;
