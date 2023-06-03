import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  password: "",
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
    onBlure: (value) => console.log(value),
    validationSchema: Yup.object({
      firstName: Yup.string().required("اضافه کردن نام اجباری است  ):"),
      lastName: Yup.string().required("اضافه کردن نام خانوادگی اجباری است  ):"),
      phoneNumber: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "تلفن همراه وارد شده نامعتبر است :("
        )
        .required("اضافه کردن شماره همراه اجباری است  ):"),

      password: Yup.string()
        .required("اضافه کردن رمز عبور اجباری است ):")
        .min(4, "رمز عبور حداقل 6 کاراکتر است."),
    }),
    validateOnMount: true,
  });

  return (
    <form
      className="mb-8 bg-white border border-borderColor rounded-lg p-8 flex flex-col items-center justify-center gap-4"
      onSubmit={formik.handleSubmit}
      action="text"
    >
      <h1 className="text-primary font-bold text-4xl italic">YaRa</h1>
      <div className="w-full mb-2">
        <h2 className="font-bold text-xl ">ثبت نام</h2>
      </div>

      <Input formik={formik} name="firstName" label="نام" />
      <Input formik={formik} name="lastName" label="نام خانوادگی" />
      <Input formik={formik} name="phoneNumber" label="شماره همراه" />
      <Input formik={formik} name="password" label="رمز عبور" type="password" />
      <button
        disabled={!formik.isValid}
        type="submit"
        className="w-full py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd]"
      >
        ثبت نام
      </button>
      <Link className="w-full" to="/login">
        <div className="text-textSecondary hover:text-textPrimary cursor-pointer w-full ">
          قبلا ثبت نام کرده اید ؟
        </div>
      </Link>
    </form>
  );
};

export default SignupForm;
