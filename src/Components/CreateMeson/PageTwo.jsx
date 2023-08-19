import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import SelectedCities from "../../common/SelectedCity/SelectedCities";
import { useDispatch } from "react-redux";
import { postMeson } from "../../Features/Meson/mesonSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PageTwo = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    address: "",
    city: [],
    img: "https://img.freepik.com/free-photo/beautiful-wedding-bridal-dresses-mannequin-showroom-mall_169016-39170.jpg?w=996&t=st=1692440510~exp=1692441110~hmac=c37cb48bd0a2fc6cad42107472d81f7361dcad99ab394c591038690eef48d741",
    agreements: false,
  });
  const formik = useFormik({
    initialValues: formInput,
    onBlur: (value) => console.log(value),
    validationSchema: Yup.object({
      name: Yup.string().required("نام مزون اجباریه :("),
      address: Yup.string().required("آدرس اینترنتی مزون الزامیه :("),
      city: Yup.array()
        .min(1, "حداقل باید یک شهر انتخاب کنید.")
        .required("شهر خودت را انتخاب کن :("),
      agreements: Yup.bool().oneOf([true], "موافقت با قوانین اجباری است"),
    }),
    validateOnMount: true,
  });

  const handleSetCity = (selectedCity) => {
    formik.setFieldValue("city", selectedCity);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postMeson(formik.values));
    setFormInput({
      name: "",
      address: "",
      city: [],
      img: "https://img.freepik.com/free-photo/beautiful-wedding-bridal-dresses-mannequin-showroom-mall_169016-39170.jpg?w=996&t=st=1692440510~exp=1692441110~hmac=c37cb48bd0a2fc6cad42107472d81f7361dcad99ab394c591038690eef48d741",
      agreements: false,
    });
    Navigate("/dashboard");
    formik.resetForm();
  };

  return (
    <section className="mt-8 w-full md:w-9/12 bg-white border border-borderColor rounded-lg p-4 flex flex-col  items-center justify-center pb-8 px-8 mx-4 gap-4 ">
      <h1 className="mb-8 font-bold text-lg">اطلاعات اولیه</h1>
      <div className="w-full flex flex-col xl:flex-row gap-8 items-start justify-between px-16">
        <form
          onSubmit={submitHandler}
          className="order-2 xl:order-1 flex flex-col items-start justify-center gap-4"
          action="text"
        >
          <Input
            formik={formik}
            name="name"
            label="یه نام برای مزونت انتخاب کن "
          />
          <Input formik={formik} name="address" label="آدرس مزونت کجاست ؟" />
          <SelectedCities
            label="مزونت داخل چه شهری قرار داره؟"
            formik={formik}
            handleSetCity={handleSetCity}
          />

          <div className="w-72 md:w-96">
            <input
              id="agreements"
              name="agreements"
              {...formik.getFieldProps("agreements")}
              className="m-2"
              type="checkbox"
            />
            <label for="agreements">
              قوانین و مقررات مزون‌داری را مطالعه نموده و همه موارد آن را
              میپذیرم.
            </label>
            {formik.errors.agreements && formik.touched.agreements && (
              <div className="text-xs text-error mt-2">
                {formik.errors.agreements}
              </div>
            )}
          </div>

          <button
            disabled={!formik.isValid}
            type="submit"
            className="w-full py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd] mt-4"
          >
            تایید و ادامه
          </button>
        </form>
        <div className="w-96 order-1 bg-hoverColor border border-borderColor p-4">
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
