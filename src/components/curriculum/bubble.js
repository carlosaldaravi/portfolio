import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Bubble = ({
  name,
  color,
  size,
  top,
  left,
  head = false,
  isGeneratingPDF = false,
  isEditable = false,
  onChangeText,
  onRemoveBubble,
}) => {
  const [editableText, setEditableText] = useState(name);

  const handleBlur = () => {
    if (onChangeText) {
      onChangeText(editableText);
    }
  };

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
      className={`bubble relative bg-${color} ${
        head ? "bubble-head" : "bubble-dynamic"
      }`}
      style={isGeneratingPDF ? pdfStyle : webStyle}
    >
      {isEditable && (
        <button onClick={onRemoveBubble} className="ml-2">
          <XMarkIcon className="absolute -top-2 w-8 h-8 font-bold bg-white rounded-full" />
        </button>
      )}
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
        {!isEditable ? (
          <>{editableText}</>
        ) : (
          <input
            type="text"
            value={editableText}
            onChange={(e) => setEditableText(e.target.value)}
            onBlur={handleBlur}
            className="bubble_cv_edit"
          />
        )}
      </div>
    </div>
  );
};

export default Bubble;
