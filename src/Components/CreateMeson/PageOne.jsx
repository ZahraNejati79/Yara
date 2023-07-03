import { GppGood, Payment, Storefront } from "@mui/icons-material";

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
            <svg
              fill="#647dff"
              height="3rem"
              width="3rem"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 234.123 234.123"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M226.113,228.744c-0.157-2.075-3.931-51.104-10.27-74.793c-8.298-31.015-19.674-53.849-34.439-69.809 c-8.048-8.7-16.679-15.314-27.679-19.858V48.123h-4.618c3.011-6.413,6.827-15.082,7.761-19.675 c2.173-10.688,1.356-17.904-2.57-22.71c-3.106-3.801-7.945-5.729-14.384-5.729c-5.438,0-11.309,1.885-16.025,3.399 c-2.49,0.8-5.591,1.795-6.748,1.795c-1.096-0.008-4.074-0.968-6.468-1.738C105.878,1.922,99.911,0,94.197,0 c-6.503,0-11.355,1.887-14.422,5.607c-3.901,4.732-4.685,11.757-2.542,22.775c0.892,4.586,4.57,13.324,7.447,19.74h-4.954V64.44 c-10,4.542-19.374,11.177-27.446,19.906c-14.74,15.941-25.856,38.769-34.155,69.786c-6.339,23.692-10.007,72.549-10.162,74.617 l-0.361,5.373h218.92L226.113,228.744z M138.726,72.273l-22.5-10.261l-22.5,10.261V43.469l22.5,10.261l22.5-10.261V72.273z"></path>{" "}
              </g>
            </svg>
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