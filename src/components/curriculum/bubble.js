const Bubble = ({
  name,
  color,
  size,
  top,
  left,
  head = false,
  isGeneratingPDF = false,
}) => {
  const pdfPositions = {
    React: { top: "12%", left: "15%" },
    Teamwork: { top: "27%", left: "52%" },
  };

  const pdfStyle = {
    width: size,
    height: size,
    top: pdfPositions[name]?.top || top || "auto",
    left: pdfPositions[name]?.left || left || "auto",
    position: "absolute",
    animation: "none",
  };

  const webStyle = {
    width: size,
    height: size,
    top: top,
    left: left,
    position: "absolute",
  };

  return (
    <div
      className={`bubble bg-${color} ${
        head ? "bubble-head" : "bubble-dynamic"
      }`}
      style={isGeneratingPDF ? pdfStyle : webStyle}
    >
      <div
        className="bubble-content"
        style={
          isGeneratingPDF
            ? head
              ? { transform: "translate(-50%, -70%)" }
              : { transform: "translate(-50%, -78%)" }
            : {}
        }
      >
        {name}
      </div>
    </div>
  );
};

export default Bubble;
