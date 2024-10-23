import { FormattedMessage } from "react-intl";
import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";

const Experience = ({ titleId, isEditable = false }) => {
  return (
    <CurriculumSection titleId={titleId}>
      <TimeLineEvent
        date={
          <>
            08/2023 - <FormattedMessage id="present" />
          </>
        }
        title="Teach Lead"
        place="EVM Group"
      >
        <PrettyParagraph>
          <FormattedMessage
            id="page.developer.experience.evm"
            values={{
              link: (
                <a
                  href="https://tamiz.es/"
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tamiz.es
                </a>
              ),
            }}
          />
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date={
          <>
            01/2023 - <FormattedMessage id="present" />
          </>
        }
        title="Full-Stack Developer"
        place="Freelance"
      >
        <PrettyParagraph>
          <FormattedMessage id="page.developer.experience.freelance" />
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="04/2021 - 01/2023"
        title="Full-Stack Developer"
        place="Inbenta"
      >
        <PrettyParagraph>
          <FormattedMessage id="page.developer.experience.inbenta" />
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="08/2020 - 04/2021"
        title="Backend Developer"
        place="Z1"
      >
        <PrettyParagraph>
          <FormattedMessage id="page.developer.experience.z1" />
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent
        date="07/2018 - 07/2020"
        title="Full-Stack Developer"
        place="Conwork"
      >
        <PrettyParagraph>
          <FormattedMessage id="page.developer.experience.conwork" />
        </PrettyParagraph>
      </TimeLineEvent>
    </CurriculumSection>
  );
};

export default Experience;
