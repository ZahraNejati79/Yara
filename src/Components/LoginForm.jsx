import { useFormik } from "formik";
import Input from "../common/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Features/Auth/authSlice";

const LoginForm = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    mobile: "",
    password: "",
  });
  const formik = useFormik({
    initialValues: formInput,
    onBlure: (value) => console.log(value),
    validationSchema: Yup.object({
      mobile: Yup.string()
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
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formik.values);
    dispatch(loginUser(formik.values));
    setFormInput({
      mobile: "",
      password: "",
    });
    formik.resetForm();
    Navigate("/");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="mb-8 bg-white border border-borderColor rounded-lg p-8 flex flex-col items-center justify-center gap-4"
      action="text"
    >
      <h1 className="text-primary font-bold text-4xl italic">YaRa</h1>
      <div className="w-full">
        <h2 className="font-bold text-xl mb-2 ">ورود</h2>
      </div>

      <Input formik={formik} name="mobile" label="تلفن همراه" />
      <Input formik={formik} name="password" label="رمز عبور" type="password" />
      <button
        disabled={!formik.isValid}
        type="submit"
        className="w-full py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd]"
      >
        ورود
      </button>
      <Link className="w-full" to="/signup">
        <div className="text-textSecondary hover:text-textPrimary cursor-pointer w-full ">
          هنوز ثبت نام نکرده اید؟
        </div>
      </Link>
    </form>
  );
};

export default LoginForm;
