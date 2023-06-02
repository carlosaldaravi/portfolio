import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = (color, progress) =>
  createUseStyles({
    skills: {
      "&::after": {
        background: color,
        "box-shadow": `0px 0px 10px 1px ${color}`,
      },
      "&::before": {
        background: `linear-gradient(
            90deg,
            #2292dd40 calc(calc(${progress} * 1%) + 4px),
            #1c1c1c calc(calc(${progress} * 1%) + 4px)
          )`,
      },
    },
    li: {
      "&::after": {
        width: `calc(calc(${progress} * 1%) - 1px);`,
      },
    },
    // progress bar hovered
    arrow: {
      "&::before": {
        right: `calc(calc(calc(100 - ${progress}) * 1%) - 1rem) !important`,
        "border-right-color": `${color} !important`,
      },
      "&::after": {
        content: `"${progress}"`,
        right: `calc(calc(calc(100 - ${progress}) * 1%) - 4rem)`,
        "counter-reset": `percent ${progress}`,
      },
    },
    spanSkill: {
      color: `${color}`,
      "&::after": {
        content: `"${progress}"`,
      },
    },
    spanHover: {
      "&::after": {
        background: color,
        color: "#222",
      },
    },
  });

const SkillItem = ({ color, item, cardHovered }) => {
  const [isHover, setIsHover] = useState(false);
  const classes = useStyles(color, item.progress)();
  return (
    <li
      className={`skillItem text-start sk-cms ${classes.skills} ${
        cardHovered ? classes.li : ""
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span
        className={`spanSkill ${classes.spanSkill} ${
          isHover ? classes.spanHover + " " + classes.arrow : ""
        }`}
      >
        {item.name}
      </span>
    </li>
  );
};

export default SkillItem;
