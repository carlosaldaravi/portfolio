import { FormattedMessage } from "react-intl";

const HomeTitle = () => {
  return (
    <div className="mx-auto min-w-lg">
      <h2
        className={`indexTitle text-3xl font-bold tracking-tight text-white sm:text-4xl ml-6 sm:ml-14`}
      >
        <span
          className={`home__title__name uppercase block font-extralight text-5xl sm:text-8xl tracking-wide`}
        >
          Carlos
        </span>
        <span
          className={`home__title__surname uppercase block font-extralight text-2xl sm:text-5xl tracking-wider mt-4`}
        >
          Aldaravi
        </span>
      </h2>
      <p
        className={`home__title__description mt-4 sm:mt-10 text-lg sm:text-2xl text-gray-400 font-extralight`}
      >
        <FormattedMessage id="page.home.description" />
      </p>
    </div>
  );
};

export default HomeTitle;
