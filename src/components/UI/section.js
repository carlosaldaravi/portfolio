const Section = ({ children, className }) => {
  return (
    <section
      className={`${
        className ? className : ""
      } mx-auto my-10 min-w-md max-w-xl sm:max-w-6xl lg:max-w-screen-xl animate-appear-1`}
    >
      {children}
    </section>
  );
};

export default Section;
