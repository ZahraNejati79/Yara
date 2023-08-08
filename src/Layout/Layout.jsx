import BottomBar from "../Components/BottomBar";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-4">
        <main className="container flex items-start justify-center ">
          {children}
        </main>
      </div>
      <Footer />
      <BottomBar />
    </>
  );
};

export default Layout;
