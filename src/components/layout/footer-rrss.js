import SVG from "@/components/svg";

const FooterRRSS = () => {
  return (
    <div className="flex mx-auto">
      <div className="min-w-sm tracking-xxs">@carlosaldaravi</div>
      <div className="flex gap-2">
        <SVG type="LinkedIn" className="blur-0 hover:scale-125 transition-all duration-300" />
        <SVG type="Twitter" className="blur-0 hover:scale-125 transition-all duration-300" />
        <SVG type="Tiktok" className="blur-0 hover:scale-125 transition-all duration-300" />
        <SVG type="Instagram" className="blur-0 hover:scale-125 transition-all duration-300" />
        <SVG type="youtubeHome" className="blur-0 hover:scale-125 transition-all duration-300" />
      </div>
    </div>
  );
};

export default FooterRRSS;
