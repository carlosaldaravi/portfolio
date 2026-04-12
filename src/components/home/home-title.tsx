import { FormattedMessage } from "react-intl";

const HomeTitle = () => {
  return (
    <div className="mx-auto min-w-lg">
      <h1
        className={`indexTitle font-bold tracking-tight ml-6 sm:ml-14 text-center`}
      >
        <span
          className={`home__title__name uppercase block font-extralight tracking-wide`}
        >
          Carlos
        </span>
        <span
          className={`home__title__surname uppercase block font-extralight text-2xl sm:text-5xl tracking-wider mt-4`}
        >
          Aldaravi
        </span>
      </h1>
      <p
        className={`home__title__description mt-4 sm:mt-10 text-lg sm:text-2xl text-gray-400 font-extralight text-center`}
      >
        <FormattedMessage id="page.home.description" />
      </p>
    </div>
  );
};

export default HomeTitle;
