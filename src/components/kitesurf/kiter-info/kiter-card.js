import Section from "@/components/UI/section";
import Avatar from "../../avatar";
import TextKiterCard from "./text-kiter-card";

const KiterCard = ({ me, src }) => {
  return (
    <Section className="mt-16 animate-appear-1">
      <Avatar src={src} alt={"avatar"} />
      <TextKiterCard me={me} />
    </Section>
  );
};

export default KiterCard;
