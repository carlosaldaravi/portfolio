import PersonalInfoSection from "./personal-info-section";
import LanguagesSection from "./languages-section";
import SkillsSection from "./skills-section";

interface SidebarProps {
  isEditable: boolean;
  isGeneratingPDF: boolean;
}

const Sidebar = ({ isEditable, isGeneratingPDF }: SidebarProps) => {
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
