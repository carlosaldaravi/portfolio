import SVG from "@/components/svg";

const FooterRRSS = () => {
  return (
    <div className="flex mx-auto">
      <div className="min-w-sm tracking-xxs">@carlosaldaravi</div>
      <div className="flex gap-2">
        <SVG type="LinkedIn" className="footer-link hover:scale-125 transition-all duration-300" />
        <SVG type="Twitter" className="footer-link hover:scale-125 transition-all duration-300" />
        <SVG type="Tiktok" className="footer-link hover:scale-125 transition-all duration-300" />
        <SVG type="Instagram" className="footer-link hover:scale-125 transition-all duration-300" />
        <SVG type="youtubeHome" className="footer-link hover:scale-125 transition-all duration-300" />
      </div>
    </div>
  );
};

export default FooterRRSS;
