import { useContext } from "react";
import ThemeContext from "@/store/theme-context";
import { FormattedMessage } from "react-intl";

const Company = ({ experience }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;

  return (
    <li className="reveal timeline-event">
      <label className="timeline-event-icon"></label>
      <div className="timeline-event-copy">
        <div className="flex justify-between">
          <p className="timeline-event-thumbnail text-xl font-semibold">
            {experience.startDate} -{" "}
            {experience.endDate || <FormattedMessage id={experience.now} />}
          </p>
          <span className="block font-extralight tracking-xxs ">
            <FormattedMessage id={experience.place} />
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-black">{experience.rol}</h2>
          <h4 className="text-4xl">
            <FormattedMessage id={experience.company} />
          </h4>
          <p className="text-2xl font-extralight">
            <FormattedMessage
              id={experience.description}
              values={{
                link: (
                  <a
                    href="https://www.tamiz.es/"
                    className="underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tamiz.es
                  </a>
                ),
              }}
            />
          </p>
          {experience.achievement.length > 0 && (
            <ul>
              {experience.achievement.map((item) => (
                <li key={item} className="font-thin text-2xl">
                  - <FormattedMessage id={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};

export default Company;
