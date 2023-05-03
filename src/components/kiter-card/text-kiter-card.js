import RowTextKiterCard from "./row-text-kiter-card";

const TextKiterCard = () => {
  return (
    <div className="mt-2">
      <div className="text-center text-3xl tracking-xs mb-2">
        Carlos Aldaravi
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-max block">
        <RowTextKiterCard textLeft="Cometa favorita" textRight="Rebel SLS 8m" />
        <RowTextKiterCard
          textLeft="Tabla favorita"
          textRight="Select SLS 135cm"
        />
        <RowTextKiterCard textLeft="Surfr. Record" textRight="32,8m" />
        <RowTextKiterCard textLeft="Hangtime record" textRight="1m" />
        <RowTextKiterCard textLeft="Patrocinadores" textRight="Duotone, Ion" />
      </div>
    </div>
  );
};

export default TextKiterCard;
