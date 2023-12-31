const Section = ({ children, className }) => {
  return (
    <section
      className={`mx-auto my-10 min-w-md max-w-xl sm:max-w-6xl animate-appear-1 ${
        className ? className : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
