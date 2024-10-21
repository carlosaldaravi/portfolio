import { MY_NAME } from "@/constants/constants";
import { format } from "@formkit/tempo";
import { useIntl } from "react-intl";

const Footer = () => {
  const intl = useIntl();
  const date = format(new Date(), "full", intl.locale);
  return (
    <>
      <p className="italic">{date}</p>
      <o className="text-right italic">{MY_NAME}</o>
    </>
  );
};
export default Footer;
