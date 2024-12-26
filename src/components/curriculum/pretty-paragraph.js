import { useState } from "react";

const PrettyParagraph = ({ text = "", onChangeText, isEditable }) => {
  const [manualText, setManualText] = useState(null);
  const editableText = manualText !== null ? manualText : text;

  const handleBlur = () => {
    onChangeText(editableText);
  };

  const handleChange = (e) => {
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
