import { FormattedMessage } from "react-intl";
import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";

const HonorAndAward = ({ titleId, isEditable = false }) => {
  return (
    <CurriculumSection titleId={titleId}>
      <TimeLineEvent
        date="10/2017"
        title={
          <FormattedMessage id="page.curriculum.body.honorsAndAwards.award" />
        }
        place="Hackaton"
      >
        <PrettyParagraph>
          <FormattedMessage id="page.curriculum.body.honorsAndAwards.award1" />
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="03/2017"
        title={
          <FormattedMessage id="page.curriculum.body.honorsAndAwards.award" />
        }
        place="Hack for good"
      >
        <PrettyParagraph>
          <FormattedMessage id="page.curriculum.body.honorsAndAwards.award2" />
        </PrettyParagraph>
      </TimeLineEvent>
    </CurriculumSection>
  );
};

export default HonorAndAward;
