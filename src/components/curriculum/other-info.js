import { FormattedMessage } from "react-intl";
import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";

const OtherInfo = () => {
  return (
    <CurriculumSection titleId="page.curriculum.body.otherInfo.title">
      <PrettyParagraph>
        <FormattedMessage id="page.curriculum.body.otherInfo.text" />
      </PrettyParagraph>
    </CurriculumSection>
  );
};

export default OtherInfo;
