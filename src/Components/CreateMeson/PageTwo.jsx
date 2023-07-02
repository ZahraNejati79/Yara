import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import SelectedCities from "../../common/SelectedCity/SelectedCities";

const initialValues = {
  name: "",
  internetAddress: "",
  city: [],
};

const PageTwo = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
    onBlure: (value) => console.log(value),
    validationSchema: Yup.object({
      name: Yup.string().required("نام مزون اجباریه :("),
      internetAddress: Yup.string().required("آدرس اینترنتی مزون الزامیه :("),
      city: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "تلفن همراه وارد شده نامعتبر است :("
        )
        .required("شهر خودت را انتخاب کن :("),
    }),
    validateOnMount: true,
  });
  return (
    <section className="mt-8 w-full md:w-9/12 bg-white border border-borderColor rounded-lg p-4 flex flex-col  items-center justify-center pb-8 px-8 mx-4 gap-4 ">
      <h1 className="mb-8 font-bold text-lg">اطلاعات اولیه</h1>
      <div className="w-full flex flex-col xl:flex-row gap-8 items-start justify-between px-16">
        <form
          className="flex flex-col items-start justify-center gap-4"
          action="text"
        >
          <Input
            formik={formik}
            name="name"
            label="یه نام برای مزونت انتخاب کن "
          />
          <Input
            formik={formik}
            name="internetAddress"
            label="آدرس اینترنتی مزونت چی باشه؟"
          />
          <SelectedCities />
          <div className="w-72 md:w-96">
            <input
              className="m-2"
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1">
              قوانین و مقررات مزون‌داری را مطالعه نموده و همه موارد آن را
              میپذیرم.
            </label>
          </div>
          <button className="w-full py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd] mt-4">
            تایید و ادامه
          </button>
        </form>
        <div className="w-96 bg-infoCard border border-borderColor p-4">
          <h2 className="font-bold mb-2">راهنمای انتخاب نام مزون</h2>
          <h3 className="mb-2">
            رعایت این موارد می‌تونه به افزایش دیده شدنت کمک کنه:
          </h3>
          <ul className="flex flex-col items-start justify-center gap-2">
            <li>برای مزونت که کوتاه، به یادماندنی باشه.</li>
            <li>
              لطفا در نام مزونت از نقطه، ویرگول، پرانتز، خط‌ تیره و ایموجی
              استفاده نکن.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTwo;
