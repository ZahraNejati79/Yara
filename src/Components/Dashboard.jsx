import {
  BorderAllOutlined,
  Forum,
  GradingOutlined,
  KeyboardArrowLeft,
  PeopleAltOutlined,
  StoreOutlined,
  Storefront,
} from "@mui/icons-material";
import CreateMesonItem from "../common/CreateMesonItem";
import NavigationItem from "../common/NavigationItem";
import { useState } from "react";

const Dashboard = () => {
  const [createMesonStep, setCreateMesonStep] = useState(2);
  return (
    <>
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
        <div></div>
      </section>
      <section className="bg-white p-4 flex flex-col items-center justify-center gap-4 w-full pt-4 text-textPrimary ">
        <h2 className="w-full flex items-center justify-start md:w-4/5 font-bold py-4 text-xl ">
          <span>مراحل فعال شدن غرفه</span>
        </h2>
        <CreateMesonItem
          label="ایجاد مزون"
          step={0}
          createMesonStep={createMesonStep}
        />
        <CreateMesonItem
          label="آشنایی با مزون داری"
          step={1}
          createMesonStep={createMesonStep}
        />
        <CreateMesonItem
          label="افزودن محصول"
          step={2}
          createMesonStep={createMesonStep}
          description="برای فعال شدن مزون‌تان، حداقل 3 محصول به مزون اضافه کنید. با فعال شدن مزون، محصولاتتان در یارا نمایش داده می‌شوند."
          to="/create-product"
        />
        <CreateMesonItem
          label="اهراز هویت"
          step={3}
          createMesonStep={createMesonStep}
        />
        <CreateMesonItem
          label="بررسی مزون"
          step={4}
          createMesonStep={createMesonStep}
        />
      </section>
      <section className="hidden md:block bg-white p-4 self-start ">
        <div>اینجا فقط یه برنامه ساختگی برای تموم شدن پروژه دانشگاهیه </div>
        <div>زیاد تعجب نکن ، میدونم خیلی خفن شده</div>
      </section>
    </>
  );
};

export default Dashboard;
