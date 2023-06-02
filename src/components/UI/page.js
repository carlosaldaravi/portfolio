const Page = ({ children, className }) => {
  return (
    <section className={`${className ? className : ""} min-w-lg min-h-[90vh] mt-20 sm:mt-32 px-8`}>
      {children}
    </section>
  );
};

export default Page;
