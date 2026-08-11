import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, CSSProperties } from "react";

interface BubbleProps {
  name: string;
  color: string;
  size: string;
  top?: string;
  left?: string;
  head?: boolean;
  isGeneratingPDF?: boolean;
  isEditable?: boolean;
  onChangeText?: (text: string) => void;
  onRemoveBubble?: () => void;
}

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
}: BubbleProps) => {
  // Derived, not mirrored: show the local edit if any, otherwise the incoming
  // `name`. This avoids syncing a prop into state (no setState in render or in
  // an effect), so it always reflects the latest `name` until the user types.
  const [editedText, setEditedText] = useState<string | null>(null);
  const [isExploding, setIsExploding] = useState(false);
  const displayText = editedText ?? name;

  const handleBlur = () => {
    onChangeText?.(displayText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleRemoveBubble = () => {
    setIsExploding(true);
    setTimeout(() => onRemoveBubble?.(), 400);
  };

  const pdfStyle: CSSProperties = {
    width: size,
    height: size,
    top: top || "auto",
    left: left || "auto",
    position: "absolute",
  };

  const webStyle: CSSProperties = {
    width: size,
    height: size,
    top: top,
    left: left,
    position: "absolute",
  };

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
          <>{displayText}</>
        ) : (
          <input
            type="text"
            value={displayText}
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
