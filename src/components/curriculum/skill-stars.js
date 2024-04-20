import SVG from "../svg";

const SkillStars = ({ starsFilled }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <SVG
          key={`star-${i}`}
          type="star"
          fill={i < starsFilled ? "#7290d0" : "#b1b1b1"}
        />
      ))}
    </>
  );
};

export default SkillStars;
