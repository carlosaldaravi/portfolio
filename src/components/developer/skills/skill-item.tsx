import { useState } from "react";
import { FormattedMessage } from "react-intl";

interface SkillItemData {
  name: string;
  progress: number;
}

interface SkillItemProps {
  color: string;
  item: SkillItemData;
  cardHovered: boolean;
}

const SkillItem = ({ color, item, cardHovered }: SkillItemProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <li
      className={`skillItem text-start sk-cms ${
        cardHovered ? "skillItem--active" : ""
      }`}
      style={{
        '--item-color': color,
        '--item-progress': `${item.progress}`,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span
        className={`spanSkill spanSkill--dynamic ${
          isHover ? "spanSkill--hover spanSkill--arrow" : ""
        }`}
      >
        <FormattedMessage id={item.name} />
      </span>
    </li>
  );
};

export default SkillItem;
