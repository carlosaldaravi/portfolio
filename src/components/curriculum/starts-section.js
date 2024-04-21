import { FormattedMessage } from "react-intl";
import SkillStars from "./skill-stars";

const StarsSection = ({ titleId, starsFilled }) => {
  return (
    <div className="body__info__section">
      <h3 className="section__title">
        <FormattedMessage id={titleId} />
      </h3>
      <SkillStars starsFilled={starsFilled} />
    </div>
  );
};

export default StarsSection;
