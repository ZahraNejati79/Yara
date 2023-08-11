import { GppGood, Payment, Storefront } from "@mui/icons-material";
import { GiAmpleDress } from "react-icons/gi";
const PageOne = ({ setCondition }) => {
  return (
    <section className="mt-8 w-full md:w-9/12 bg-white border border-borderColor rounded-lg p-4 flex flex-col items-start justify-center px-8 mx-4 gap-4">
      <h1 className="font-bold text-xl my-4">مراحل فعال شدن مزون</h1>
      <div className="flex flex-col items-start justify-center">
        <div className=" p-4 flex gap-4 items-start justify-center">
          <span>
            <Storefront className="text-4xl text-primary w-12 h-12" />
          </span>
          <div>
            <h2 className="font-bold mb-2">ایجاد مزون</h2>
            <span>
              وارد کردن اطلاعات اولیه، انتخاب اسم مزون، آدرس اینترنتی مزون.
            </span>
          </div>
        </div>
        <div className=" p-4 flex gap-4 items-start justify-center">
          <span>
            <GiAmpleDress className="text-4xl text-primary w-12 h-12" />
          </span>
          <div>
            <h2 className="font-bold mb-2">اضافه کردن لباس</h2>
            <span>اسم و توضیحات لباس، بارگذاری عکس ها.</span>
          </div>
        </div>
        <div className=" p-4 flex gap-4 items-start justify-center">
          <span>
            <GppGood className="text-4xl text-primary w-12 h-12" />
          </span>
          <div>
            <h2 className="font-bold mb-2">احراز هویت</h2>
            <span>بررسی کدملی شما با شماره موبایل توسط یارا</span>
          </div>
        </div>
        <div className=" p-4 flex gap-4 items-start justify-center">
          <span>
            <Payment className="text-4xl text-primary w-12 h-12" />
          </span>
          <div>
            <h2 className="font-bold mb-2">پرداخت قبل از فعال سازی</h2>
            <span>
              بعد از تایید شرایط، پرداخت 40 هزار تومان بابت فعال شدن مزون.
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setCondition(true)}
        className="mr-4 w-72 md:w-5/12 px-8 py-3 bg-primary rounded-lg font-bold"
      >
        ادامه
      </button>
    </section>
  );
};

export default PageOne;
