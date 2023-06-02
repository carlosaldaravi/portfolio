import { useTools } from "@/hooks/useTools";
import SVG from "@/components/svg";

const YoutubeIcon = ({ onPlay }) => {
  const { isMobile } = useTools();

  return (
    <div
      className={`absolute left-5 sm:left-14 cursor-pointer z-10 ${
        !isMobile && "clickHere"
      }`}
      onClick={onPlay}
    >
      <SVG type="youtube" />
    </div>
  );
};

export default YoutubeIcon;
