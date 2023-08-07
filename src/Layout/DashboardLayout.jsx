import {
  BorderAllOutlined,
  Forum,
  GradingOutlined,
  KeyboardArrowLeft,
  PeopleAltOutlined,
  Storefront,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import NavigationItem from "../common/NavigationItem";
const DashboardLayout = ({ children }) => {
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
      <section className="hidden md:block bg-white p-4 w-full self-start">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-start gap-4">
            <div className="w-20 h-20 rounded-full bg-[#d8d8f7]"></div>
            <span>زهرا نجاتی</span>
          </div>
          <KeyboardArrowLeft />
        </div>
        <div>
          <NavigationItem to="/" icon={<Forum />} label="گفت‌وگو" />
          <NavigationItem to="/" icon={<BorderAllOutlined />} label="محصولات" />
          <NavigationItem to="/" icon={<GradingOutlined />} label="سفارشات" />
          <NavigationItem to="/" icon={<Storefront />} label="تنظیمات مزون" />
          <NavigationItem to="/" icon={<PeopleAltOutlined />} label="مشتریان" />
        </div>
      </section>
      {children}
      <section className="hidden md:block bg-white p-4 self-start ">
        <div>اینجا فقط یه برنامه ساختگی برای تموم شدن پروژه دانشگاهیه </div>
        <div>زیاد تعجب نکن ، میدونم خیلی خفن شده</div>
      </section>
    </main>
  );
};

export default DashboardLayout;
