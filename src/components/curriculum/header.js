import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <div className="main__right__header">
      <h1 className="header__title">
        <span className="header__title__name">Carlos</span>{" "}
        <span className="header__title__surname">Aldaravi</span>
      </h1>
      <h2 className="header__subtitle">
        <FormattedMessage id="page.developer.fullstack" />
      </h2>
    </div>
  );
};

export default Header;
