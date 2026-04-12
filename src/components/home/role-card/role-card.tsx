import ContentRoleCard from "./content-role-card";

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

interface RoleCardProps {
  roles: Role[];
}

const RoleCard = ({ roles }: RoleCardProps) => {
  return (
    <ul
      role="list"
      className="home__role-card mx-auto sm:mt-14 min-w-lg max-w-xs sm:max-w-5xl grid grid-cols-1 gap-16 sm:grid-cols-2 lg:max-w-7xl lg:gap-8"
    >
      {roles.map((role) => (
        <ContentRoleCard key={role.name} role={role} />
      ))}
    </ul>
  );
};

export default RoleCard;
