import {
  ArrowForward,
  Grading,
  KeyboardArrowLeft,
  LocationOn,
  Logout,
  Settings,
  StarOutline,
  Storefront,
  TurnedIn,
} from "@mui/icons-material";

import NavigationItem from "../../common/NavigationItem";
import ReviewSection from "../accountsPages/ReviewSection/ReviewSection";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="flex  w-full flex-col justify-center xl:grid xl:grid-cols-[22rem_minmax(900px,_1fr)] xl:max-w-2xl gap-4 ">
      <section className="order-1 flex flex-col gap-2 h-fit w-full">
        <div className="bg-white h-fit p-8 w-full">
          <Link to="/account">
            <div className="md:hidden flex items-center justify-start gap-4 border-b border-b-borderColor pb-4 mb-4">
              <div className="cursor-pointer ">
                <ArrowForward />
              </div>
              <span>پروفایل عمومی</span>
            </div>
          </Link>
          <div className="flex items-center justify-start gap-4">
            <div className="w-20 h-20 rounded-full bg-hoverColor"></div>
            <span>زهرا نجاتی</span>
          </div>
        </div>
        <div>
          <ReviewSection />
        </div>
      </section>
      <section className="hidden md:flex bg-white p-4 text-lg text">
        <div className="w-full">
          <div className="flex items-center justify-start gap-4 border-b border-b-borderColor pb-4">
            <div className="h-12 w-12 rounded-full bg-hoverColor"></div>
            <span>زهرا نجاتی</span>
          </div>
          <ul className="border-b border-b-borderColor pb-4">
            <NavigationItem
              to="/account/order"
              icon={<Grading />}
              label="سفارش‌ها"
            />
            <NavigationItem
              to="/account/bookmarks"
              icon={<TurnedIn />}
              label="لیست‌ها"
            />
            <NavigationItem
              to="/account/reviews"
              icon={<StarOutline />}
              label="تجربه‌های اجاره"
            />
            <NavigationItem
              to="/create-meson"
              icon={<Storefront />}
              label="رفتن به مدیریت غرفه"
            />
            <NavigationItem
              to="/account/addresses"
              icon={<LocationOn />}
              label="تغییره موقعیت مکانی"
            />
            <NavigationItem
              to="/account/settings"
              icon={<Settings />}
              label="تنظیمات"
            />
          </ul>
          <div>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:text-primary">
              <div className="flex items-center gap-4">
                <div>
                  <Logout />
                </div>
                <span>خروج</span>
              </div>
              <div>
                <KeyboardArrowLeft />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
