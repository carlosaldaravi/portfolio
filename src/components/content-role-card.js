import Link from "next/link";
import { useState } from "react";
import AvatarSwitch from "./avatar-switch";

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
      onMouseLeave={onMouseLeaveHandler}
    >
      <li className="rounded-2xl bg-gray-800 px-8 py-10">
        <AvatarSwitch src={role.avatar} scale={cardHovered} />
        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
          {role.name}
        </h3>
        {/* <p className="text-sm leading-6 text-gray-400">{role.role}</p> */}
        <ul role="list" className="mt-6 flex justify-center gap-x-6">
          {role.rrss.map((rs) => (
            <li key={rs.name} onClick={(e) => rrssHandler(e, rs.url)}>
              <span className="sr-only">{rs.name}</span>
              {rs.svg}
            </li>
          ))}
        </ul>
      </li>
    </Link>
  );
};

export default ContentRoleCard;
