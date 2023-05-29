import ContentRoleCard from "./content-role-card";

const RoleCard = ({ roles }) => {
  return (
    <ul
      role="list"
      className="home__role-card mx-auto sm:mt-14 grid min-w-lg max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-7xl lg:gap-8"
    >
      {roles.map((role) => (
        <ContentRoleCard key={role.name} role={role} />
      ))}
    </ul>
  );
};

export default RoleCard;
