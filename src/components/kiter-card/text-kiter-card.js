import RowTextKiterCard from "./row-text-kiter-card";
import { FormattedMessage } from "react-intl";

const TextKiterCard = () => {
  return (
    <div className="mt-2">
      <div className="text-center text-3xl tracking-xs mb-2">
        Carlos Aldaravi
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-max block">
        <RowTextKiterCard
          textLeft={<FormattedMessage id="page.kitesurf.kiteFavorite" />}
          textRight="Rebel SLS 8m"
        />
        <RowTextKiterCard
          textLeft={<FormattedMessage id="page.kitesurf.boardFavorite" />}
          textRight="Select SLS 135cm"
        />
        <RowTextKiterCard
          textLeft={<FormattedMessage id="page.kitesurf.heightRecord" />}
          textRight="32,8m"
        />
        <RowTextKiterCard
          textLeft={<FormattedMessage id="page.kitesurf.hangtimeRecord" />}
          textRight={<FormattedMessage id="minute" />}
        />
        <RowTextKiterCard
          textLeft={<FormattedMessage id="page.kitesurf.homeSpot" />}
          textRight="Santa Pola"
        />
        <RowTextKiterCard
          textLeft={<FormattedMessage id="page.kitesurf.currentSpot" />}
          textRight="El Médano"
        />
        <RowTextKiterCard
          textLeft={<FormattedMessage id="page.kitesurf.sponsors" />}
          textRight="Duotone, Ion"
        />
      </div>
    </div>
  );
};

export default TextKiterCard;
