import { useTools } from "@/hooks/useTools";
import SVG from "@/components/svg";
import { SVG_TYPES } from "@/types/svg";

interface YoutubeIconProps {
  onPlay: () => void;
}

const YoutubeIcon = ({ onPlay }: YoutubeIconProps) => {
  const { isMobile } = useTools();

  return (
    <div
      className={`absolute left-5 sm:left-14 cursor-pointer z-30 ${
        !isMobile ? "clickHere" : "animate-bounce"
      }`}
      onClick={onPlay}
      onTouchStart={onPlay}
    >
      <SVG type={SVG_TYPES.youtube} />
    </div>
  );
};

export default YoutubeIcon;
