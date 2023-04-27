import AvatarSwitch from "./avatar-switch";
import ContentRoleCard from "./content-role-card";

const RoleCard = () => {
  const roles = [
    {
      name: "Fullstack Developer",
      to: "/developer",
      avatar: "/yo-dev.png",
      rrss: [
        {
          name: "Twitter",
          url: "https://twitter.com/carlosaldaravi",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/carlos-aldaravi/",
        },
      ],
    },
    {
      name: "Kitesurfer",
      to: "/kitesurf",
      avatar: "/yo-kite.png",
      rrss: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/carlosaldaravi/?hl=es",
        },
        {
          name: "Tiktok",
          url: "https://www.tiktok.com/@carlosaldaravi",
        },
      ],
    },
  ];

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
