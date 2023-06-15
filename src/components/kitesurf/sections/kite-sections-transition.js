import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const KiteSectionTransition = ({
  children,
  name,
  sectionSelected,
  direction,
}) => {
  const [sectionName, setSectionName] = useState("");

  const enterFromStyle =
    direction === "left"
      ? "fixed translate-x-[calc(100vw)]"
      : direction === "right"
      ? "fixed -translate-x-[calc(100vw)]"
      : "";
  const leaveToStyle =
    direction === "left"
      ? "fixed -translate-x-[calc(100vw)]"
      : direction === "right"
      ? "fixed translate-x-[calc(100vw)]"
      : "";

  useEffect(() => {
    setSectionName(sectionSelected.name);
  }, [sectionSelected]);

  return (
    <Transition
      as="div"
      show={sectionName === name}
      enter="duration-500 ease-out"
      enterFrom={enterFromStyle}
      enterTo="translate-x-0"
      leave="duration-500 ease-in"
      leaveFrom="translate-x-0"
      leaveTo={leaveToStyle}
    >
      {children}
    </Transition>
  );
};

export default KiteSectionTransition;
