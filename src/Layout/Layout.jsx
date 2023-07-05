import BottomBar from "../Components/BottomBar";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20 lg:mt-40">
        <main className=" container flex items-center justify-center ">
          {children}
        </main>
      </div>
      <BottomBar />
    </>
  );
};

export default Layout;
