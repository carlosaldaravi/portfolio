import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import { PlusIcon } from "@heroicons/react/24/outline";

const HonorAndAward = ({
  titleId,
  isEditable,
  honorsAndAwards,
  setHonorsAndAwards,
}) => {
  const handleHonorChange = (updatedHonor) => {
    setHonorsAndAwards((prevHonors) =>
      prevHonors.map((honor) =>
        honor.id === updatedHonor.id ? updatedHonor : honor
      )
    );
  };

  const handleOnRemoveHonor = (id) => {
    setHonorsAndAwards(honorsAndAwards.filter((honor) => honor.id !== id));
  };

  const handleTextChange = (id, text) => {
    setHonorsAndAwards((prevHonors) =>
      prevHonors.map((honor) =>
        honor.id === id ? { ...honor, description: text } : honor
      )
    );
  };

  return (
    <CurriculumSection titleId={titleId}>
      {honorsAndAwards.map((honor) => (
        <EditableSection
          key={honor.id}
          isEditable={isEditable}
          bigSection={false}
          onRemove={() => handleOnRemoveHonor(honor.id)}
        >
          <TimeLineEvent
            item={honor}
            onChange={handleHonorChange}
            isEditable={isEditable}
          >
            <PrettyParagraph
              text={honor.description}
              onChangeText={(text) => handleTextChange(info.id, text)}
              isEditable={isEditable}
            />
          </TimeLineEvent>
        </EditableSection>
      ))}
      {isEditable && (
        <div className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer">
          <span>
            <PlusIcon
              className="w-12 h-12 stroke-green-600"
              onClick={() =>
                setHonorsAndAwards([
                  ...honorsAndAwards,
                  {
                    id: `award-${honorsAndAwards.length + 1}`,
                    date: "",
                    title: intl.formatMessage({
                      id: "page.curriculum.body.honorsAndAwards.award",
                    }),
                    place: "",
                    description: "",
                  },
                ])
              }
            />
          </span>
        </div>
      )}
    </CurriculumSection>
  );
};

export default HonorAndAward;
