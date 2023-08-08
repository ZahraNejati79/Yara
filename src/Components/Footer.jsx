import {
  Chat,
  HourglassTop,
  Instagram,
  InterpreterMode,
  LinkedIn,
  Storefront,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className=" bg-white flex flex-col items-center justify-center mt-8 gap-10 ">
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0 border-b-1 border-x-borderColor p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <Chat className="w-12 h-12 text-primary" />
            </div>
            <div className="text-textSecondary text-sm">
              ارتباط مستقیم با آدم ها
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <HourglassTop className="w-12 h-12 text-primary" />
            </div>
            <div className="text-textSecondary text-sm">صرفه‌جویی در زمان</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <InterpreterMode className="w-12 h-12 text-primary" />
            </div>
            <div className="text-textSecondary text-sm">
              پشتیبانی تلفنی و آنلاین
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <Storefront className="w-12 h-12 text-primary" />
            </div>
            <div className="text-textSecondary text-sm">مزون‌گردی آنلاین</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div>نصب اپلیکیشن یارا</div>
          <div className="flex items-center justify-center gap-2">
            <img
              src={require("../images/cafe-bazar-black.755828a.png")}
              alt="کافه بازار"
            />
            <img
              src={require("../images/myket-black.aab250b.png")}
              alt="مایکت"
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0 border-b-1 border-x-borderColor p-4">
        <div className="flex items-start justify-center gap-20">
          <ul className="flex flex-col gap-2">
            <li className="font-bold mb-3">پشتیبانی</li>
            <li className="hover:text-primary cursor-pointer text-sm">
              تماس با ما
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              پاسخ به سوالات همیشگی
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              گزارش خطای فنی
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              گزارش امکانات جدید
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="font-bold mb-3"> یارا</li>
            <li className="hover:text-primary cursor-pointer text-sm">
              مجله یارا
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              داستان یارا
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              فرصت‌های شغلی
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              چجوری به یارا اعتماد کنم؟
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              یارا چطور کار می‌کند؟
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              قوانین و شرایط بازار
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="font-bold mb-3">اجاره</li>
            <li className="hover:text-primary cursor-pointer text-sm">
              فروش در یارا
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              کیف پول من
            </li>
            <li className="hover:text-primary cursor-pointer text-sm">
              مدیریت مزون
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="font-bold text-sm lg:text-lg">
              ایمیل تان را وارد کنید تا از بروز ترین مزون ها مطلع شوید
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                className="outline-none w-52 md:w-72 bg-gray-50  border border-borderColor text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
                placeholder="ایمیل"
                type="text"
              />
              <button className="px-8 py-2 bg-primary rounded-lg text-white font-bold">
                ارسال
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-20 mt-10">
            <div className="">مارا در شبکه‌های اجتماعی دنبال کنید</div>
            <div className="flex items-center gap-4">
              <Instagram className="cursor-pointer" />
              <LinkedIn className="cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
