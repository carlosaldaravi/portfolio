import SVG from "@/components/svg";
import { useTools } from "@/hooks/useTools";

const ItemRRSS = ({ rrss }) => {
  const { isMobile } = useTools();
  const rrssHandler = (e, url) => {
    e.preventDefault();
    isMobile
      ? window.open(url, "_self")
      : window.open(url, "_blank", "noreferrer");
  };

  return (
    <li onClick={(e) => rrssHandler(e, rrss.url)}>
      <span className="sr-only">{rrss.name}</span>
      <SVG type={rrss.svg} />
    </li>
  );
};

export default ItemRRSS;
