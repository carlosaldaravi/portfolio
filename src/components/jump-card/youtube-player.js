import { FormattedMessage } from "react-intl";
import YoutubeEmbed from "../youtube-embed";
import SVG from "../svg";

const YoutubePlayer = ({jump, onBack}) => {
  const { hangtime } = jump.texts.find(
    (object) => Object.keys(object)[0] === "hangtime"
  );

  return (
    <div className={`rounded-xl webKitFillAvailable`}>
      <div
        className={`flex justify-between px-8 text-center text-xl sm:text-2xl bg-gray-500 tracking-xxs cursor-pointer animate-appear items-center ${
          jump.best ? "text-yellow-300" : "text-gray-100"
        }`}
        onClick={onBack}
      >
        <SVG type="backArrow" />
        {hangtime} <FormattedMessage id="seconds" />
      </div>
      <YoutubeEmbed
        embedId={jump.youtubeEmbedId}
        title={hangtime}
        className={"rounded-xl"}
      />
    </div>
  );
};

export default YoutubePlayer;
