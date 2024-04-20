import CurriculumSection from "./curriculum-section";
import PrettyParagraph from "./pretty-paragraph";
import TimeLineEvent from "./time-line-event";

const HonorAndAward = () => {
  return (
    <CurriculumSection title="Honors & Awards">
      <TimeLineEvent date="10/2017" title="Award" place="Hackaton">
        <PrettyParagraph>
          By the company Dinapsis to the project carried out in group in the
          Hackaton of Tourism that made the University of Alicante in the
          headquarters of Torrevieja.
        </PrettyParagraph>
      </TimeLineEvent>
      <TimeLineEvent date="03/2017" title="Award" place="Hack for good">
        <PrettyParagraph>
          By the company AdSalsa to the project carried out in group in the Hack
          For Good organized by the University of Alicante together with
          Telefónica.
        </PrettyParagraph>
      </TimeLineEvent>
    </CurriculumSection>
  );
};

export default HonorAndAward;
