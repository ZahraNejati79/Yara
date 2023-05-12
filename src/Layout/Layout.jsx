import BottomBar from "../Components/BottomBar";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-20 lg:mt-40">{children}</main>
      <BottomBar />
    </>
  );
};

export default Layout;
