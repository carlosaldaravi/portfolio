import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import { FormattedMessage } from "react-intl";

const Company = ({ experience }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  return (
    <li className="timeline-event">
      <label className="timeline-event-icon"></label>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail text-xl font-semibold">
          {experience.startDate} - {experience.endDate || "now"}
        </p>
        <h2 className="font-black">
          <FormattedMessage id={experience.company} />
        </h2>
        <h4 className="font-bold">{experience.rol}</h4>
        <p className="text-xl">
          <FormattedMessage id={experience.description} />
        </p>
      </div>
    </li>
  );
};

export default Company;
