import { createUseStyles } from "react-jss";
import { useContext, useState } from "react";
import { useIntl } from "react-intl";
import SkillItem from "./skill-item";
import ThemeContext from "@/store/theme-context";

const useStyles = (name, color) =>
  createUseStyles({
    skills: {
      background: `
        linear-gradient(
          0deg,
            ${color} 0 0.5rem,
            #2e2e2e 0 calc(100% - 0.5rem),
            ${color} 0 100%
        )`,
      "&::before": {
        content: `"${name}"`
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
  const themeCtx = useContext(ThemeContext);
  const intl = useIntl();
  const name = intl.formatMessage({ id: skill.name });
  
  const theme = themeCtx.theme;

  const classes = useStyles(name, skill.color)();
  
  return (
    <div className="relative mb-20 mx-auto min-w-lg lg:min-w-md">
      <ul
        className={`skills skills1 pt-0 px-[2.5rem] pb-[2rem] ${classes.skills} ${theme === "dark" ? "skills-dark" : "skills-light"}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {skill.data.map((item) => (
          <SkillItem
            key={item.name}
            color={skill.color}
            item={item}
            cardHovered={isHover}
          />
        ))}
      </ul>
    </div>
  );
};

export default Skill;
