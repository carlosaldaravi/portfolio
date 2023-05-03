const RowTextKiterCard = ({ textLeft, textRight }) => {
  return (
    <div className="flex">
      <span className="uppercase tracking-xxs sm:tracking-xxs text-gray-400 w-40 sm:w-52 text-xs sm:text-base my-1">
        {textLeft}
      </span>
      <span className="self-center text-gray-300"> {textRight}</span>
    </div>
  );
};

export default RowTextKiterCard;
