import { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { personalSkillsData } from "@/data/sidebar";
import Bubble from "./bubble";
import Bubbles from "./bubbles";
import SidebarSection from "./sidebar-section";

const SkillsSection = ({ isEditable, isGeneratingPDF }) => {
  const intl = useIntl();
  const [skills, setSkills] = useState(personalSkillsData);

  const translatedSkills = useMemo(() => {
    return skills.map((section) => ({
      ...section,
      displayTitle: section.titleEdited
        ? section.title
        : intl.formatMessage({ id: section.titleId }),
      data: section.data.map((item) => ({
        ...item,
        displaySkill: item.skillEdited
          ? item.skill
          : intl.formatMessage({ id: item.skill }),
      })),
    }));
  }, [skills, intl]);

  const handleSkillChange = (sectionId, skillId, newName) => {
    setSkills((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              data: section.data.map((item) =>
                item.id === skillId
                  ? { ...item, skill: newName, skillEdited: true }
                  : item
              ),
            }
          : section
      )
    );
  };

  const handleChangeTitle = (id, newTitle) => {
    setSkills((prev) =>
      prev.map((section) =>
        section.id === id
          ? { ...section, title: newTitle, titleEdited: true }
          : section
      )
    );
  };

  const handleRemoveBubble = (sectionId, skillId) => {
    setTimeout(() => {
      setSkills((prev) =>
        prev.map((section) =>
          section.id === sectionId
            ? {
                ...section,
                data: recalculateBubblePositions(
                  sectionId,
                  section.data.filter((item) => item.id !== skillId)
                ),
              }
            : section
        )
      );
    }, 200);
  };

  const recalculateBubblePositions = (sectionId, bubbles) => {
    const center =
      sectionId === "personal-skill" ? { x: 28, y: 28 } : { x: 33, y: 30 };
    const radius = sectionId === "personal-skill" ? 48 : 40;

    const angleStep =
      (2 * Math.PI) / bubbles.filter((bubble) => !bubble.head).length;

    return bubbles.map((bubble, index) => {
      if (bubble.head) return bubble;
      const angle = index * angleStep;
      return {
        ...bubble,
        top: `${center.y + radius * Math.sin(angle)}%`,
        left: `${center.x + radius * Math.cos(angle)}%`,
      };
    });
  };

  const handleRemoveSection = (id) => {
    setSkills((prev) => prev.filter((section) => section.id !== id));
  };

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
                color={bubble.color}
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
