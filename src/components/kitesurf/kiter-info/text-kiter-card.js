import RowTextKiterCard from "./row-text-kiter-card";
import { FormattedMessage } from "react-intl";

const TextKiterCard = ({ me }) => {
  return (
    <div className="mt-12 flex flex-col gap-12">
      <div className="text-center text-4xl sm:text-6xl tracking-xs mb-2">
        Carlos Aldaravi
      </div>
      <div className="mx-auto w-max block">
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
