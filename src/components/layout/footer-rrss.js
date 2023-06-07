import RRSS from "@/components/UI/rrss";

const FooterRRSS = () => {
  const rrss = [
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
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/carlos-aldaravi/",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="min-w-sm min-h-[25px] tracking-xxs mr-12 font-semibold ">
        @carlosaldaravi
      </div>
      <RRSS rrssList={rrss} />
    </div>
  );
};

export default FooterRRSS;
