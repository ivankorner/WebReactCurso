import Navbar from "../Layout/Navbar/Navbar.jsx";
import Footer from "../Layout/Footer/Footer.jsx";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />

      <div>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
