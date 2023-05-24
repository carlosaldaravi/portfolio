import { FormattedMessage } from "react-intl";
import classes from "./home.module.css";

const HomeTitle = () => {
  return (
    <div className="mx-auto w-2/3 min-w-lg">
      <h2
        className={`${classes.indexTitle} text-3xl font-bold tracking-tight text-white sm:text-4xl ml-6 sm:ml-14`}
      >
        <span
          className={`${classes.name} uppercase block font-extralight text-5xl sm:text-8xl tracking-wide`}
        >
          Carlos
        </span>
        <span
          className={`${classes.surname} uppercase block font-extralight text-2xl sm:text-5xl tracking-wider mt-4`}
        >
          Aldaravi
        </span>
      </h2>
      <p
        className={`${classes.description} mt-4 sm:mt-10 text-lg sm:text-2xl text-gray-400 font-extralight`}
      >
        <FormattedMessage id="page.home.description" />
      </p>
    </div>
  );
};

export default HomeTitle;
