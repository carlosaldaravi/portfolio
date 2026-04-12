import { ReactNode, useState } from "react";

interface CurriculumSectionProps {
  title: string;
  isEditable: boolean;
  onChangeSectionTitle: (value: string) => void;
  children: ReactNode;
}

const CurriculumSection = ({
  title,
  isEditable,
  onChangeSectionTitle,
  children,
}: CurriculumSectionProps) => {
  const [manualTitle, setManualTitle] = useState<string | null>(null);
  const editableTitle = manualTitle !== null ? manualTitle : title;

  const handleChangeTitle = (value: string) => {
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
