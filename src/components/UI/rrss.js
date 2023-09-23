import ItemRRSS from "./item-rrss";

const RRSS = ({ rrssList }) => {
  return (
    <ul role="list" className="flex justify-center gap-x-6">
      {rrssList.map((rrss) => (
        <ItemRRSS key={`rrss-${rrss.name}`} rrss={rrss} />
      ))}
    </ul>
  );
};

export default RRSS;
