import { useIntl } from "react-intl";

const CurriculumSection = ({ titleId, children }) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: titleId });
  const firstThree = title.substring(0, 3);
  const theRest = title.substring(3);
  return (
    <section className="body__section">
      <h2 className="body__section__title">
        <span className="capitalize">{firstThree}</span>
        <span className="!text-[#4e4e4e]">{theRest}</span>
      </h2>
      {children}
    </section>
  );
};

export default CurriculumSection;
