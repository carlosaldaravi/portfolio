import { useState, useEffect } from "react";

const TimeLineEvent = ({ item, onChange, isEditable, children }) => {
  const [localDate, setLocalDate] = useState(item ? item.date : "");
  const [localTitle, setLocalTitle] = useState(item ? item.title : "");
  const [localPlace, setLocalPlace] = useState(item ? item.place : "");

  const handleBlur = () => {
    onChange({
      ...item,
      date: localDate,
      title: localTitle,
      place: localPlace,
    });
  };

  return (
    <>
      <div className="body__section__header">
        {!isEditable ? (
          <>
            <p className="header__date">{localDate}</p>
            <p className="header__title text-balance">{localTitle}</p>
            <p className="header__place">{localPlace}</p>
          </>
        ) : (
          <>
            <input
              type="text"
              className="header__date input_cv_edit"
              value={localDate}
              size={localDate.length || 1}
              onChange={(e) => setLocalDate(e.target.value)}
              onBlur={handleBlur}
            />
            <input
              type="text"
              className="header__title input_cv_edit"
              value={localTitle}
              size={localTitle.length || 1}
              onChange={(e) => setLocalTitle(e.target.value)}
              onBlur={handleBlur}
            />
            <input
              type="text"
              className="header__place input_cv_edit text-right"
              value={localPlace}
              size={localPlace.length || 1}
              onChange={(e) => setLocalPlace(e.target.value)}
              onBlur={handleBlur}
            />
          </>
        )}
      </div>
      <div className="body__section__body">{children}</div>
    </>
  );
};

export default TimeLineEvent;
