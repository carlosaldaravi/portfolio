import SVG from "../svg";

const SkillStars = ({ starsFilled }) => {
  return (
    <div className="flex h-full self-end">
      {Array.from({ length: 5 }).map((_, i) => (
        <SVG
          key={`star-${i}`}
          type="star"
          fill={i < starsFilled ? "#7290d0" : "#b1b1b1"}
        />
      ))}
    </div>
  );
};

export default SkillStars;
