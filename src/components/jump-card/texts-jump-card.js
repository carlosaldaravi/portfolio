import { FormattedMessage } from "react-intl";

const TextsJumpCard = ({ texts, index }) => {
  return (
    <div className="flex flex-col items-center animate-appear">
      {texts.map((object) => {
        const key = Object.keys(object)[0];
        return (
          <div className="flex w-full" key={`${object[key]} - ${index}`}>
            <span className="text-gray-400 tracking-xs w-28 uppercase self-center text-end mr-4 text-xs sm:text-base sm:tracking-sm sm:mr-12 sm:w-36">
              <FormattedMessage id={key} />
            </span>
            <span className="tracking-xxs sm:text-lg text-gray-200">
              {object[key]}{" "}
              {key === "hangtime" && <FormattedMessage id="seconds" />}
              {key === "wind" && <FormattedMessage id="knots" />}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TextsJumpCard;
