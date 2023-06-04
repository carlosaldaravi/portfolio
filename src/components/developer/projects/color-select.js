const ColorSelect = ({ num, colorSelected, color, onSelColor }) => {
  return (
    <div
      className={`h-5 w-20 sm:h-12 sm:w-40 mt-2 rounded-xl bg-[#${color}] cursor-pointer ${
        colorSelected === color
          ? `brightness-125 shadow-sm shadow-[#${color}]`
          : "brightness-75 shadow-md"
      }`}
      onClick={() => onSelColor(num)}
    ></div>
  );
};
export default ColorSelect;
