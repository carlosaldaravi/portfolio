import { useState } from "react";
import { useIntl } from "react-intl";

const Header = ({
  name,
  surname,
  onChangeName,
  onChangeSurname,
  isEditable,
}) => {
  const intl = useIntl();
  const professionId = "page.developer.fullstack";
  const [profession, setProfession] = useState(
    intl.formatMessage({
      id: professionId,
    })
  );
  const [isManuallyEdited, setIsManuallyEdited] = useState(false);

  const displayedProfession = isManuallyEdited
    ? profession
    : intl.formatMessage({ id: professionId });

  const handleProfessionChange = (value) => {
    setProfession(value);
    setIsManuallyEdited(true);
  };

  return (
    <div className="main__right__header">
      <h1 className="header__title">
        {isEditable ? (
          <>
            <input
              type="text"
              className="header__title__name input_cv_edit"
              value={name}
              size={name.length || 1}
              onChange={(e) => onChangeName(e.target.value)}
            />
            <input
              type="text"
              className="header__title__name input_cv_edit"
              value={surname}
              size={surname.length || 1}
              onChange={(e) => onChangeSurname(e.target.value)}
            />
          </>
        ) : (
          <>
            <span className="header__title__name">{name}</span>{" "}
            <span className="header__title__surname">{surname}</span>
          </>
        )}
      </h1>
      {isEditable ? (
        <input
          type="text"
          className="header__subtitle input_cv_edit"
          value={displayedProfession}
          size={displayedProfession.length || 1}
          onChange={(e) => handleProfessionChange(e.target.value)}
        />
      ) : (
        <h2 className="header__subtitle">{displayedProfession}</h2>
      )}
    </div>
  );
};

export default Header;
