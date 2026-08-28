import { Dispatch, SetStateAction } from "react";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import AddItemButton from "./add-item-button";
import { patchById, removeById, replaceById } from "./item-list";
import { useIntl } from "react-intl";

interface EducationData {
  id: string;
  date: string;
  dateEdited: boolean;
  titleId: string;
  title: string;
  titleEdited: boolean;
  placeId: string;
  place: string;
  placeEdited: boolean;
  text1Id: string;
  text1: string;
  text1Edited: boolean;
  text2Id: string;
  text2: string;
  text2Edited: boolean;
  gpa: string;
  gpaEdited: boolean;
}

interface EducationProps {
  title: string;
  isEditable: boolean;
  educations: EducationData[];
  setEducations: Dispatch<SetStateAction<EducationData[]>>;
  onChangeTitle: (sectionId: string, newTitle: string) => void;
}

const Education = ({
  title,
  isEditable,
  educations,
  setEducations,
  onChangeTitle,
}: EducationProps) => {
  const intl = useIntl();

  const handleEducationChange = (updatedEducation: EducationData) => {
    setEducations((prev) => replaceById(prev, updatedEducation));
  };

  const handleOnRemoveEducation = (id: string) => {
    setEducations((prev) => removeById(prev, id));
  };

  const handleText1Change = (id: string, text1: string) => {
    setEducations((prev) => patchById(prev, id, { text1, text1Edited: true }));
  };

  const handleText2Change = (id: string, text2: string) => {
    setEducations((prev) => patchById(prev, id, { text2, text2Edited: true }));
  };

  const handleGpaChange = (id: string, gpa: string) => {
    setEducations((prev) => patchById(prev, id, { gpa, gpaEdited: true }));
  };

  const handleAddEducation = () => {
    setEducations((prev) => [
      ...prev,
      {
        id: `education-${prev.length + 1}`,
        date: "",
        dateEdited: false,
        titleId: "",
        title: "",
        titleEdited: false,
        placeId: "",
        place: "",
        placeEdited: false,
        text1Id: "",
        text1: "",
        text1Edited: false,
        text2Id: "",
        text2: "",
        text2Edited: false,
        gpa: "",
        gpaEdited: false,
      },
    ]);
  };

  return (
    <CurriculumSection
      title={title}
      isEditable={isEditable}
      onChangeSectionTitle={(newTitle) => {
        onChangeTitle("education", newTitle);
      }}
    >
      {educations.map((edu) => (
        <EditableSection
          key={edu.id}
          isEditable={isEditable}
          bigSection={false}
          onRemove={() => handleOnRemoveEducation(edu.id)}
        >
          <TimeLineEvent
            item={edu}
            onChange={handleEducationChange}
            isEditable={isEditable}
          >
            <PrettyParagraph
              text={edu.text1}
              onChangeText={(text) => handleText1Change(edu.id, text)}
              isEditable={isEditable}
            />
            <PrettyParagraph
              text={edu.text2}
              onChangeText={(text) => handleText2Change(edu.id, text)}
              isEditable={isEditable}
            />
            {isEditable ? (
              <p className="italic font-medium">
                GPA:{" "}
                <input
                  type="text"
                  value={edu.gpa}
                  onChange={(e) => handleGpaChange(edu.id, e.target.value)}
                />{" "}
              </p>
            ) : (
              <p className="italic font-medium">GPA: {edu.gpa}</p>
            )}
          </TimeLineEvent>
        </EditableSection>
      ))}
      {isEditable && (
        <AddItemButton
          onAdd={handleAddEducation}
          label={intl.formatMessage({ id: "addEntry" })}
        />
      )}
    </CurriculumSection>
  );
};

export default Education;
