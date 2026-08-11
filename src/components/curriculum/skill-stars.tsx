import SVG from "../svg";

interface SkillStarsProps {
  starsFilled: number;
  isEditable: boolean;
  onStarClick: (stars: number) => void;
}

const SkillStars = ({ starsFilled, isEditable, onStarClick }: SkillStarsProps) => {
  return (
    <div className="flex h-full self-end">
      {Array.from({ length: 5 }).map((_, i) =>
        isEditable ? (
          <button
            type="button"
            key={`star-${i}`}
            onClick={() => onStarClick(i + 1)}
            aria-label={`${i + 1}/5`}
            className="cursor-pointer bg-transparent border-none p-0"
          >
            <SVG type="star" fill={i < starsFilled ? "#7290d0" : "#b1b1b1"} />
          </button>
        ) : (
          <span key={`star-${i}`}>
            <SVG type="star" fill={i < starsFilled ? "#7290d0" : "#b1b1b1"} />
          </span>
        )
      )}
    </div>
  );
};

export default SkillStars;
