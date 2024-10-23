import { FormattedMessage } from "react-intl";
import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";

const OtherInfo = ({ titleId, isEditable = false }) => {
  return (
    <CurriculumSection titleId={titleId}>
      <PrettyParagraph>
        <FormattedMessage id="page.curriculum.body.otherInfo.text" />
      </PrettyParagraph>
    </CurriculumSection>
  );
};

export default OtherInfo;
