import ProvinceList from "./ProvinceList";
import { useState } from "react";

const SelectedCities = ({ handleSetCity, formik, label }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="gap-2 flex flex-col items-start justify-center "
      >
        <label htmlFor="search">{label}</label>
        <input
          {...formik.getFieldProps("city")}
          className="outline-none w-72 md:w-96 bg-gray-50 border border-borderColor text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
        />
        {formik.errors.city && formik.touched.city && (
          <div className="text-xs text-error mt-2">{formik.errors.city}</div>
        )}
      </div>
      {showModal ? (
        <div>
          <div className="fixed inset-0  mt-8 mb-8">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>

            <div className="absolute inset-x-0 w-full max-w-lg px-4 mx-auto bg-white rounded-md shadow-lg p-4 content-center">
              <div className="max-h-[38rem] min-h-40 overflow-y-auto no-scrollbar mt-4 bg-white">
                <ProvinceList
                  handleSetCity={handleSetCity}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SelectedCities;
