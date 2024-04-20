const TimeLineEvent = ({ date, title, place, children }) => {
  return (
    <>
      <div className="body__section__header">
        <p className="header__date">{date}</p>
        <p className="header__title text-balance">{title}</p>
        <p className="header__place">{place}</p>
      </div>
      <div className="body__section__body">{children}</div>
    </>
  );
};
export default TimeLineEvent;
