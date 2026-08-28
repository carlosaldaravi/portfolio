import ItemRRSS from "./item-rrss";
import type { RRSSItem } from "@/types/common";

interface RRSSProps {
  rrssList: RRSSItem[];
}

const RRSS = ({ rrssList }: RRSSProps) => {
  return (
    <ul role="list" className="flex justify-center gap-x-6">
      {rrssList.map((rrss) => (
        <ItemRRSS key={`rrss-${rrss.name}`} rrss={rrss} />
      ))}
    </ul>
  );
};

export default RRSS;
