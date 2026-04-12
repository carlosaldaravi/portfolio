import { useState, useMemo } from "react";
import { useIntl } from "react-intl";
import { personalInfoData } from "@/data/sidebar";
import SidebarSection from "./sidebar-section";

interface PersonalInfo {
  id: string;
  titleId: string;
  title: string;
  text: string;
  titleEdited: boolean;
  textEdited: boolean;
}

interface TranslatedPersonalInfo extends PersonalInfo {
  displayTitle: string;
}

interface PersonalInfoSectionProps {
  isEditable: boolean;
}

const PersonalInfoSection = ({ isEditable }: PersonalInfoSectionProps) => {
  const intl = useIntl();
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo[]>(personalInfoData);

  const translatedInfo: TranslatedPersonalInfo[] = useMemo(() => {
    return personalInfo.map((info) => ({
      ...info,
      displayTitle: info.titleEdited
        ? info.title
        : intl.formatMessage({ id: info.titleId }),
    }));
  }, [personalInfo, intl]);

  const handleChange = (field: string, id: string, value: string) => {
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

  const handleRemoveSection = (id: string) => {
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
