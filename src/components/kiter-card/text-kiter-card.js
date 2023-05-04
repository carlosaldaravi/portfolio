import RowTextKiterCard from "./row-text-kiter-card";

const TextKiterCard = () => {
  return (
    <div className="mt-2">
      <div className="text-center text-3xl tracking-xs mb-2">
        Carlos Aldaravi
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-max block">
        <RowTextKiterCard textLeft="Kite Favorite" textRight="Rebel SLS 8m" />
        <RowTextKiterCard
          textLeft="Board Favorite"
          textRight="Select SLS 135cm"
        />
        <RowTextKiterCard textLeft="Height Record" textRight="32,8m" />
        <RowTextKiterCard textLeft="Hangtime Record" textRight="1 minuto" />
        <RowTextKiterCard textLeft="Home Spot" textRight="Santa Pola" />
        <RowTextKiterCard textLeft="Current Spot" textRight="El Médano" />
        <RowTextKiterCard textLeft="Sponsors" textRight="Duotone, Ion" />
      </div>
    </div>
  );
};

export default TextKiterCard;
