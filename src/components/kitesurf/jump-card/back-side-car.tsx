import { FormattedMessage } from "react-intl";
import YoutubeEmbed from "@/components/youtube-embed";
import SVG from "@/components/svg";
import { SVG_TYPES } from "@/types/svg";
import { Jump, JumpTextEntry } from "./jump-card";

interface BackSideCardProps {
  jump: Jump;
  onBack: () => void;
}

const BackSideCar = ({ jump, onBack }: BackSideCardProps) => {
  const { hangtime } = jump.texts.find(
    (object: JumpTextEntry) => Object.keys(object)[0] === "hangtime"
  ) as JumpTextEntry;

  return (
    <div className={`w-full z-10`}>
      <div
        className={`flex justify-between px-8 text-center text-3xl font-semibold bg-gray-500 tracking-xxs animate-appear items-center rounded-t-xl ${
          jump.best ? "text-yellow-300" : "text-gray-100"
        }`}
      >
        <button onClick={onBack} aria-label="Go back" className="bg-transparent border-none p-0 cursor-pointer">
          <SVG type={SVG_TYPES.backArrow} />
        </button>
        {hangtime} <FormattedMessage id="seconds" />
      </div>
      <YoutubeEmbed
        embedId={jump.youtubeEmbedId || ""}
        title={String(hangtime)}
        className={"rounded-xl"}
      />
    </div>
  );
};

export default BackSideCar;
