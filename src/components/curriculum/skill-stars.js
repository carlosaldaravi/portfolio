import SVG from "../svg";

const SkillStars = ({ starsFilled, isEditable, onStarClick }) => {
  return (
    <div className="flex h-full self-end">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={`star-${i}`}
          onClick={() => isEditable && onStarClick(i + 1)}
          style={{ cursor: isEditable ? "pointer" : "default" }}
        >
          <SVG type="star" fill={i < starsFilled ? "#7290d0" : "#b1b1b1"} />
        </span>
      ))}
    </div>
  );
};

export default SkillStars;
