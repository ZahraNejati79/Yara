import BottomBar from "../Components/BottomBar";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <BottomBar />
    </>
  );
};

export default Layout;
