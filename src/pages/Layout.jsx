import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
