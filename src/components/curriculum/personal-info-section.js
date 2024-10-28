import { PlusIcon } from "@heroicons/react/24/outline";
import SidebarSection from "./sidebar-section";

const PersonalInfoSection = ({ personalInfo, setPersonalInfo, isEditable }) => {
  const handleChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleRemoveSection = (field) => {
    setPersonalInfo((prev) => {
      const updatedInfo = { ...prev };
      delete updatedInfo[field];
      return updatedInfo;
    });
  };

  return (
    <>
      {personalInfo.website && (
        <SidebarSection
          title="Website"
          isEditable={isEditable}
          onRemoveSection={() => handleRemoveSection("website")}
        >
          {isEditable ? (
            <input
              value={personalInfo.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          ) : (
            <a href={personalInfo.website} target="_blank" rel="noreferrer">
              {personalInfo.website}
            </a>
          )}
        </SidebarSection>
      )}
      {personalInfo.address && (
        <SidebarSection
          title="Address"
          isEditable={isEditable}
          onRemoveSection={() => handleRemoveSection("address")}
        >
          {isEditable ? (
            <input
              value={personalInfo.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          ) : (
            <p>{personalInfo.address}</p>
          )}
        </SidebarSection>
      )}
      {personalInfo.skype && (
        <SidebarSection
          title="Skype"
          isEditable={isEditable}
          onRemoveSection={() => handleRemoveSection("skype")}
        >
          {isEditable ? (
            <input
              value={personalInfo.skype}
              onChange={(e) => handleChange("skype", e.target.value)}
            />
          ) : (
            <p>{personalInfo.skype}</p>
          )}
        </SidebarSection>
      )}
      {personalInfo.email && (
        <SidebarSection
          title="Email"
          isEditable={isEditable}
          onRemoveSection={() => handleRemoveSection("email")}
        >
          {isEditable ? (
            <input
              value={personalInfo.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          ) : (
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          )}
        </SidebarSection>
      )}
      {personalInfo.github && (
        <SidebarSection
          title="GitHub"
          isEditable={isEditable}
          onRemoveSection={() => handleRemoveSection("github")}
        >
          {isEditable ? (
            <input
              value={personalInfo.github}
              onChange={(e) => handleChange("github", e.target.value)}
            />
          ) : (
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noreferrer"
            >
              {personalInfo.github}
            </a>
          )}
        </SidebarSection>
      )}
    </>
  );
};

export default PersonalInfoSection;
