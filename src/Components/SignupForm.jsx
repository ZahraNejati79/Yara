import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../Features/Auth/authSlice";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    password: "",
    c_password: "",
  });
  const formik = useFormik({
    initialValues: formInput,
    onBlure: (value) => console.log(value),
    validationSchema: Yup.object({
      first_name: Yup.string().required("اضافه کردن نام اجباری است  ):"),
      last_name: Yup.string().required(
        "اضافه کردن نام خانوادگی اجباری است  ):"
      ),
      mobile: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "تلفن همراه وارد شده نامعتبر است :("
        )
        .required("اضافه کردن شماره همراه اجباری است  ):"),

      password: Yup.string()
        .required("اضافه کردن رمز عبور اجباری است ):")
        .min(6, "رمز عبور حداقل 6 کاراکتر است."),

      c_password: Yup.string()
        .required("تکرار رمز عبور اجباری است")
        .oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد"),
    }),
    validateOnMount: true,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupUser(formik.values));
    setFormInput({
      first_name: "",
      last_name: "",
      mobile: "",
      password: "",
      c_Password: "",
    });
    formik.resetForm();
    navigate("/");
  };
  return (
    <form
      className="mb-8 bg-white border border-borderColor rounded-lg p-8 flex flex-col items-center justify-center gap-4"
      onSubmit={submitHandler}
      action="text"
    >
      <h1 className="text-primary font-bold text-4xl italic">YaRa</h1>
      <div className="w-full mb-2">
        <h2 className="font-bold text-xl ">ثبت نام</h2>
      </div>

      <Input formik={formik} name="first_name" label="نام" />
      <Input formik={formik} name="last_name" label="نام خانوادگی" />
      <Input formik={formik} name="mobile" label="شماره همراه" />
      <Input formik={formik} name="password" label="رمز عبور" type="password" />
      <Input
        formik={formik}
        name="c_password"
        label="تکرار رمز عبور"
        type="password"
      />

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
