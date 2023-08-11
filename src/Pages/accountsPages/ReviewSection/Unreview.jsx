import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Rating } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { postComment } from "../../../Features/Comment/commentSlice";
const Unreview = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDress, setSelectedDress] = useState(null);
  const dispatch = useDispatch();
  const dressUnreview = [
    {
      id: 1,
      mesonId: 2,
      title: "Bahar",
      url: "https://donoghte.com/wp-content/uploads/2018/10/2af803e70dbe491f51c2c42a0b036afd-donoghte.com_.jpg",
      descripteon: "لباس عروس بلند استین پفی",
      price: "2,500",
      rate: "4.2",
      province: "تهران",
      city: "اسلام شهر",
      type: "",
      size: "[s,md,lg]",
    },
    {
      id: 2,
      mesonId: 2,
      title: "Bahar",
      url: "https://donoghte.com/wp-content/uploads/2018/10/c08b9fa25d6249ecd086fd34ff0ba45f-donoghte.com_.jpg",
      descripteon: "لباس عروس بلند استین پفی",
      price: "2,500",
      rate: "4.2",
      province: "تهران",
      city: "اسلام شهر",
      type: "",
      size: "[s,md,lg]",
    },
    {
      id: 3,
      mesonId: 2,
      title: "Bahar",
      url: "https://www.soorban.com/images/news/2020/03/images/ba03.jpg",
      descripteon: "لباس عروس ترک ",
      price: "2,500",
      rate: "4.2",
      province: "تهران",
      city: "اسلام شهر",
      type: "",
      size: "[s,md,lg]",
    },
  ];
  const theme = createTheme({
    direction: "rtl",
  });

  const [formInput, setFormInput] = useState({
    clothesId: null,
    text: "",
    rate: 0,
  });
  const clickHandler = (dress) => {
    setShowModal(true);
    formik.resetForm();
    setSelectedDress(dress);
    console.log("dsfdsf", formik);
  };
  const formik = useFormik({
    initialValues: formInput,
    onBlure: (value) => console.log(value),
    validationSchema: Yup.object({
      text: Yup.string().required("وارد کردن کامنت الزامی است"),
      rate: Yup.number().required("وارد کردن امتیاز الزامی است "),
    }),
    validateOnMount: true,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postComment({
        ...formik.values,
      })
    );
    setFormInput({
      clothesId: null,
      text: "",
      rate: 0,
    });
    formik.resetForm();
    setShowModal(false);
    toast.success("کامنت با موفقیت ثبت شد");
  };
  return (
    <div className="bg-white min-h-full flex items-center justify-center w-full py-8">
      {dressUnreview ? (
        <section className="flex flex-col items-center justify-start w-full gap-8">
          {dressUnreview.map((dress) => {
            return (
              <div
                onClick={() => clickHandler(dress)}
                className="cursor-pointer flex items-center justify-between bg-hoverColor w-full max-w-md"
              >
                <div className="w-25 h-40">
                  <img className="w-32 h-40" src={dress.url} alt="" />
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <div> لباسی برای ثبت تجربه وجود ندارد !</div>
      )}
      {showModal ? (
        <section>
          <div className="fixed inset-0  mt-8 mb-8">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="absolute flex items-center justify-center inset-x-0 top-24 w-full max-w-lg px-4 mx-auto bg-white rounded-md shadow-lg p-4 content-center">
              <div className="max-h-[38rem] min-h-40 overflow-y-auto no-scrollbar mt-4 bg-white ">
                <div className="flex flex-col items-start justify-center gap-8">
                  <div className="flex items-center justify-start gap-2">
                    <img
                      className="w-32 h-40"
                      src={selectedDress.url}
                      alt="لباس"
                    />
                    <div className="flex flex-col items-start justify-center gap-4">
                      <div>{selectedDress.descripteon}</div>
                      <div>
                        {selectedDress.province},{selectedDress.city}
                      </div>
                      <div>{selectedDress.price}</div>
                    </div>
                  </div>
                  <form
                    onSubmit={submitHandler}
                    className="flex flex-col items-start justify-center gap-4"
                  >
                    <div className="gap-2 flex flex-col items-start justify-center ">
                      <label htmlFor="text">
                        به این لباس چند امتیاز میدهید؟
                      </label>
                      <ThemeProvider theme={theme}>
                        <Rating
                          name="rtl-rating"
                          value={formik.values.rate}
                          {...formik.getFieldProps("rate")}
                          className="text-primary"
                        />
                      </ThemeProvider>
                      {formik.errors.rate && formik.touched.rate && (
                        <div className="text-xs text-error ">
                          {formik.errors.rate}
                        </div>
                      )}
                    </div>
                    <div className="gap-2 flex flex-col items-start justify-center ">
                      <label htmlFor="text">نظر خود را وارد کنید</label>
                      <textarea
                        name="text"
                        className="outline-none w-72 md:w-96 bg-gray-50  border border-borderColor text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
                        {...formik.getFieldProps("text")}
                      />
                      {formik.errors.text && formik.touched.text && (
                        <div className="text-xs text-error ">
                          {formik.errors.text}
                        </div>
                      )}
                    </div>
                    <button
                      disabled={!formik.isValid}
                      type="submit"
                      className="w-full py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd]"
                    >
                      ثبت تجربه
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Unreview;
