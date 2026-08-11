interface HeaderProps {
  name: string;
  surname: string;
  profession: string;
  onChangeName: (name: string) => void;
  onChangeSurname: (surname: string) => void;
  onChangeProfession: (profession: string) => void;
  isEditable: boolean;
}

const Header = ({
  name,
  surname,
  profession,
  onChangeName,
  onChangeSurname,
  onChangeProfession,
  isEditable,
}: HeaderProps) => {
  // Fully controlled by the parent (which persists it). The profession comes
  // from the CV config (already localized).
  const displayedProfession = profession;

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
          onChange={(e) => onChangeProfession(e.target.value)}
        />
      ) : (
        <h2 className="header__subtitle">{displayedProfession}</h2>
      )}
    </div>
  );
};

export default Header;
