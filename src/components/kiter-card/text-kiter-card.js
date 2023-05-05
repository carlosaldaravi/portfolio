import RowTextKiterCard from "./row-text-kiter-card";
import { FormattedMessage } from "react-intl";

const TextKiterCard = ({ me }) => {
  return (
    <div className="mt-2">
      <div className="text-center text-3xl tracking-xs mb-2">
        Carlos Aldaravi
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-max block">
        {me.map((data) => (
          <RowTextKiterCard
            key={data.id}
            textLeft={<FormattedMessage id={data.id} />}
            textRight={<FormattedMessage id={data.value} />}
          />
        ))}
      </div>
    </div>
  );
};

export default TextKiterCard;
