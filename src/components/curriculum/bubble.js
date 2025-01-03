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
  const [isManuallyEdited, setIsManuallyEdited] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const handleBlur = () => {
    if (onChangeText) {
      onChangeText(editableText);
      setIsManuallyEdited(true);
    }
  };

  const handleChange = (e) => {
    setEditableText(e.target.value);
    setIsManuallyEdited(true);
  };

  const handleRemoveBubble = () => {
    setIsExploding(true);
    setTimeout(onRemoveBubble, 400);
  };

  const pdfStyle = {
    width: size,
    height: size,
    top: top || "auto",
    left: left || "auto",
    position: "absolute",
  };

  const webStyle = {
    width: size,
    height: size,
    top: top,
    left: left,
    position: "absolute",
  };

  if (!isManuallyEdited && editableText !== name) {
    setEditableText(name);
  }

  return (
    <div
      className={`bubble relative ${
        isExploding
          ? "bubble-exploding"
          : `${head ? "bubble-head" : "bubble-dynamic"}`
      }`}
      style={{
        backgroundColor: isExploding ? "red" : color,
        ...(isGeneratingPDF ? pdfStyle : webStyle),
      }}
    >
      {isEditable && (
        <button onClick={handleRemoveBubble} className="ml-2">
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
            onChange={handleChange}
            onBlur={handleBlur}
            className="bubble_cv_edit"
          />
        )}
      </div>
    </div>
  );
};

export default Bubble;
