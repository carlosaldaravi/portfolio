import CurriculumSection from "./curriculum-section";
import EditableSection from "./editable-section";
import PrettyParagraph from "./pretty-paragraph";
import { PlusIcon } from "@heroicons/react/24/outline";

const OtherInfo = ({ titleId, isEditable, otherInfo, setOtherInfo }) => {
  const handleInfoChange = (id, text) => {
    setOtherInfo((prevOtherInfo) =>
      prevOtherInfo.map((info) => (info.id === id ? { ...info, text } : info))
    );
  };

  const handleOnRemoveInfo = (id) => {
    setOtherInfo(otherInfo.filter((info) => info.id !== id));
  };

  return (
    <CurriculumSection titleId={titleId}>
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
        <div className="w-full h-12 flex justify-center items-center border border-dashed cursor-pointer">
          <span>
            <PlusIcon
              className="w-12 h-12 stroke-green-600"
              onClick={() =>
                setOtherInfo([
                  ...otherInfo,
                  {
                    id: `info-${otherInfo.length + 1}`,
                    text: "",
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

export default OtherInfo;
