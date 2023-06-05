import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import ThemeContext from "@/store/theme-context";

const FrontSideCard = ({ texts, index }) => {
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  return (
    <div className="flex flex-col items-center animate-appear">
      {texts.map((object) => {
        const key = Object.keys(object)[0];
        return (
          <div
            className="flex w-full justify-between"
            key={`${object[key]} - ${index}`}
          >
            <span className="w-[40%] tracking-xs uppercase self-end text-end mr-4 text-xs sm:text-xl  sm:mr-12 sm:w-96">
              <FormattedMessage id={key} />
            </span>
            <span
              className={`tracking-xxs sm:text-2xl flex-grow-0 ${
                key === "hangtime"
                  ? "font-bold text-[1.6rem] sm:font-black sm:text-4xl"
                  : "sm:font-semibold sm:text-3xl"
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
