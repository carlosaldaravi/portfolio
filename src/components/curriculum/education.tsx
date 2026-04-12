import { Dispatch, SetStateAction } from "react";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import { PlusIcon } from "@heroicons/react/24/outline";

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
  const handleEducationChange = (updatedEducation: EducationData) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu
      )
    );
  };

  const handleOnRemoveEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const handleText1Change = (id: string, text: string) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === id ? { ...edu, text1: text, text1Edited: true } : edu
      )
    );
  };

  const handleText2Change = (id: string, text: string) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === id ? { ...edu, text2: text, text2Edited: true } : edu
      )
    );
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
                  onChange={(e) =>
                    setEducations((prevEducations) =>
                      prevEducations.map((ed) =>
                        ed.id === edu.id
                          ? { ...ed, gpa: e.target.value, gpaEdited: true }
                          : ed
                      )
                    )
                  }
                />{" "}
              </p>
            ) : (
              <p className="italic font-medium">GPA: {edu.gpa}</p>
            )}
          </TimeLineEvent>
        </EditableSection>
      ))}
      {isEditable && (
        <div
          className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer"
          onClick={() =>
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
            ])
          }
        >
          <span>
            <PlusIcon className="w-12 h-12 stroke-green-600" />
          </span>
        </div>
      )}
    </CurriculumSection>
  );
};

export default Education;
