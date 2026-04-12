import Bubble from "./bubble";
import Bubbles from "./bubbles";
import SidebarSection from "./sidebar-section";
import useSkillsState from "./hooks/useSkillsState";

interface SkillsSectionProps {
  isEditable: boolean;
  isGeneratingPDF: boolean;
}

const SkillsSection = ({ isEditable, isGeneratingPDF }: SkillsSectionProps) => {
  const {
    translatedSkills,
    handleSkillChange,
    handleChangeTitle,
    handleRemoveBubble,
    handleRemoveSection,
  } = useSkillsState();

  return (
    <>
      {translatedSkills.map((section) => (
        <SidebarSection
          key={section.id}
          title={section.displayTitle}
          isEditable={isEditable}
          onChangeTitle={(newTitle) => handleChangeTitle(section.id, newTitle)}
          onRemoveSection={() => handleRemoveSection(section.id)}
        >
          <Bubbles>
            {section.data.map((bubble) => (
              <Bubble
                key={bubble.id}
                name={bubble.displaySkill}
                color={bubble.color || ""}
                size={bubble.size}
                top={bubble.top}
                left={bubble.left}
                head={bubble.head || false}
                isGeneratingPDF={isGeneratingPDF}
                isEditable={isEditable}
                onChangeText={(newName) =>
                  handleSkillChange(section.id, bubble.id, newName)
                }
                onRemoveBubble={() => handleRemoveBubble(section.id, bubble.id)}
              />
            ))}
          </Bubbles>
        </SidebarSection>
      ))}
    </>
  );
};

export default SkillsSection;
