import Bubbles from "./bubbles";
import Bubble from "./bubble";
import SidebarSection from "./sidebar-section";

const SkillsSection = ({ skills, setSkills, isEditable, isGeneratingPDF }) => {
  const handleSkillChange = (sectionId, skillId, newName) => {
    setSkills(
      skills.map((skill) =>
        skill.id === sectionId
          ? {
              ...skill,
              data: skill.data.map((item) =>
                item.id === skillId ? { ...item, skill: newName } : item
              ),
            }
          : skill
      )
    );
  };

  const handleChangeTitle = (id, value) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === id ? { ...skill, title: value } : skill
      )
    );
  };

  const handleRemoveBubble = (sectionId, skillId) => {
    setSkills(
      skills.map((skill) =>
        skill.id === sectionId
          ? {
              ...skill,
              data: skill.data.filter((item) => item.id !== skillId),
            }
          : skill
      )
    );
  };

  const handleRemoveSection = (id) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  return (
    <>
      {skills.map((skill) => (
        <SidebarSection
          key={skill.id}
          title={skill.title}
          isEditable={isEditable}
          onChangeTitle={(newTitle) => {
            handleChangeTitle(skill.id, newTitle);
          }}
          onRemoveSection={() => handleRemoveSection(skill.id)}
        >
          <Bubbles>
            {skill.data.map((sk) => (
              <Bubble
                key={sk.id}
                name={sk.skill}
                color={sk.color}
                size={sk.size}
                top={sk.top}
                left={sk.left}
                head={sk.head || false}
                isGeneratingPDF={isGeneratingPDF}
                isEditable={isEditable}
                onChangeText={(newName) =>
                  handleSkillChange(skill.id, sk.id, newName)
                }
                onRemoveBubble={() => handleRemoveBubble(skill.id, sk.id)}
              />
            ))}
          </Bubbles>
        </SidebarSection>
      ))}
    </>
  );
};

export default SkillsSection;
