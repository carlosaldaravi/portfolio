import { useEffect, useState } from "react";

const ColorSelect = ({ num, colorSelected, color, onSelColor }) => {
  const [bgColor, setBgColor] = useState();
  const [shadowColor, setShadowColor] = useState();
  console.log("color: ", color);

  useEffect(() => {
    if (color === "#55cccc") {
      setBgColor("level6Color1");
      setShadowColor("level6Shadow1");
    }
    if (color === "#e95555") {
      setBgColor("level6Color2");
      setShadowColor("level6Shadow2");
    }
    if (color === "#3b91f4") {
      setBgColor("level6Color3");
      setShadowColor("level6Shadow3");
    }
    if (color === "#a57455") {
      setBgColor("level6Color4");
      setShadowColor("level6Shadow4");
    }
  }, [color]);

  return (
    <div
      className={`h-5 w-20 sm:h-12 sm:w-40 mt-2 rounded-xl cursor-pointer ${bgColor} ${
        colorSelected === color
          ? `brightness-125 ${shadowColor}`
          : "brightness-75 shadow-md"
      }`}
      onClick={() => onSelColor(num)}
    ></div>
  );
};
export default ColorSelect;
