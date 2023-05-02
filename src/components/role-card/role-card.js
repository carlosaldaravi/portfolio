import ContentRoleCard from "./content-role-card";

const RoleCard = ({roles}) => {

  return (
    <ul
      role="list"
      className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-8"
    >
      {roles.map((role) => (
        <ContentRoleCard key={role.name} role={role} />
      ))}
    </ul>
  );
};

export default RoleCard;
