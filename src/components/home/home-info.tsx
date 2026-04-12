import RoleCard from "./role-card/role-card";
import HomeTitle from "./home-title";
import Section from "@/components/UI/section";

interface RrssSocial {
  name: string;
  svg: string;
  url: string;
}

interface Role {
  name: string;
  to: string;
  avatar: string;
  customClass: string;
  rrss: RrssSocial[];
}

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
