import { FormattedMessage } from "react-intl";
import RowTextDevCard from "./row-text-dev-card";

const TextDevCard = ({ me }) => {
  return (
    <div className="mt-4 sm:mt-12">
      <div className="text-center text-3xl sm:text-5xl tracking-xs mb-2">
        Carlos Aldaravi
      </div>
      <div className="mx-auto mt-4 sm:mt-10 w-max block">
        {me.map((data) => (
          <RowTextDevCard
            key={data.id}
            textLeft={<FormattedMessage id={data.id} />}
            textRight={<FormattedMessage id={data.value} />}
          />
        ))}
      </div>
    </div>
  );
};

export default TextDevCard;
