import Bubbles from "./bubbles";
import Bubble from "./bubble";
import SidebarSection from "./sidebar-section";
import { FormattedMessage } from "react-intl";

const SkillsSection = ({ skills, setSkills, isEditable, isGeneratingPDF }) => {
  const handleSkillChange = (section, id, value) => {
    setSkills((prev) => ({
      ...prev,
      [section]: prev[section].map((skill) =>
        skill.id === id ? { ...skill, name: value } : skill
      ),
    }));
  };

  const handleRemoveSection = (field) => {
    setSkills((prev) => {
      const updatedInfo = { ...prev };
      delete updatedInfo[field];
      return updatedInfo;
    });
  };

  return (
    <>
      {skills.personalSkills && (
        <SidebarSection
          title={
            <FormattedMessage id="page.curriculum.sidebar.personalSkills" />
          }
          isEditable={isEditable}
          onRemoveSection={() => handleRemoveSection("personalSkills")}
        >
          <Bubbles>
            {skills.personalSkills.map((skill) => (
              <Bubble
                key={skill.id}
                name={skill.skill}
                color={skill.color}
                size={skill.size}
                top={skill.top}
                left={skill.left}
                head={skill.head || false}
                isGeneratingPDF={isGeneratingPDF}
                isEditable={isEditable}
                onChangeText={(newName) =>
                  handleSkillChange("personalSkills", skill.id, newName)
                }
              />
            ))}
          </Bubbles>
        </SidebarSection>
      )}
      {skills.programmingSkills && (
        <SidebarSection
          title={<FormattedMessage id="page.curriculum.sidebar.programming" />}
          isEditable={isEditable}
          onRemoveSection={() => handleRemoveSection("programmingSkills")}
        >
          <Bubbles>
            {skills.programmingSkills.map((skill) => (
              <Bubble
                key={skill.id}
                name={skill.skill}
                color={skill.color}
                size={skill.size}
                top={skill.top}
                left={skill.left}
                head={skill.head || false}
                isGeneratingPDF={isGeneratingPDF}
                isEditable={isEditable}
                onChangeText={(newName) =>
                  handleSkillChange("personalSkills", skill.id, newName)
                }
              />
            ))}
          </Bubbles>
        </SidebarSection>
      )}
    </>
  );
};

export default SkillsSection;
