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
          className="flex items-center gap-6 px-10 py-3 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-3xl font-semibold">
            <FormattedMessage id="show" />
          </h3>
          <span className="self-center size-9">
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
      <div className="mx-auto w-full block">
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
