const Arrow = ({ className, arrow, param, onChangeSection }) => {
  return (
    <span
      className={`self-center text-4xl cursor-pointer ${className}`}
      onClick={() => onChangeSection(param)}
    >
      {arrow}
    </span>
  );
};

export default Arrow;
