import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
