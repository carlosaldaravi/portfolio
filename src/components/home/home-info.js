import RoleCard from "./role-card/role-card";
import HomeTitle from "./home-title";
import Section from "@/components/UI/section";

const HomeInfo = ({ roles }) => {
  return (
    <Section className="mt-24 px-6 text-center lg:px-8">
      <HomeTitle />
      <RoleCard roles={roles} />
    </Section>
  );
};

export default HomeInfo;
