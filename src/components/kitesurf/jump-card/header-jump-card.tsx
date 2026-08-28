import { FormattedMessage } from "react-intl";
import { THEMES_TYPES } from "@/types/themes";
import { useTheme } from "@/store/theme-context";
import { getJumpString } from "./jump-texts";
import type { Jump } from "@/types/kitesurf";

interface HeaderJumpCardProps {
  jump: Jump;
}

const HeaderJumpCard = ({ jump }: HeaderJumpCardProps) => {
  const { theme } = useTheme();

  const hangtime = getJumpString(jump, "hangtime");
  const spot = getJumpString(jump, "spot");
  const date = getJumpString(jump, "date");

  return (
    <h3
      className={`webKitFillAvailable flex ml-4 justify-between sm:justify-between items-center text-center sm:text-end font-normal ${
        theme === THEMES_TYPES.light && !jump.best
          ? "text-dark-text"
          : "text-light-text"
      }`}
    >
      <span className="flex justify-between w-56">
        <span>{hangtime}</span>
        <span className="tracking-xxs text-3xl self-end">
          <FormattedMessage id="seconds" />
        </span>
      </span>
      <div>
        <span className={`hidden tracking-xs text-3xl sm:block`}>{date}</span>
        <span className={`hidden tracking-xs text-3xl sm:block`}>{spot}</span>
      </div>
    </h3>
  );
};

export default HeaderJumpCard;
