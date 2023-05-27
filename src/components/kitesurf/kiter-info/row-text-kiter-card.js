const RowTextKiterCard = ({ textLeft, textRight }) => {
  return (
    <div className="flex">
      <span className="uppercase tracking-xxs sm:tracking-xxs text-gray-400 w-40 sm:w-96 text-xs sm:text-lg my-1 self-center">
        {textLeft}
      </span>
      <span className="self-center text-2xl text-gray-300"> {textRight}</span>
    </div>
  );
};

export default RowTextKiterCard;
