import { FormattedMessage } from "react-intl";
import YoutubeEmbed from "@/components/youtube-embed";
import SVG from "@/components/svg";
import { SVG_TYPES } from "@/types/svg";

const BackSideCar = ({ jump, onBack }) => {
  const { hangtime } = jump.texts.find(
    (object) => Object.keys(object)[0] === "hangtime"
  );

  return (
    <div className={`w-full z-10`}>
      <div
        className={`flex justify-between px-8 text-center text-3xl font-semibold bg-gray-500 tracking-xxs animate-appear items-center rounded-t-xl ${
          jump.best ? "text-yellow-300" : "text-gray-100"
        }`}
      >
        <span onClick={onBack} onTouchStart={onBack}>
          <SVG type={SVG_TYPES.backArrow} />
        </span>
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

export default BackSideCar;
