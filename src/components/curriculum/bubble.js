const Bubble = ({ name, color, size, top, left, head = false }) => {
  return (
    <div
      className={`bubble bg-${color} ${
        head ? "bubble-head" : "bubble-dynamic"
      }`}
      style={{ width: size, height: size, top, left }}
    >
      {name}
    </div>
  );
};

export default Bubble;
