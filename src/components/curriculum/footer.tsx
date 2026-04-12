import { MY_NAME } from "@/constants/constants";
import { format } from "@formkit/tempo";
import { useIntl } from "react-intl";

interface FooterProps {
  name: string;
  surname: string;
}

const Footer = ({ name, surname }: FooterProps) => {
  const intl = useIntl();
  const date = format(new Date(), "full", intl.locale);
  return (
    <footer className="main__right__footer">
      <p className="italic">{date}</p>
      <p className="text-right italic">
        {name} {surname}
      </p>
    </footer>
  );
};
export default Footer;
