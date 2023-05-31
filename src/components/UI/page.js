const Page = ({ children, className }) => {
  return (
    <section className={`${className ? className : ""} min-w-lg min-h-[90vh] mt-6 sm:mt-32`}>
      {children}
    </section>
  );
};

export default Page;
