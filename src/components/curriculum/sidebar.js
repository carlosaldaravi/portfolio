import { FormattedMessage } from "react-intl";
import Bubble from "./bubble";
import Bubbles from "./bubbles";
import SidebarSection from "./sidebar-section";
import SkillStars from "./skill-stars";

const Sidebar = () => {
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
          <p>carlosaldaravi</p>
          <p>.skype</p>
        </SidebarSection>
        <SidebarSection title="Email">
          <a href="mailto:carlosaldaravi@gmail.com">
            <p className="font-bold">carlosaldaravi@</p>
            <p>gmail.com</p>
          </a>
        </SidebarSection>
        <SidebarSection title="GitHub">
          <a href="https://github.com/carlosaldaravi" target="_blank">
            <p>github.com/carlosaldaravi</p>
          </a>
        </SidebarSection>
        <SidebarSection title={<FormattedMessage id="languages" />}>
          <div className="flex items-center justify-end">
            <h3 className="mt-4 font-semibold !text-4xl mr-1 capitalize">
              <FormattedMessage id="spanish" />
            </h3>
            <SkillStars starsFilled={5} />
          </div>
          <div className="flex items-center justify-end">
            <h3 className="mt-4 font-semibold !text-4xl mr-1 capitalize">
              <FormattedMessage id="english" />
            </h3>
            <SkillStars starsFilled={4} />
          </div>
          <div className="flex items-center justify-end">
            <h3 className="mt-4 font-semibold !text-4xl mr-1 capitalize">
              <FormattedMessage id="catalonian" />
            </h3>
            <SkillStars starsFilled={3} />
          </div>
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
              size="48"
              head={true}
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.responsability" />
              }
              color="blue-800"
              size="24"
              top="-6%"
              left="-10%"
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.commitment" />
              }
              color="green-500"
              size="42"
              top="-16%"
              left="37%"
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.proactivity" />
              }
              color="orange-500"
              size="20"
              top="10%"
              left="73%"
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.adaptability" />
              }
              color="red-500"
              size="24"
              top="58%"
              left="-5%"
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.fastLearning" />
              }
              color="pink-500"
              size="24"
              top="52%"
              left="75%"
            />
            <Bubble
              name={
                <FormattedMessage id="page.curriculum.sidebar.personalSkills.problemSolving" />
              }
              color="green-900"
              size="24"
              top="75%"
              left="40%"
            />
          </Bubbles>
        </SidebarSection>
        <SidebarSection
          title={<FormattedMessage id="page.curriculum.sidebar.programming" />}
        >
          <Bubbles>
            <Bubble name="React" color="blue-500" size="48" head={true} />
            <Bubble name="Angular" top="25%" left="-12%" />
            <Bubble name="CSS" top="82%" left="22%" />
            <Bubble name="Node" top="57%" left="67%" />
            <Bubble name="SQL" top="-2%" left="60%" />
            <Bubble name="HTML" top="-18%" left="27%" />
            <Bubble name="Vue" top="62%" left="5%" />
            <Bubble name="Tailwind" top="82%" left="50%" />
            <Bubble name="Laravel" top="36%" left="77%" />
            <Bubble name="GIT" top="4%" left="8%" />
          </Bubbles>
        </SidebarSection>
      </div>
    </div>
  );
};
export default Sidebar;
