import SidebarSection from "./sidebar-section";

const PersonalInfoSection = ({ personalInfo, setPersonalInfo, isEditable }) => {
  const handleChange = (field, id, value) => {
    setPersonalInfo((prev) =>
      prev.map((info) => (info.id === id ? { ...info, [field]: value } : info))
    );
  };

  const handleRemoveSection = (id) => {
    setPersonalInfo((prev) => {
      prev.filter((info) => info.id !== id);
    });
  };

  return (
    <>
      {personalInfo.map((info) => (
        <SidebarSection
          key={info.id}
          title={info.title}
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
