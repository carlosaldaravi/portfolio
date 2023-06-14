import Section from "@/components/UI/section";
import GearCard from "./gear-card";
import { useEffect, useState } from "react";

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
    <Section className="items-center grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-10">
      {gearToShow.map((item) => (
        <GearCard key={item.id} gear={item} />
      ))}
    </Section>
  );
};
export default Gear;
