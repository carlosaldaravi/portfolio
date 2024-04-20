const Bubble = ({ name, color, size, top, left, head = false }) => {
  return (
    <div
      className={`bubble size-${size} bg-${color} ${
        head ? "font-bold !text-2xl" : "bubble-dynamic"
      }`}
      style={{ position: "absolute", top, left }}
    >
      {name}
    </div>
  );
};

export default Bubble;
