import { useState } from "react";

const PrettyParagraph = ({ text = "", onChangeText, isEditable }) => {
  const [editableText, setEditableText] = useState(text);

  const handleBlur = () => {
    onChangeText(editableText);
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
          onChange={(e) => setEditableText(e.target.value)}
          onBlur={handleBlur}
        />
      )}
    </>
  );
};

export default PrettyParagraph;
