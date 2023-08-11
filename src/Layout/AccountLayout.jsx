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
import NavigationItem from "../common/NavigationItem";

const AccountLayout = ({ children }) => {
  return (
    <div className="flex  w-full flex-col justify-center xl:grid xl:grid-cols-[22rem_minmax(900px,_1fr)] xl:max-w-2xl gap-4 ">
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
              to="/account/edit"
              icon={<Settings />}
              label="تنظیمات"
            />
          </ul>
          <div>
            <div className="text-base text-textPrimary flex items-center justify-between p-4 cursor-pointer hover:text-primary">
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
      <section className="order-1 h-full w-full">{children}</section>
    </div>
  );
};

export default AccountLayout;
