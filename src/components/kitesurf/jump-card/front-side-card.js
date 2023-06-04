import { FormattedMessage } from "react-intl";

const FrontSideCard = ({ texts, index }) => {
  return (
    <div className="flex flex-col items-center animate-appear">
      {texts.map((object) => {
        const key = Object.keys(object)[0];
        return (
          <div
            className="flex w-full justify-between"
            key={`${object[key]} - ${index}`}
          >
            <span className="w-[40%] text-gray-400 tracking-xs uppercase self-center text-end mr-4 text-xs sm:text-xl sm:tracking-sm sm:mr-12 sm:w-96">
              <FormattedMessage id={key} />
            </span>
            <span
              className={`tracking-xxs sm:text-2xl text-gray-200 flex-grow-0 ${
                key === "hangtime" ? "font-bold text-[1.6rem]" : ""
              }`}
              style={{ whiteSpace: "nowrap", overflow: "hidden", width: "85%" }}
            >
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

export default FrontSideCard;
