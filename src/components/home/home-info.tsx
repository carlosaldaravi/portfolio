import RoleCard from "./role-card/role-card";
import HomeTitle from "./home-title";
import Section from "@/components/UI/section";
import type { Role } from "@/types/home";
interface HomeInfoProps {
  roles: Role[];
}

const HomeInfo = ({ roles }: HomeInfoProps) => {
  return (
    <Section className="mt-24 px-6 text-center lg:px-8">
      <HomeTitle />
      <RoleCard roles={roles} />
    </Section>
  );
};

export default HomeInfo;
