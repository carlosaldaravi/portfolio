import { FormattedMessage } from "react-intl";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import classes from "./header-jump-card.module.css";

const HeaderJumpCard = ({ jump }) => {
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
      className={`${classes.bajorrelieve} webKitFillAvailable flex justify-center sm:justify-between text-xl sm:text-2xl items-center text-center sm:text-end font-normal text-gray-300`}
    >
      {hangtime} <FormattedMessage id="seconds" />
      {jump.youtubeEmbedId && (
        <PlayCircleIcon className="absolute left-4 sm:left-1/2 sm:-translate-x-12 w-6 h-6 text-gray-500 self-center ml-2" />
      )}
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
    </h3>
  );
};

export default HeaderJumpCard;
