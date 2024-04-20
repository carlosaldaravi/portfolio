import { format } from "@formkit/tempo";

const Footer = () => {
  const l = "en";
  const date = format(new Date(), "full", l);
  return (
    <>
      <p className="italic">{date}</p>
      <o className="text-right italic">Carlos Aldaravi</o>
    </>
  );
};
export default Footer;
