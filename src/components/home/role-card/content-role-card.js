import Link from "next/link";
import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import AvatarSwitch from "./avatar-switch";
import classes from "./content-role-card.module.css";
import ThemeContext from "@/store/theme-context";
import RRSS from "@/components/UI/rrss";

const ContentRoleCard = ({ role }) => {
  const [cardHovered, setCardHovered] = useState(false);
  const themeCtx = useContext(ThemeContext);

  const theme = themeCtx.theme;

  const onMouseEnterHandler = () => {
    setCardHovered(true);
  };
  const onMouseLeaveHandler = () => {
    setCardHovered(false);
  };

  return (
    <Link
      href={role.to}
      onMouseEnter={onMouseEnterHandler}
      onTouchStart={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onTouchEnd={onMouseLeaveHandler}
    >
      <li
        className={`rounded-2xl px-8 py-10 transition-all duration-500 ${
          cardHovered ? `${classes.shadow3D}` : `${classes.notshadow3D}`
        } ${theme === "light" ? "bg-light-secondary" : "bg-dark-secondary"}`}
      >
        <AvatarSwitch
          src={role.avatar}
          customClass={role.customClass}
          hover={cardHovered}
        />
        <h3
          className={`mt-6 font-semibold leading-7 tracking-normal capitalize ${
            theme === "light" ? "text-dark-text" : "text-light-text"
          } ${classes.text} ${cardHovered ? `text-[2.5rem]` : ""}`}
        >
          <FormattedMessage id={role.name} />
        </h3>
        <RRSS rrssList={role.rrss} />
      </li>
    </Link>
  );
};

export default ContentRoleCard;
