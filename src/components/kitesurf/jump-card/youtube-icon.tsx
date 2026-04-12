import { useTools } from "@/hooks/useTools";
import SVG from "@/components/svg";
import { SVG_TYPES } from "@/types/svg";

interface YoutubeIconProps {
  onPlay: () => void;
}

const YoutubeIcon = ({ onPlay }: YoutubeIconProps) => {
  const { isMobile } = useTools();

  return (
    <button
      className={`absolute left-5 sm:left-14 cursor-pointer z-30 bg-transparent border-none p-0 ${
        !isMobile ? "clickHere" : "animate-bounce"
      }`}
      onClick={onPlay}
      aria-label="Play video"
    >
      <SVG type={SVG_TYPES.youtube} />
    </button>
  );
};

export default YoutubeIcon;
