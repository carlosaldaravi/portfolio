import { useState } from "react";

interface PrettyParagraphProps {
  text?: string;
  onChangeText: (text: string) => void;
  isEditable: boolean;
}

const PrettyParagraph = ({
  text = "",
  onChangeText,
  isEditable,
}: PrettyParagraphProps) => {
  const [manualText, setManualText] = useState<string | null>(null);
  const editableText = manualText !== null ? manualText : text;

  const handleBlur = () => {
    onChangeText(editableText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setManualText(e.target.value);
  };

  return (
    <>
      {!isEditable ? (
        <p className="text-pretty">{editableText}</p>
      ) : (
        <textarea
          value={editableText}
          className="text-pretty input_cv_edit"
          rows={4}
          cols={50}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </>
  );
};

export default PrettyParagraph;
