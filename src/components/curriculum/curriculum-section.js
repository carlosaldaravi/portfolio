const CurriculumSection = ({ title, children }) => {
  const firstThree = title.substring(0, 3);
  const theRest = title.substring(3);
  return (
    <section className="body__section">
      <h2 className="body__section__title">
        {firstThree}
        <span className="!text-[#4e4e4e]">{theRest}</span>
      </h2>
      {children}
    </section>
  );
};

export default CurriculumSection;
