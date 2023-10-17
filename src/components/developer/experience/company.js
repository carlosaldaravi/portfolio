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
        <div className="flex justify-between">
          <p className="timeline-event-thumbnail text-xl font-semibold">
            {experience.startDate} - {experience.endDate || "now"}
          </p>
          <span className="block font-extralight tracking-xxs ">
            <FormattedMessage id={experience.place} />
          </span>
        </div>
        <h2 className="font-black">
          <FormattedMessage id={experience.company} />
        </h2>
        <h4 className="font-bold">{experience.rol}</h4>
        <p className="text-xl">
          <FormattedMessage id={experience.description} />
        </p>
        {experience.achievement.length > 0 && (
          <ul>
            {experience.achievement.map((item) => (
              <li key={item} className="text-lg">
                - <FormattedMessage id={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default Company;
