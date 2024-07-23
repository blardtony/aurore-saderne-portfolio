import { Outlet } from "react-router-dom";
import HeaderTwo from "../header2/HeaderTwo";

const Layout: React.FC = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container mx-auto px-6 py-8">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
