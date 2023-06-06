const Page = ({ children, className }) => {
  return (
    <div
      className={`min-w-lg min-h-[90vh] mt-20 sm:mt-32 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Page;
