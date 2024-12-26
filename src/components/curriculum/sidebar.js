import PersonalInfoSection from "./personal-info-section";
import LanguagesSection from "./languages-section";
import SkillsSection from "./skills-section";

const Sidebar = ({ isEditable, isGeneratingPDF }) => {
  return (
    <div className="main__left">
      <div className="main__left__body">
        <PersonalInfoSection isEditable={isEditable} />
        <LanguagesSection isEditable={isEditable} />
        <SkillsSection
          isEditable={isEditable}
          isGeneratingPDF={isGeneratingPDF}
        />
      </div>
    </div>
  );
};
export default Sidebar;
