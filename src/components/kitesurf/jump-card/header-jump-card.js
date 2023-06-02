import { FormattedMessage } from "react-intl";
import classes from "./header-jump-card.module.css";
import { useTools } from "@/hooks/useTools";

const HeaderJumpCard = ({ jump, onShowMore }) => {
  const { isMobile } = useTools();
  const { hangtime } = jump.texts.find(
    (object) => Object.keys(object)[0] === "hangtime"
  );
  const { spot } = jump.texts.find(
    (object) => Object.keys(object)[0] === "spot"
  );
  const { date } = jump.texts.find(
    (object) => Object.keys(object)[0] === "date"
  );

  return (
    <h3
      className={`${classes.bajorrelieve} webKitFillAvailable flex ml-4 justify-between sm:justify-between items-center text-center sm:text-end font-normal text-gray-300`}
    >
      <span className="flex justify-between w-56">
        {hangtime}{" "}
        <span className="tracking-xxs">
          <FormattedMessage id="seconds" />
        </span>
      </span>
      {/* {jump.youtubeEmbedId && (
        <PlayCircleIcon className="absolute left-4 sm:left-1/2 sm:-translate-x-12 w-6 h-6 text-gray-500 self-center ml-2" />
      )} */}
      <div>
        <span
          className={`${classes.bajorrelieve} hidden tracking-sm sm:block text-gray-300`}
        >
          {date}
        </span>
        <span
          className={`${classes.bajorrelieve} hidden tracking-sm sm:block text-gray-300`}
        >
          {spot}
        </span>
      </div>
      {isMobile && (
        <button
          type="button"
          className="absolute right-4 rounded-full bg-gray-600 px-2.5 py-1 text-lg font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300"
          onClick={onShowMore}
        >
          <FormattedMessage id="more" />
        </button>
      )}
    </h3>
  );
};

export default HeaderJumpCard;
