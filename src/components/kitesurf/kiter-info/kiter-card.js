import Section from "@/components/UI/section";
import Avatar from "../../avatar";
import TextKiterCard from "./text-kiter-card";

const KiterCard = ({ me }) => {
  return (
    <Section className="mt-16 animate-appear-1">
      <Avatar src={"/yo-kite.JPG"} alt={"avatar"} />
      <TextKiterCard me={me} />
    </Section>
  );
};

export default KiterCard;
