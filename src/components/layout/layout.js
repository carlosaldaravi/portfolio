import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = ({ children, onChangeTheme }) => {
  return (
    <>
      <Header onChangeTheme={onChangeTheme} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
