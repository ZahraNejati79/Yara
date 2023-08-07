import { useFormik } from "formik";
import Input from "../common/Input";
import * as Yup from "yup";
import { useState } from "react";

const initialValues = {
  name: "",
  priceType: "",
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

const CreateProduct = () => {
  const [selectedPriceType, setSelectedPriceType] = useState("");

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
    validationSchema: Yup.object({
      name: Yup.string().required("نام لباس اجباری است."),
      priceType: Yup.string().required("انتخاب برچسب قیمت اجباری است."),
      sizes: Yup.object().when("priceType", {
        is: "size",
        then: Yup.object().test(
          "sizeSelected",
          "حداقل باید یک سایز را انتخاب کنید.",
          (value) => value.S || value.M || value.L || value.XL
        ),
      }),
      price: Yup.object().when(["priceType", "sizes"], {
        is: (priceType, sizes) => priceType === "size" && sizes,
        then: Yup.object().shape({
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
      }),
    }),
  });

  const handlePriceTypeChange = (event) => {
    setSelectedPriceType(event.target.value);
    formik.setFieldValue("priceType", event.target.value);
    formik.setFieldValue("sizes", initialValues.sizes);
  };

  const handleSizeChange = (event) => {
    const { name, checked } = event.target;
    formik.setFieldValue(`sizes.${name}`, checked);
  };

  return (
    <section className="bg-white p-4 flex flex-col items-center justify-center gap-4 w-full pt-4 text-textPrimary min-h-full">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="نام لباس را وارد کنید" />

        <div>
          <div>برچسب قیمت:</div>
          <label>
            <input
              type="radio"
              name="priceType"
              value="color"
              checked={selectedPriceType === "color"}
              onChange={handlePriceTypeChange}
            />
            رنگ
          </label>
          <label>
            <input
              type="radio"
              name="priceType"
              value="size"
              checked={selectedPriceType === "size"}
              onChange={handlePriceTypeChange}
            />
            سایز
          </label>
        </div>

        {selectedPriceType === "size" && (
          <div>
            <div>سایز‌های موجود:</div>
            <div className="flex items-center justify-start">
              <label className="m-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="S"
                  checked={formik.values.sizes.S}
                  onChange={handleSizeChange}
                />
                <span className="m-1">S</span>
              </label>
              <label className="m-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="M"
                  checked={formik.values.sizes.M}
                  onChange={handleSizeChange}
                />
                <span className="m-1">M</span>
              </label>
              <label className="m-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="L"
                  checked={formik.values.sizes.L}
                  onChange={handleSizeChange}
                />
                <span className="m-1">L</span>
              </label>
              <label className="m-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="XL"
                  checked={formik.values.sizes.XL}
                  onChange={handleSizeChange}
                />
                <span className="m-1"> XL</span>
              </label>
            </div>

            {formik.values.sizes.S && (
              <Input
                formik={formik}
                name="price.S"
                label="قیمت سایز S"
                type="number"
              />
            )}
            {formik.values.sizes.M && (
              <Input
                formik={formik}
                name="price.M"
                label="قیمت سایز M"
                type="number"
              />
            )}
            {formik.values.sizes.L && (
              <Input
                formik={formik}
                name="price.L"
                label="قیمت سایز L"
                type="number"
              />
            )}
            {formik.values.sizes.XL && (
              <Input
                formik={formik}
                name="price.XL"
                label="قیمت سایز XL"
                type="number"
              />
            )}
          </div>
        )}

        <button type="submit">ذخیره</button>
      </form>
    </section>
  );
};

export default CreateProduct;
