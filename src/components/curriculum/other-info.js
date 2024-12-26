import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import { PlusIcon } from "@heroicons/react/24/outline";

const OtherInfo = ({
  title,
  isEditable,
  otherInfo,
  setOtherInfo,
  onChangeTitle,
}) => {
  const handleInfoChange = (id, text) => {
    setOtherInfo((prevOtherInfo) =>
      prevOtherInfo.map((info) =>
        info.id === id ? { ...info, text, textEdited: true } : info
      )
    );
  };

  const handleOnRemoveInfo = (id) => {
    setOtherInfo(otherInfo.filter((info) => info.id !== id));
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
        <div
          className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer"
          onClick={() =>
            setOtherInfo((prev) => [
              ...prev,
              {
                id: `info-${prev.length + 1}`,
                textId: "",
                text: "",
                textEdited: false,
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

export default OtherInfo;
