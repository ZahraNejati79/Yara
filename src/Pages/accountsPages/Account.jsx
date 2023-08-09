import {
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
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <div className="w-full max-w-md h-screen overflow-y-auto ">
      <section className="bg-white flex items-center justify-between p-4 border-b border-b-borderColor">
        <Link to="/user">
          <div className="flex items-center justify-start gap-4">
            <div className="w-20 h-20 bg-primary rounded-full"></div>
            <span>زهرا نجاتی</span>
          </div>
        </Link>
        <div>
          <KeyboardArrowLeft />
        </div>
      </section>
      <section className="bg-white">
        <ul className=" border-b border-b-borderColor pb-4">
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
            label="تغییر موقعیت مکانی"
          />
          <NavigationItem
            to="/account/edit"
            icon={<Settings />}
            label="تنظیمات"
          />
        </ul>
      </section>
      <section className="bg-white">
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
      </section>
    </div>
  );
};

export default Account;
