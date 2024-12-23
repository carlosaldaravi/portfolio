import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import { PlusIcon } from "@heroicons/react/24/outline";

const Experience = ({
  title,
  isEditable,
  experiences,
  setExperiences,
  onChangeTitle,
}) => {
  const handleEvents = (updatedEvent) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((ex) =>
        ex.id === updatedEvent.id ? updatedEvent : ex
      )
    );
  };

  const handleOnRemoveSection = (date) => {
    setExperiences(experiences.filter((ev) => ev.date !== date));
  };

  const handleTextChange = (id, text) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((ex) => (ex.id === id ? { ...ex, text } : ex))
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
      {experiences &&
        experiences.map((exp) => (
          <EditableSection
            key={exp.title + "-" + exp.place}
            isEditable={isEditable}
            bigSection={false}
            onRemove={() => handleOnRemoveSection(exp.date)}
          >
            <TimeLineEvent
              item={exp}
              onChange={(event) => handleEvents(event)}
              isEditable={isEditable}
            >
              <PrettyParagraph
                text={exp.text}
                onChangeText={(text) => handleTextChange(exp.id, text)}
                isEditable={isEditable}
              />
            </TimeLineEvent>
          </EditableSection>
        ))}
      {isEditable && (
        <div
          className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer"
          onClick={() =>
            setExperiences([
              ...experiences,
              {
                id: `experience-${experiences.length + 1}`,
                date: "",
                title: "",
                place: "",
                text: "",
                order: experiences.length + 1,
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

export default Experience;
