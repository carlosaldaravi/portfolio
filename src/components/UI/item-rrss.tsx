import { MouseEvent } from "react";
import SVG from "@/components/svg";
import { useTools } from "@/hooks/useTools";

export interface RRSSItem {
  name: string;
  url: string;
  svg: string;
}

interface ItemRRSSProps {
  rrss: RRSSItem;
}

const ItemRRSS = ({ rrss }: ItemRRSSProps) => {
  const { isMobile } = useTools();
  const rrssHandler = (e: MouseEvent<HTMLLIElement>, url: string) => {
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
