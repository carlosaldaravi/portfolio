const Bubble = ({ name, color, size, top, left, head = false }) => {
  return (
    <div
      className={`bubble size-${size} bg-${color} ${
        head ? "bubble-head" : "bubble-dynamic"
      }`}
      style={{ top, left }}
    >
      {name}
    </div>
  );
};

export default Bubble;
