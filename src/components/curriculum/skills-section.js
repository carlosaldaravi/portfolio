import Bubbles from "./bubbles";
import Bubble from "./bubble";

const SkillsSection = ({ skills, setSkills, isEditable, isGeneratingPDF }) => {
  const handleSkillChange = (section, id, value) => {
    setSkills((prev) => ({
      ...prev,
      [section]: prev[section].map((skill) =>
        skill.id === id ? { ...skill, name: value } : skill
      ),
    }));
  };

  return (
    <>
      <Bubbles>
        {skills.personalSkills.map((skill) => (
          <Bubble
            key={skill.id}
            name={
              isEditable ? (
                <input
                  value={skill.name}
                  onChange={(e) =>
                    handleSkillChange(
                      "personalSkills",
                      skill.id,
                      e.target.value
                    )
                  }
                />
              ) : (
                skill.name
              )
            }
            color={skill.color}
            size={skill.size}
            isGeneratingPDF={isGeneratingPDF}
          />
        ))}
      </Bubbles>
      <Bubbles>
        {skills.programmingSkills.map((skill) => (
          <Bubble
            key={skill.id}
            name={
              isEditable ? (
                <input
                  value={skill.name}
                  onChange={(e) =>
                    handleSkillChange(
                      "programmingSkills",
                      skill.id,
                      e.target.value
                    )
                  }
                />
              ) : (
                skill.name
              )
            }
            color={skill.color}
            size={skill.size}
            isGeneratingPDF={isGeneratingPDF}
          />
        ))}
      </Bubbles>
    </>
  );
};

export default SkillsSection;
