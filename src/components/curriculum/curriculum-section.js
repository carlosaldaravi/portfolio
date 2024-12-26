import { useState } from "react";

const CurriculumSection = ({
  title,
  isEditable,
  onChangeSectionTitle,
  children,
}) => {
  const [manualTitle, setManualTitle] = useState(null);
  const editableTitle = manualTitle !== null ? manualTitle : title;

  const handleChangeTitle = (value) => {
    setManualTitle(value);
    onChangeSectionTitle(value);
  };

  const firstThree = editableTitle.substring(0, 3);
  const theRest = editableTitle.substring(3);

  return (
    <section className="body__section">
      {isEditable ? (
        <input
          type="text"
          value={editableTitle}
          onChange={(e) => handleChangeTitle(e.target.value)}
          className="input_cv_edit"
        />
      ) : (
        <h2 className="body__section__title">
          <span className="capitalize">{firstThree}</span>
          <span className="!text-[#4e4e4e]">{theRest}</span>
        </h2>
      )}
      {children}
    </section>
  );
};

export default CurriculumSection;
