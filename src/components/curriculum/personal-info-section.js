import { useState, useMemo } from "react";
import { useIntl } from "react-intl";
import { personalInfoData } from "@/data/sidebar";
import SidebarSection from "./sidebar-section";

const PersonalInfoSection = ({ isEditable }) => {
  const intl = useIntl();
  const [personalInfo, setPersonalInfo] = useState(personalInfoData);

  const translatedInfo = useMemo(() => {
    return personalInfo.map((info) => ({
      ...info,
      displayTitle: info.titleEdited
        ? info.title
        : intl.formatMessage({ id: info.titleId }),
    }));
  }, [personalInfo, intl]);

  const handleChange = (field, id, value) => {
    setPersonalInfo((prev) =>
      prev.map((info) =>
        info.id === id
          ? {
              ...info,
              [field]: value,
              [field + "Edited"]: true,
            }
          : info
      )
    );
  };

  const handleRemoveSection = (id) => {
    setPersonalInfo((prev) => prev.filter((info) => info.id !== id));
  };

  return (
    <>
      {translatedInfo.map((info) => (
        <SidebarSection
          key={info.id}
          title={info.displayTitle}
          isEditable={isEditable}
          onChangeTitle={(newTitle) => {
            handleChange("title", info.id, newTitle);
          }}
          onRemoveSection={() => handleRemoveSection(info.id)}
        >
          {isEditable ? (
            <input
              className="input_cv_edit"
              value={info.text}
              onChange={(e) => handleChange("text", info.id, e.target.value)}
            />
          ) : (
            <p>{info.text}</p>
          )}
        </SidebarSection>
      ))}
    </>
  );
};

export default PersonalInfoSection;
