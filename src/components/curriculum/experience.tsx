import { Dispatch, SetStateAction } from "react";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import { PlusIcon } from "@heroicons/react/24/outline";

interface ExperienceData {
  id: string;
  order: number;
  date: string;
  dateEdited: boolean;
  titleId: string;
  title: string;
  titleEdited: boolean;
  place: string;
  placeEdited: boolean;
  textId: string;
  text: string;
  textEdited: boolean;
  placeId?: string;
}

interface ExperienceProps {
  title: string;
  isEditable: boolean;
  experiences: ExperienceData[];
  setExperiences: Dispatch<SetStateAction<ExperienceData[]>>;
  onChangeTitle: (sectionId: string, newTitle: string) => void;
}

const Experience = ({
  title,
  isEditable,
  experiences,
  setExperiences,
  onChangeTitle,
}: ExperienceProps) => {
  const handleEvents = (updatedEvent: ExperienceData) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((ex) =>
        ex.id === updatedEvent.id ? updatedEvent : ex
      )
    );
  };

  const handleOnRemoveSection = (id: string) => {
    setExperiences((prev) => prev.filter((ev) => ev.id !== id));
  };

  const handleTextChange = (id: string, text: string) => {
    setExperiences((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, text, textEdited: true } : ex))
    );
  };

  return (
    <CurriculumSection
      title={title}
      isEditable={isEditable}
      onChangeSectionTitle={(newTitle) => {
        onChangeTitle("experience", newTitle);
      }}
    >
      {experiences.map((exp) => (
        <EditableSection
          key={exp.id}
          isEditable={isEditable}
          bigSection={false}
          onRemove={() => handleOnRemoveSection(exp.id)}
        >
          <TimeLineEvent
            item={exp}
            isEditable={isEditable}
            onChange={(event) => handleEvents(event as ExperienceData)}
          >
            <PrettyParagraph
              text={exp.text}
              isEditable={isEditable}
              onChangeText={(text) => handleTextChange(exp.id, text)}
            />
          </TimeLineEvent>
        </EditableSection>
      ))}
      {isEditable && (
        <div
          className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer"
          onClick={() =>
            setExperiences((prev) => [
              ...prev,
              {
                id: `experience-${prev.length + 1}`,
                date: "",
                dateEdited: false,
                titleId: "",
                title: "",
                titleEdited: false,
                placeId: "",
                place: "",
                placeEdited: false,
                textId: "",
                text: "",
                textEdited: false,
                order: prev.length + 1,
              },
            ])
          }
        >
          <PlusIcon className="w-12 h-12 stroke-green-600" />
        </div>
      )}
    </CurriculumSection>
  );
};

export default Experience;
