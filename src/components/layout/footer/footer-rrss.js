import RRSS from "@/components/UI/rrss";
import { SVG_TYPES } from "@/types/svg";

const FooterRRSS = () => {
  const rrss = [
    {
      name: "Github",
      svg: SVG_TYPES.github,
      url: "https://github.com/carlosaldaravi",
    },
    {
      name: "LinkedIn",
      svg: SVG_TYPES.linkedin,
      url: "https://www.linkedin.com/in/carlos-aldaravi/",
    },
    {
      name: "Instagram",
      svg: SVG_TYPES.instagram,
      url: "https://www.instagram.com/carlosaldaravi/?hl=es",
    },
    {
      name: "Tiktok",
      svg: SVG_TYPES.tiktok,
      url: "https://www.tiktok.com/@carlosaldaravi",
    },
    {
      name: "youtubeHome",
      svg: SVG_TYPES.youtubeHome,
      url: "https://www.youtube.com/@CarlosAldaravi/videos",
    },
    {
      name: "Twitter",
      svg: SVG_TYPES.twitter,
      url: "https://twitter.com/carlosaldaravi",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <RRSS rrssList={rrss} />
    </div>
  );
};

export default FooterRRSS;
