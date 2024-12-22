import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import { PlusIcon } from "@heroicons/react/24/outline";

const Education = ({ titleId, isEditable, educations, setEducations }) => {
  const handleEducationChange = (updatedEducation) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu
      )
    );
  };

  const handleOnRemoveEducation = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const handleText1Change = (id, text) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === id ? { ...edu, text1: text } : edu
      )
    );
  };

  const handleText2Change = (id, text) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === id ? { ...edu, text2: text } : edu
      )
    );
  };

  return (
    <CurriculumSection titleId={titleId}>
      {educations.map((edu) => (
        <EditableSection
          key={edu.id}
          isEditable={isEditable}
          bigSection={false}
          onRemove={() => handleOnRemoveEducation(edu.id)}
        >
          <TimeLineEvent
            item={edu}
            onChange={(updatedEdu) => handleEducationChange(updatedEdu)}
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
                        edu.id === ed.id ? { ...edu, gpa: e.target.value } : edu
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
            setEducations([
              ...educations,
              {
                id: `education-${educations.length + 1}`,
                date: "",
                title: "",
                place: "",
                text1: "",
                text2: "",
                gpa: "",
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
