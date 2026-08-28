import { Dispatch, SetStateAction } from "react";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import AddItemButton from "./add-item-button";
import { patchById, removeById, replaceById } from "./item-list";
import { useIntl } from "react-intl";

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
  const intl = useIntl();

  const handleEvents = (updatedEvent: ExperienceData) => {
    setExperiences((prev) => replaceById(prev, updatedEvent));
  };

  const handleOnRemoveSection = (id: string) => {
    setExperiences((prev) => removeById(prev, id));
  };

  const handleTextChange = (id: string, text: string) => {
    setExperiences((prev) => patchById(prev, id, { text, textEdited: true }));
  };

  const handleAddExperience = () => {
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
    ]);
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
            onChange={handleEvents}
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
        <AddItemButton
          onAdd={handleAddExperience}
          label={intl.formatMessage({ id: "addEntry" })}
        />
      )}
    </CurriculumSection>
  );
};

export default Experience;
