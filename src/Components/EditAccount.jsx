import { Face } from "@mui/icons-material";
import { useFormik } from "formik";
import Input from "../common/Input";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { editUser, getUser } from "../Features/Auth/authSlice";

const EditAccount = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [formInput, setFormInput] = useState({
    profile: selectedImage,
    firstName: user.firstName,
    lastName: user.lastName,
  });

  const formik = useFormik({
    initialValues: formInput,
    onBlure: (value) => console.log(value),
    validationSchema: Yup.object({
      firstName: Yup.string().required("اضافه کردن نام اجباری است  ):"),
      lastName: Yup.string().required("اضافه کردن نام خانوادگی اجباری است  ):"),
    }),
    validateOnMount: true,
  });
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
      formik.setFieldValue("dirty", true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editUser(formik.values));
    setFormInput({
      firstName: "",
      lastName: "",
    });
    formik.resetForm();
    toast.success("ویرایش شما با موفقیت انجام شد");
    navigate("/");
  };

  return (
    <div className="w-full bg-white h-full flex flex-col items-center justify-center">
      <form
        className="flex flex-col gap-4"
        onSubmit={submitHandler}
        action="text"
      >
        <label
          htmlFor="image-upload"
          className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-300 cursor-pointer"
        >
          {!selectedImage && <Face className="w-20 h-20" />}

          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="عکس انتخاب شده"
              className="rounded-full w-full h-full"
            />
          )}
        </label>
        <Input
          formik={formik}
          name="firstName"
          label="نام"
          onChange={() => formik.setFieldValue("dirty", true)}
        />
        <Input
          formik={formik}
          name="lastName"
          label="نام خانوادگی"
          onChange={() => formik.setFieldValue("dirty", true)}
        />

        <button
          disabled={!formik.isValid || !formik.dirty}
          type="submit"
          className="w-full py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd]"
        >
          ویرایش
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
