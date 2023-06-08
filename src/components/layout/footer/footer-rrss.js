import RRSS from "@/components/UI/rrss";

const FooterRRSS = () => {
  const rrss = [
    {
      name: "Github",
      url: "https://github.com/carlosaldaravi",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/carlos-aldaravi/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/carlosaldaravi/?hl=es",
    },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com/@carlosaldaravi",
    },
    {
      name: "youtubeHome",
      url: "https://www.youtube.com/@CarlosAldaravi/videos",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/carlosaldaravi",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="tracking-xxs text-lg mr-24 font-bold">
        @carlosaldaravi
      </div>
      <RRSS rrssList={rrss} />
    </div>
  );
};

export default FooterRRSS;
