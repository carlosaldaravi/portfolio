import SVG from "../svg";
import Bubble from "./bubble";
import Bubbles from "./bubbles";
import SidebarSection from "./sidebar-section";
import SkillStars from "./skill-stars";

const Sidebar = () => {
  return (
    <div className="main__left">
      <div className="main__left__body">
        <SidebarSection title="Website">
          <a href="https://carlosaldaravi.com" target="_blank" rel="noreferrer">
            www.carlosaldaravi.com
          </a>
        </SidebarSection>
        <SidebarSection title="Address">
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
        <SidebarSection title="Languages">
          <div className="flex items-center justify-end">
            <h3 className="mt-4 font-semibold !text-4xl mr-1">Spanish</h3>
            <SkillStars starsFilled={5} />
          </div>
          <div className="flex items-center justify-end">
            <h3 className="mt-4 font-semibold !text-4xl mr-1">English</h3>
            <SkillStars starsFilled={4} />
          </div>
          <div className="flex items-center justify-end">
            <h3 className="mt-4 font-semibold !text-4xl mr-1">Catalonian</h3>
            <SkillStars starsFilled={3} />
          </div>
        </SidebarSection>
        <SidebarSection title="Personal Skills">
          <Bubbles>
            <Bubble name="Team Player" color="blue-500" size="48" head={true} />
            <Bubble
              name="Curiosity"
              color="blue-800"
              size="24"
              top="3%"
              left="0%"
            />
            <Bubble
              name="Clean Code"
              color="green-500"
              size="24"
              top="-16%"
              left="37%"
            />
            <Bubble
              name="Initiative"
              color="orange-500"
              size="24"
              top="10%"
              left="73%"
            />
            <Bubble
              name="Organize"
              color="red-500"
              size="24"
              top="52%"
              left="3%"
            />
            <Bubble
              name="Manage"
              color="pink-500"
              size="24"
              top="52%"
              left="75%"
            />
            <Bubble
              name="Problem Solving"
              color="green-900"
              size="24"
              top="75%"
              left="40%"
            />
          </Bubbles>
        </SidebarSection>
        <SidebarSection title="Programming">
          <Bubbles>
            <Bubble name="React" color="blue-500" size="48" head={true} />
            <Bubble
              name="Angular"
              color="blue-800"
              size="24"
              top="25%"
              left="-8%"
            />
            <Bubble
              name="Vue"
              color="green-500"
              size="20"
              top="82%"
              left="22%"
            />
            <Bubble
              name="Node"
              color="red-500"
              size="24"
              top="47%"
              left="73%"
            />
            <Bubble
              name="Git"
              color="purple-500"
              size="16"
              top="-2%"
              left="60%"
            />
            <Bubble
              name="HTML"
              color="gray-500"
              size="24"
              top="-18%"
              left="27%"
            />
            <Bubble
              name="CSS"
              color="yellow-500"
              size="16"
              top="62%"
              left="5%"
            />
            <Bubble
              name="Tailwind"
              color="pink-500"
              size="24"
              top="72%"
              left="50%"
            />
            <Bubble
              name="Laravel"
              color="green-900"
              size="24"
              top="13%"
              left="73%"
            />
            <Bubble
              name="SQL"
              color="orange-500"
              size="16"
              top="4%"
              left="8%"
            />
          </Bubbles>
        </SidebarSection>
      </div>
    </div>
  );
};
export default Sidebar;
