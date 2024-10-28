import SkillStars from "./skill-stars";

const StarsSection = ({ language, starsFilled, isEditable, onChange }) => {
  const handleStarClick = (numStars) => {
    if (isEditable) {
      onChange(numStars);
    }
  };

  return (
    <div className="body__info__section">
      {!isEditable && <h3 className="section__title">{language}</h3>}
      <SkillStars
        starsFilled={starsFilled}
        isEditable={isEditable}
        onStarClick={handleStarClick}
      />
    </div>
  );
};

export default StarsSection;
