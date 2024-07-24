import { Outlet } from "react-router-dom";
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container mx-auto px-6 py-8">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
