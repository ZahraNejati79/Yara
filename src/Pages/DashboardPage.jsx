import { Link } from "react-router-dom";
import Dashboard from "../Components/Dashboard";

const DashboardPage = () => {
  return (
    <main className="flex flex-col items-center justify-center md:grid grid-cols-[20rem_minmax(400px,_800px)_15rem] grid-rows-[min(40px_minmax(200px,_1fr)] gap-4 container text-textPrimary mt-4">
      <div className="hidden md:block col-start-1 col-end-2 bg-white p-4 h-16 italic font-bold text-3xl text-borderPrimary">
        YaRa
      </div>
      <div className="hidden md:flex bg-white h-16 items-center justify-between p-4 px-8 col-start-2 col-end-4">
        <span className=" text-xl md:text-2xl text-textPrimary italic">
          سلام، زهرا نجاتی عزیز
        </span>
        <Link to="/">
          <button className="border-2 border-borderPrimary text-borderPrimary p-2 md:py-2 md:px-8 font-bold rounded-lg">
            بازگشت به یارا
          </button>
        </Link>
      </div>

      <Dashboard />
    </main>
  );
};

export default DashboardPage;
