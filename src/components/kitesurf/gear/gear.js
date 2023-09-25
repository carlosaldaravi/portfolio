import Section from "@/components/UI/section";
import GearCard from "./gear-card";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const Gear = ({ gear }) => {
  const [gearToShow, setGearToShow] = useState([]);
  useEffect(() => {
    const newArray = gear.map((item) => {
      if (Array.isArray(item[item.name])) {
        return item[item.name].map((i) => i);
      } else {
        return item;
      }
    });
    const flattened = newArray
      .flat()
      .filter((item) => typeof item === "object");

    setGearToShow(flattened);
  }, [gear]);
  return (
    <div className="w-full flex flex-col mt-6 justify-center items-center">
      <p className="text-xl">
        <FormattedMessage id="page.kitesurf.gear.description" />
      </p>
      <Section className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-10">
        {gearToShow.map((item) => (
          <GearCard key={item.id} gear={item} />
        ))}
      </Section>
    </div>
  );
};
export default Gear;
