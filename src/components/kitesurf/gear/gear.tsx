import Section from "@/components/UI/section";
import GearCard from "./gear-card";
import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import type { GearEntry, GearGroupItem, GearItem } from "@/types/kitesurf";

interface GearProps {
  gear: GearEntry[];
}

const Gear = ({ gear }: GearProps) => {
  // A family nests its items under a key named after itself
  // (`{ name: "kites", kites: [...] }`); anything else is a single piece.
  const gearToShow = useMemo(
    () =>
      gear.flatMap((entry): GearItem[] => {
        const family = (entry as GearGroupItem)[entry.name];
        return Array.isArray(family) ? family : [entry as GearItem];
      }),
    [gear]
  );

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
