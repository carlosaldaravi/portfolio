import { FormattedMessage } from "react-intl";
import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";

const Education = () => {
  return (
    <CurriculumSection titleId={"page.curriculum.body.education.title"}>
      <TimeLineEvent
        date="2015 - 2019"
        title={<FormattedMessage id="page.home.engineer" />}
        place="University of Alicante"
      >
        <PrettyParagraph>
          <FormattedMessage
            id="page.curriculum.body.education.text1"
            values={{
              link: (
                <a
                  href="https://kwee.ovh/"
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kwee.ovh
                </a>
              ),
            }}
          />
        </PrettyParagraph>
        <PrettyParagraph>
          <FormattedMessage
            id="page.curriculum.body.education.text2"
            values={{
              link: (
                <a
                  href="https://ocean-platform.netlify.app/"
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ocean-platform.netlify.app
                </a>
              ),
            }}
          />
        </PrettyParagraph>
        <p className="italic font-medium">GPA: 7,8/10</p>
      </TimeLineEvent>
    </CurriculumSection>
  );
};

export default Education;
