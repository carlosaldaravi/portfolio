import { Dispatch, SetStateAction } from "react";
import { useIntl } from "react-intl";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";
import AddItemButton from "./add-item-button";
import { patchById, removeById, replaceById } from "./item-list";

interface HonorAndAwardData {
  id: string;
  date: string;
  titleId: string;
  title: string;
  titleEdited: boolean;
  place: string;
  textId: string;
  text: string;
  textEdited: boolean;
}

interface HonorAndAwardProps {
  title: string;
  isEditable: boolean;
  honorsAndAwards: HonorAndAwardData[];
  setHonorsAndAwards: Dispatch<SetStateAction<HonorAndAwardData[]>>;
  onChangeTitle: (sectionId: string, newTitle: string) => void;
}

const HonorAndAward = ({
  title,
  isEditable,
  honorsAndAwards,
  setHonorsAndAwards,
  onChangeTitle,
}: HonorAndAwardProps) => {
  const intl = useIntl();

  const handleHonorChange = (updatedHonor: HonorAndAwardData) => {
    setHonorsAndAwards((prev) => replaceById(prev, updatedHonor));
  };

  const handleOnRemoveHonor = (id: string) => {
    setHonorsAndAwards((prev) => removeById(prev, id));
  };

  const handleTextChange = (id: string, text: string) => {
    setHonorsAndAwards((prev) => patchById(prev, id, { text, textEdited: true }));
  };

  const handleAddHonor = () => {
    setHonorsAndAwards((prev) => [
      ...prev,
      {
        id: `award-${prev.length + 1}`,
        date: "",
        titleId: "page.curriculum.body.honorsAndAwards.award",
        title: "",
        titleEdited: false,
        place: "",
        textId: "",
        text: "",
        textEdited: false,
      },
    ]);
  };

  return (
    <CurriculumSection
      title={title}
      isEditable={isEditable}
      onChangeSectionTitle={(newTitle) => {
        onChangeTitle("honors-and-awards", newTitle);
      }}
    >
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
              text={honor.text}
              onChangeText={(text) => handleTextChange(honor.id, text)}
              isEditable={isEditable}
            />
          </TimeLineEvent>
        </EditableSection>
      ))}
      {isEditable && (
        <AddItemButton
          onAdd={handleAddHonor}
          label={intl.formatMessage({ id: "addEntry" })}
        />
      )}
    </CurriculumSection>
  );
};

export default HonorAndAward;
