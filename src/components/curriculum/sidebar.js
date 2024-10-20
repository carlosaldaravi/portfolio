import { FormattedMessage } from "react-intl";
import Bubble from "./bubble";
import Bubbles from "./bubbles";
import SidebarSection from "./sidebar-section";
import SkillStars from "./skill-stars";
import StarsSection from "./starts-section";

const Sidebar = ({ isGeneratingPDF }) => {
  return (
    <div className="main__left">
      <div className="main__left__body">
        <SidebarSection
          title={<FormattedMessage id="page.curriculum.sidebar.website" />}
        >
          <a href="https://carlosaldaravi.com" target="_blank" rel="noreferrer">
            www.carlosaldaravi.com
          </a>
        </SidebarSection>
        <SidebarSection
          title={<FormattedMessage id="page.curriculum.sidebar.address" />}
        >
          <p>Elche, Alicante</p>
        </SidebarSection>
        <SidebarSection title="Skype">
          <p>
            carlosaldaravi
            <br />
            .skype
          </p>
        </SidebarSection>
        <SidebarSection title="Email">
          <a href="mailto:carlosaldaravi@gmail.com">
            <p>
              carlosaldaravi@
              <br />
              gmail.com
            </p>
          </a>
        </SidebarSection>
        <SidebarSection title="GitHub">
          <a href="https://github.com/carlosaldaravi" target="_blank">
            <p>github.com/carlosaldaravi</p>
          </a>
        </SidebarSection>
        <SidebarSection title={<FormattedMessage id="languages" />}>
          <StarsSection titleId="spanish" starsFilled={5} />
          <StarsSection titleId="english" starsFilled={4} />
          <StarsSection titleId="catalonian" starsFilled={3} />
        </SidebarSection>
        <SidebarSection
          title={
            <FormattedMessage id="page.curriculum.sidebar.personalSkills" />
          }
        >
          <Bubbles>
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.teamwork" />
              }
              color="blue-500"
              size="12rem"
              head={true}
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.responsability" />
              }
              color="blue-800"
              size="9.5rem"
              top="-14%"
              left="-14%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.commitment" />
              }
              color="green-500"
              size="7.8rem"
              top="-25%"
              left="35%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.proactivity" />
              }
              color="orange-500"
              size="5em"
              top="10%"
              left="73%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.adaptability" />
              }
              color="red-500"
              size="8rem"
              top="63%"
              left="-8%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.fastLearning" />
              }
              color="pink-500"
              size="7rem"
              top="52%"
              left="75%"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.problemSolving" />
              }
              color="green-900"
              size="7.5rem"
              top="78%"
              left="40%"
              isGeneratingPDF={isGeneratingPDF}
            />
          </Bubbles>
        </SidebarSection>
        <SidebarSection
          title={
            <FormattedMessage
              id="page.curriculum.sidebar.programming"
              classes="mt-60"
            />
          }
        >
          <Bubbles>
            <Bubble
              name="React"
              color="blue-500"
              size="12rem"
              head={true}
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Angular"
              top="25%"
              left="-3%"
              size="5.3rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="CSS"
              top="82%"
              left="22%"
              size="4.7rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Node"
              top="58%"
              left="69%"
              size="4.9rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="SQL"
              top="-2%"
              left="60%"
              size="4.7rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="HTML"
              top="-15%"
              left="29%"
              size="4.9rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Vue"
              top="60%"
              left="7%"
              size="4.6rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Tailwind"
              top="80%"
              left="50%"
              size="5.5rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="Laravel"
              top="28%"
              left="72%"
              size="5rem"
              isGeneratingPDF={isGeneratingPDF}
            />
            <Bubble
              name="GIT"
              top="4%"
              left="8%"
              size="4.8rem"
              isGeneratingPDF={isGeneratingPDF}
            />
          </Bubbles>
        </SidebarSection>
      </div>
    </div>
  );
};
export default Sidebar;
