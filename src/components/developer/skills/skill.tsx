import { useContext, useState } from "react";
import { useIntl } from "react-intl";
import SkillItem from "./skill-item";
import ThemeContext from "@/store/theme-context";

interface SkillDataItem {
  name: string;
  progress: number;
}

interface SkillData {
  id: string;
  name: string;
  color: string;
  data: SkillDataItem[];
}

interface SkillProps {
  skill: SkillData;
}

const Skill = ({ skill }: SkillProps) => {
  const [isHover, setIsHover] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const intl = useIntl();
  const name = intl.formatMessage({ id: skill.name });

  const theme = themeCtx.theme;

  return (
    <div className="relative mb-20 mx-auto min-w-lg lg:min-w-md">
      <ul
        className={`skills skills1 pt-0 px-[2.5rem] pb-[2rem] ${theme === "dark" ? "skills-dark" : "skills-light"}`}
        style={{
          '--skill-color': skill.color,
          '--skill-name': `"${name}"`,
          background: `linear-gradient(0deg, ${skill.color} 0 0.5rem, #2e2e2e 0 calc(100% - 0.5rem), ${skill.color} 0 100%)`,
        } as React.CSSProperties}
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
