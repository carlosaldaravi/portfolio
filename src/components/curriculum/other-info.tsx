import { Dispatch, SetStateAction } from "react";
import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import AddItemButton from "./add-item-button";
import { patchById, removeById } from "./item-list";
import { useIntl } from "react-intl";

interface OtherInfoData {
  id: string;
  textId: string;
  text: string;
  textEdited: boolean;
}

interface OtherInfoProps {
  title: string;
  isEditable: boolean;
  otherInfo: OtherInfoData[];
  setOtherInfo: Dispatch<SetStateAction<OtherInfoData[]>>;
  onChangeTitle: (sectionId: string, newTitle: string) => void;
}

const OtherInfo = ({
  title,
  isEditable,
  otherInfo,
  setOtherInfo,
  onChangeTitle,
}: OtherInfoProps) => {
  const intl = useIntl();

  const handleInfoChange = (id: string, text: string) => {
    setOtherInfo((prev) => patchById(prev, id, { text, textEdited: true }));
  };

  const handleOnRemoveInfo = (id: string) => {
    setOtherInfo((prev) => removeById(prev, id));
  };

  const handleAddInfo = () => {
    setOtherInfo((prev) => [
      ...prev,
      { id: `info-${prev.length + 1}`, textId: "", text: "", textEdited: false },
    ]);
  };

  return (
    <CurriculumSection
      title={title}
      isEditable={isEditable}
      onChangeSectionTitle={(newTitle) => {
        onChangeTitle("other-info", newTitle);
      }}
    >
      {otherInfo.map((info) => (
        <EditableSection
          key={info.id}
          isEditable={isEditable}
          bigSection={false}
          onRemove={() => handleOnRemoveInfo(info.id)}
        >
          <PrettyParagraph
            text={info.text}
            onChangeText={(text) => handleInfoChange(info.id, text)}
            isEditable={isEditable}
          />
        </EditableSection>
      ))}
      {isEditable && (
        <AddItemButton
          onAdd={handleAddInfo}
          label={intl.formatMessage({ id: "addEntry" })}
        />
      )}
    </CurriculumSection>
  );
};

export default OtherInfo;
