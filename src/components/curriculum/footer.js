import { MY_NAME } from "@/constants/constants";
import { format } from "@formkit/tempo";
import { useIntl } from "react-intl";

const Footer = ({ name, surname }) => {
  const intl = useIntl();
  const date = format(new Date(), "full", intl.locale);
  return (
    <>
      <p className="italic">{date}</p>
      <p className="text-right italic">
        {name} {surname}
      </p>
    </>
  );
};
export default Footer;
