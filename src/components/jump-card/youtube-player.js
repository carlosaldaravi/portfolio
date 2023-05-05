import { FormattedMessage } from "react-intl";
import YoutubeEmbed from "../youtube-embed";
import SVG from "../svg";

const YoutubePlayer = ({jump, onBack}) => {
  return (
    <div className={`rounded-xl webKitFillAvailable`}>
      <div
        className={`flex justify-between px-8 text-center bg-gray-500 tracking-xxs cursor-pointer animate-appear ${
          jump.best ? "text-yellow-300" : "text-gray-100"
        }`}
        onClick={onBack}
      >
        <SVG type="backArrow" />
        {jump.hangtime} <FormattedMessage id="seconds" />
      </div>
      <YoutubeEmbed
        embedId={jump.youtubeEmbedId}
        title={jump.hangtime}
        className={"rounded-xl"}
      />
    </div>
  );
};

export default YoutubePlayer;
