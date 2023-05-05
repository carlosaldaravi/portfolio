import SVG from "../svg";

const YoutubeIcon = ({onPlay}) => {
  return (
    <div
      className="animate-appear absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer z-50"
      onClick={onPlay}
    >
      <SVG type="youtube" />
    </div>
  );
};

export default YoutubeIcon;
