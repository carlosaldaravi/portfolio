const Page = ({ children, className }) => {
  return (
    <section
      className={`min-w-lg min-h-[90vh] mt-20 sm:mt-32 px-8 ${
        className ? className : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Page;
