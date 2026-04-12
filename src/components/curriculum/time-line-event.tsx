import { ReactNode, useState } from "react";

export interface TimeLineItem {
  id: string;
  date: string;
  title: string;
  place: string;
  dateEdited?: boolean;
  titleEdited?: boolean;
  placeEdited?: boolean;
  hours?: string;
}

interface ManualValues {
  date: string | null;
  title: string | null;
  place: string | null;
}

interface TimeLineEventProps<T extends TimeLineItem> {
  item: T;
  onChange: (updatedItem: T) => void;
  isEditable: boolean;
  children: ReactNode;
}

const TimeLineEvent = <T extends TimeLineItem>({
  item,
  onChange,
  isEditable,
  children,
}: TimeLineEventProps<T>) => {
  const [manualValues, setManualValues] = useState<ManualValues>({
    date: null,
    title: null,
    place: null,
  });

  const displayedDate =
    manualValues.date !== null ? manualValues.date : item.date;
  const displayedTitle =
    manualValues.title !== null ? manualValues.title : item.title;
  const displayedPlace =
    manualValues.place !== null ? manualValues.place : item.place;

  const handleBlur = () => {
    onChange({
      ...item,
      date: displayedDate,
      title: displayedTitle,
      place: displayedPlace,
      dateEdited: manualValues.date !== null,
      titleEdited: manualValues.title !== null,
      placeEdited: manualValues.place !== null,
    });
  };

  const handleChange = (field: keyof ManualValues, value: string) => {
    setManualValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="body__section__header">
        {!isEditable ? (
          <>
            <p className="header__date">{displayedDate}</p>
            <p className="header__title text-balance">{displayedTitle}</p>
            <p className="header__place">{displayedPlace}</p>
          </>
        ) : (
          <>
            <input
              type="text"
              className="header__date input_cv_edit"
              value={displayedDate}
              size={displayedDate.length || 1}
              onChange={(e) => handleChange("date", e.target.value)}
              onBlur={handleBlur}
            />
            <input
              type="text"
              className="header__title input_cv_edit"
              value={displayedTitle}
              size={displayedTitle.length || 1}
              onChange={(e) => handleChange("title", e.target.value)}
              onBlur={handleBlur}
            />
            <input
              type="text"
              className="header__place input_cv_edit text-right"
              value={displayedPlace}
              size={displayedPlace.length || 1}
              onChange={(e) => handleChange("place", e.target.value)}
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
