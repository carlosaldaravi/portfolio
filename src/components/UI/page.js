const Page = ({ children, className }) => {
  return (
    <div
      className={`min-w-lg min-h-[65vh] mt-32 sm:mt-44 mb-[20vh] ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Page;
