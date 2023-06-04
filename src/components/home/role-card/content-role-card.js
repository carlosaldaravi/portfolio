import Link from "next/link";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import AvatarSwitch from "./avatar-switch";
import SVG from "@/components/svg";
import classes from "./content-role-card.module.css";

const ContentRoleCard = ({ role }) => {
  const [cardHovered, setCardHovered] = useState(false);
  const onMouseEnterHandler = () => {
    setCardHovered(true);
  };
  const onMouseLeaveHandler = () => {
    setCardHovered(false);
  };
  const rrssHandler = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank", "noreferrer");
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
        className={`roleCard rounded-2xl px-8 py-10 transition-all duration-500 bg-gray-300 ${
          cardHovered
             ? `${classes.shadow3D}`
             : `${classes.notshadow3D}`
        }`}
      >
        <AvatarSwitch
          src={role.avatar}
          customClass={role.customClass}
          hover={cardHovered}
        />
        <h3
          className={`mt-6 font-semibold leading-7 tracking-normal capitalize ${
            classes.text
          } ${cardHovered ? `text-[2.5rem]` : ""}`}
        >
          <FormattedMessage id={role.name} />
        </h3>
        <ul role="list" className="mt-6 flex justify-center gap-x-6">
          {role.rrss.map((rs) => (
            <li key={rs.name} onClick={(e) => rrssHandler(e, rs.url)}>
              <span className="sr-only">{rs.name}</span>
              <SVG type={rs.name} hover={cardHovered} />
            </li>
          ))}
        </ul>
      </li>
    </Link>
  );
};

export default ContentRoleCard;
