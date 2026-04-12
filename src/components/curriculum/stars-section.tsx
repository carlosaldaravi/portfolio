import SkillStars from "./skill-stars";

interface StarsSectionProps {
  language: string;
  starsFilled: number;
  isEditable: boolean;
  onChange: (numStars: number) => void;
}

const StarsSection = ({
  language,
  starsFilled,
  isEditable,
  onChange,
}: StarsSectionProps) => {
  const handleStarClick = (numStars: number) => {
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
