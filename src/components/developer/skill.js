import { createUseStyles } from "react-jss";
import { useState } from "react";
import SkillItem from "./skill-item";

const useStyles = (name, color) =>
  createUseStyles({
    skills: {
      background: `
        linear-gradient(
          0deg,
            ${color} 0 0.5rem,
            #222 0 calc(100% - 0.5rem),
            ${color} 0 100%
        )`,
      "&::before": {
        content: `"${name}"`,
      },
      "&:hover:before": {
        "background-color": color,
      },
      "&:hover:after": {
        "border-top-color": color,
      },
      "&li": {
        "&:hover": {
          "&span": {
            "&:after": {
              background: color,
            },
          },
        },
      },
    },
  });

const Skill = ({ skill }) => {
  const [isHover, setIsHover] = useState(false);
  const classes = useStyles(skill.name, skill.color)();

  return (
    <div className="relative mb-20 mx-auto min-w-md">
      <ul
        className={`skills skills1 pt-0 px-[2.5rem] pb-[2rem] ${classes.skills}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {skill.data.map((item) => (
          <SkillItem key={item.name} color={skill.color} item={item} cardHovered={isHover} />
        ))}
      </ul>
    </div>
  );
};

export default Skill;
