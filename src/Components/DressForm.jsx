import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DressForm = () => {
  const initialValues = {
    name: "",
    category: "",
    image: null,
    sizes: [],
    prices: [],
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("نام لباس را وارد کنید"),
    category: Yup.string().required("دسته بندی لباس را انتخاب کنید"),
    image: Yup.mixed().required("عکس لباس را آپلود کنید"),
    sizes: Yup.array().min(1, "حداقل یک سایز را انتخاب کنید"),
    prices: Yup.array().of(Yup.number().required("قیمت هر سایز را وارد کنید")),
    description: Yup.string().required("توضیحات را وارد کنید"),
  });

  const handleSubmit = (values) => {
    // ارسال داده‌ها به سرور
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">نام لباس:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="category">دسته بندی لباس:</label>
          <Field as="select" id="category" name="category">
            <option value="">انتخاب کنید</option>
            <option value="کوتاه">کوتاه</option>
            <option value="شب">شب</option>
            <option value="مجلسی">مجلسی</option>
          </Field>
          <ErrorMessage name="category" component="div" />
        </div>

        <div>
          <label htmlFor="image">عکس لباس:</label>
          <Field type="file" id="image" name="image" />
          <ErrorMessage name="image" component="div" />
        </div>

        <div>
          <label>سایز های موجود:</label>
          <br />
          <Field type="checkbox" id="size-s" name="sizes" value="S" />
          <label htmlFor="size-s">S</label>
          <br />
          <Field type="checkbox" id="size-m" name="sizes" value="M" />
          <label htmlFor="size-m">M</label>
          <br />
          <Field type="checkbox" id="size-l" name="sizes" value="L" />
          <label htmlFor="size-l">L</label>
          <br />
          <ErrorMessage name="sizes" component="div" />
        </div>

        <div>
          <label>قیمت هر سایز:</label>
          <br />
          <Field type="number" name="prices[0]" />
          <label htmlFor="prices[0]">S</label>
          <br />
          <Field type="number" name="prices[1]" />
          <label htmlFor="prices[1]">M</label>
          <br />
          <Field type="number" name="prices[2]" />
          <label htmlFor="prices[2]">L</label>
          <br />
          <ErrorMessage name="prices" component="div" />
        </div>

        <div>
          <label htmlFor="description">توضیحات:</label>
          <br />
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" />
        </div>

        <button type="submit">ارسال</button>
      </Form>
    </Formik>
  );
};

export default DressForm;
