import SidebarSection from "./sidebar-section";

const PersonalInfoSection = ({ personalInfo, setPersonalInfo, isEditable }) => {
  const handleChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SidebarSection title="Website">
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
      <SidebarSection title="Address">
        {isEditable ? (
          <input
            value={personalInfo.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        ) : (
          <p>{personalInfo.address}</p>
        )}
      </SidebarSection>
      <SidebarSection title="Skype">
        {isEditable ? (
          <input
            value={personalInfo.skype}
            onChange={(e) => handleChange("skype", e.target.value)}
          />
        ) : (
          <p>{personalInfo.skype}</p>
        )}
      </SidebarSection>
      <SidebarSection title="Email">
        {isEditable ? (
          <input
            value={personalInfo.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        ) : (
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        )}
      </SidebarSection>
      <SidebarSection title="GitHub">
        {isEditable ? (
          <input
            value={personalInfo.github}
            onChange={(e) => handleChange("github", e.target.value)}
          />
        ) : (
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            {personalInfo.github}
          </a>
        )}
      </SidebarSection>
    </>
  );
};

export default PersonalInfoSection;
