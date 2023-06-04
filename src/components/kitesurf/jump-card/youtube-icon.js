import { useTools } from "@/hooks/useTools";
import SVG from "@/components/svg";

const YoutubeIcon = ({ onPlay }) => {
  const { isMobile } = useTools();

  return (
    <div
      className={`absolute left-5 sm:left-14 cursor-pointer z-50 ${
        !isMobile && "clickHere"
      }`}
      onClick={onPlay}
      onTouchStart={onPlay}
    >
      <SVG type="youtube" />
    </div>
  );
};

export default YoutubeIcon;
