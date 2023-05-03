import Link from "next/link";
import { useState } from "react";
import AvatarSwitch from "./avatar-switch";
import SVG from "../svg";
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
      className={`${role.name === 'Kitesurfer' ? classes.rightCard : classes.leftCard}`}
      href={role.to}
      onMouseEnter={onMouseEnterHandler}
      onTouchStart={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onTouchEnd={onMouseLeaveHandler}
    >
      <li
        className={`rounded-2xl px-8 py-10 transform transition duration-700 ${
          cardHovered
            ? `bg-gray-700 shadow-lg shadow-slate-300 ${classes.shadow3D}`
            : "bg-gray-800"
        }`}
      >
        <AvatarSwitch
          src={role.avatar}
          customClass={role.customClass}
          hover={cardHovered}
        />
        <h3
          className={`mt-6 font-semibold leading-7 tracking-normal ${
            classes.text
          } ${cardHovered ? `text-2xl text-white` : "text-base text-gray-400"}`}
        >
          {role.name}
        </h3>
        {/* <p className="text-sm leading-6 text-gray-400">{role.role}</p> */}
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
