import RoleCard from "./role-card/role-card";
import HomeTitle from "./home-title";

const HomeInfo = ({roles}) => {
  return (
    <section className="bg-gray-900 mt-20 sm:mt-40">
      <div className="px-6 text-center lg:px-8">
        <HomeTitle />
        <RoleCard roles={roles} />
      </div>
    </section>
  );
};

export default HomeInfo;
