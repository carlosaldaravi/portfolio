import Avatar from "../avatar";
import TextKiterCard from "./text-kiter-card";

const KiterCard = () => {
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 min-w-md max-w-3xl">
      <Avatar src={"/yo-kite.JPG"} alt={"avatar"} />
      <TextKiterCard />
    </div>
  );
};

export default KiterCard;
