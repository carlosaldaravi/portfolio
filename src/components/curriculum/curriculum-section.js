import { useState } from "react";

const CurriculumSection = ({
  title,
  isEditable,
  onChangeSectionTitle,
  children,
}) => {
  const [editableTitle, setEditableTitle] = useState(title);
  const firstThree = title.substring(0, 3);
  const theRest = title.substring(3);

  const handleChangeSectionTitle = (value) => {
    setEditableTitle(value);
    onChangeSectionTitle(value);
  };

  return (
    <section className="body__section">
      {isEditable ? (
        <input
          type="text"
          value={editableTitle}
          onChange={(e) => handleChangeSectionTitle(e.target.value)}
          placeholder={title}
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
