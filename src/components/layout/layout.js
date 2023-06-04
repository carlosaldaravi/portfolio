import Header from "./header";

const Layout = ({ children, onChangeTheme }) => {
  return (
    <>
      <Header onChangeTheme={onChangeTheme} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
