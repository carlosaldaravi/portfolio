import { useRouter } from "next/router";
import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = ({ children, onChangeTheme }) => {
  const router = useRouter();
  const route = router.pathname;
  return (
    <>
      <Header onChangeTheme={onChangeTheme} />
      <main>{children}</main>
      {route !== "/" && <Footer />}
    </>
  );
};

export default Layout;
