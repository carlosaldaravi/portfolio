import Link from "next/link";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import AvatarSwitch from "./avatar-switch";
import classes from "./content-role-card.module.css";
import { useTheme } from "@/store/theme-context";
import RRSS from "@/components/UI/rrss";
import { THEMES_TYPES } from "@/types/themes";
import { getBgSecondaryColor } from "@/tools/theme";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";
import type { Role } from "@/types/home";
interface ContentRoleCardProps {
  role: Role;
}

const ContentRoleCard = ({ role }: ContentRoleCardProps) => {
  const [cardHovered, setCardHovered] = useState(false);
  const { theme } = useTheme();
  const tracker = useTracker();

  
  const onMouseEnterHandler = () => {
    setCardHovered(true);
  };
  const onMouseLeaveHandler = () => {
    setCardHovered(false);
  };

  const trackHandler = (role: Role) => {
    const event =
      role.to === "/kitesurf"
        ? TRACKING_TYPES.event.kitesurferClick
        : TRACKING_TYPES.event.developerClick;
    tracker.track(event, {
      from: "Home",
    });
  };

  // The card is a list item that *contains* a link, not a link wrapping an
  // <li>: only <li> is valid inside a <ul>. The styled box stays on the link,
  // which fills the (unstyled) item, so the rendering is unchanged.
  return (
    <li>
      <Link
        href={role.to}
        onMouseEnter={onMouseEnterHandler}
        onTouchStart={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        onTouchEnd={onMouseLeaveHandler}
        onClick={() => trackHandler(role)}
        className={`block rounded-2xl px-8 py-10 transition-all duration-500 ${
          cardHovered ? classes.shadow3D : classes.notshadow3D
        } ${getBgSecondaryColor(theme)}`}
      >
        <AvatarSwitch
          src={role.avatar}
          customClass={role.customClass}
          hover={cardHovered}
        />
        <h3
          className={`my-6 font-semibold leading-7 tracking-normal capitalize ${
            theme === THEMES_TYPES.light ? "text-dark-text" : "text-light-text"
          } ${classes.text} ${cardHovered ? "text-[2.5rem]" : ""}`}
        >
          <FormattedMessage id={role.name} />
        </h3>
        <RRSS rrssList={role.rrss} />
      </Link>
    </li>
  );
};

export default ContentRoleCard;
