const Page = ({ children, className }) => {
  return (
    <div
      className={`min-w-lg min-h-[65vh] mt-20 sm:mt-32 mb-[20vh] ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Page;
