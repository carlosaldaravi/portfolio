import Avatar from "../../avatar";
import TextKiterCard from "./text-kiter-card";

const KiterCard = ({ me }) => {
  return (
    <div className="mx-auto mt-20 min-w-md max-w-xl sm:max-w-5xl">
      <Avatar src={"/yo-kite.JPG"} alt={"avatar"} />
      <TextKiterCard me={me} />
    </div>
  );
};

export default KiterCard;
