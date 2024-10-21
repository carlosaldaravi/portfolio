import { MY_NAME } from "@/constants/constants";
import RowTextKiterCard from "./row-text-kiter-card";
import { FormattedMessage } from "react-intl";
import SVG from "@/components/svg";
import Link from "next/link";

const TextKiterCard = ({ me }) => {
  const value = (value) => {
    if (value.includes("icon")) {
      const iconName = value.replace("icon-", "");
      return (
        <Link
          href={`/curriculum`}
          className="cursor-pointer flex items-center gap-4"
        >
          <h3 className="text-4xl">
            <FormattedMessage id="show" /> PDF
          </h3>
          <span className="self-center size-12">
            <SVG type={iconName} size={48} />
          </span>
        </Link>
      );
    } else {
      return <FormattedMessage id={value} />;
    }
  };
  return (
    <div className="mt-12 flex flex-col gap-12">
      <div className="text-center text-4xl sm:text-6xl tracking-xs mb-2">
        {MY_NAME}
      </div>
      <div className="mx-auto w-max block">
        {me.map((data) => (
          <RowTextKiterCard
            key={data.id}
            textLeft={<FormattedMessage id={data.id} />}
            textRight={value(data.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default TextKiterCard;
