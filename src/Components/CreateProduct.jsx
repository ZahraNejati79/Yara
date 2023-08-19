import { useFormik } from "formik";
import Input from "../common/Input";
import * as Yup from "yup";
import { useState } from "react";
import { GiLargeDress } from "react-icons/gi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteDress, postDress } from "../Features/Dress/dressSlice";
import { omit } from "lodash";

const CreateProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const handleSizeChange = (event) => {
    const { name, checked } = event.target;
    formik.setFieldValue(`sizes.${name}`, checked);
  };
  const initialValues = {
    name: "",
    description: "",
    mesonId: null,
    categoryId: null,
    primaryImage: selectedImage,
    material: "",
    color: "",
    province: "تهران",
    city: "اسلام‌شهر",
    rate: 4.5,
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false,
    },
    price: {
      S: "",
      M: "",
      L: "",
      XL: "",
    },
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("نام لباس اجباری است."),
      description: Yup.string().required(
        "اقزودن توضیحات برای نمایش به کاربران الزامی است"
      ),
      categoryId: Yup.number().required("لطفاً نوع لباس را انتخاب کنید"),
      color: Yup.string().required("وارد کردن رنگ لباس اجباری است"),
      material: Yup.string().required("وارد کردن جنس لباس اجباری است"),
      sizes: Yup.object().test(
        "atLeastOneSize",
        "حداقل باید یک سایز انتخاب کنید",
        (sizes) => {
          return Object.values(sizes).some((selected) => selected);
        }
      ),
    }),
    price: Yup.object().shape({
      S: Yup.number().when("sizes.S", {
        is: true,
        then: Yup.number().required("قیمت سایز S اجباری است."),
      }),
      M: Yup.number().when("sizes.M", {
        is: true,
        then: Yup.number().required("قیمت سایز M اجباری است."),
      }),
      L: Yup.number().when("sizes.L", {
        is: true,
        then: Yup.number().required("قیمت سایز L اجباری است."),
      }),
      XL: Yup.number().when("sizes.XL", {
        is: true,
        then: Yup.number().required("قیمت سایز XL اجباری است."),
      }),
    }),
  });
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        formik.setFieldValue("primaryImage", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSelectedImage(null);
    const sizes = Object.keys(formik.values.sizes).filter(
      (size) => formik.values.sizes[size]
    );
    const price = Math.max(
      ...Object.values(formik.values.price).filter((value) => value !== "")
    );
    const newValues = omit(formik.values, ["sizes", "price"]);
    dispatch(postDress({ ...newValues, sizes, price }));
    formik.resetForm();
    toast.success("لباس با موفقیت ثبت شد");
  };

  return (
    <section className="bg-white p-4 flex flex-col items-center justify-center gap-4 w-full pt-4 text-textPrimary min-h-full">
      <form
        className="flex flex-col items-center justify-center gap-4"
        onSubmit={submitHandler}
      >
        <Input formik={formik} name="name" label="نام لباس را وارد کنید" />
        <section
          className="flex flex-col items-start justify-start w-full"
          {...formik.getFieldProps("categoryId")}
        >
          <label htmlFor="categoryId">نوع لباس را مشخص کنید</label>
          <div className="flex items-center justify-start gap-8">
            <label className="cursor-pointer ">
              <input
                className="accent-primary ml-2"
                type="radio"
                name="categoryId"
                value="1"
              />
              مجلسی
            </label>
            <label className="cursor-pointer ">
              <input
                className="accent-primary ml-2"
                type="radio"
                name="categoryId"
                value="2"
              />
              عروس
            </label>
            <label className="cursor-pointer ">
              <input
                className="accent-primary ml-2"
                type="radio"
                name="categoryId"
                value="3"
              />
              کوتاه
            </label>
          </div>
          {formik.errors.categoryId && formik.touched.categoryId && (
            <div className="text-xs text-error ">
              {formik.errors.categoryId}
            </div>
          )}
        </section>
        <section className="flex flex-col items-start justify-start w-full">
          <div {...formik.getFieldProps("sizes")}>
            <div>سایز‌های موجود:</div>
            <div className="flex items-center justify-start">
              <label className="m-4 cursor-pointer">
                <input
                  className="accent-primary"
                  type="checkbox"
                  name="S"
                  checked={formik.values.sizes.S}
                  onChange={handleSizeChange}
                />
                <span className="m-1">S</span>
              </label>
              <label className="m-4 cursor-pointer">
                <input
                  className="accent-primary"
                  type="checkbox"
                  name="M"
                  checked={formik.values.sizes.M}
                  onChange={handleSizeChange}
                />
                <span className="m-1">M</span>
              </label>
              <label className="m-4 cursor-pointer">
                <input
                  className="accent-primary"
                  type="checkbox"
                  name="L"
                  checked={formik.values.sizes.L}
                  onChange={handleSizeChange}
                />
                <span className="m-1">L</span>
              </label>
              <label className="m-4 cursor-pointer">
                <input
                  className="accent-primary"
                  type="checkbox"
                  name="XL"
                  checked={formik.values.sizes.XL}
                  onChange={handleSizeChange}
                />
                <span className="m-1"> XL</span>
              </label>
            </div>
            {formik.errors.sizes && formik.touched.sizes && (
              <div className="text-xs text-error ">{formik.errors.sizes}</div>
            )}
          </div>
          <div
            {...formik.getFieldProps("price")}
            className="flex flex-col gap-4"
          >
            {formik.values.sizes.S && (
              <Input
                name="price.S"
                formik={formik}
                label="قیمت سایز S"
                type="number"
              />
            )}
            {formik.values.sizes.M && (
              <Input
                name="price.M"
                formik={formik}
                label="قیمت سایز M"
                type="number"
              />
            )}
            {formik.values.sizes.L && (
              <Input
                name="price.L"
                formik={formik}
                label="قیمت سایز L"
                type="number"
              />
            )}
            {formik.values.sizes.XL && (
              <Input
                name="price.XL"
                formik={formik}
                label="قیمت سایز XL"
                type="number"
              />
            )}
          </div>
        </section>
        <section className="flex flex-col items-start justify-start w-full gap-4">
          <span>عکس لباس را آپلود کنید</span>
          <label
            htmlFor="image-upload"
            className="flex items-center justify-center w-20 h-20  border border-borderColor cursor-pointer"
          >
            {!selectedImage && (
              <GiLargeDress className="w-20 h-20 text-primary" />
            )}
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
                className="w-full h-full"
              />
            )}
          </label>
        </section>
        <Input formik={formik} name="material" label="جنس لباس" />
        <Input formik={formik} name="color" label="رنگ لباس" />
        <Input
          formik={formik}
          name="description"
          label="توضیحات مربوط به لباس "
        />
        <button
          disabled={!formik.isValid}
          type="submit"
          className="w-full py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd] mt-4"
        >
          ذخیره
        </button>
      </form>
    </section>
  );
};

export default CreateProduct;
