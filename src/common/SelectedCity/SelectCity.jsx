import { useState } from "react";
import { provinces } from "../../province";
import { ArrowForward, KeyboardArrowDown, Search } from "@mui/icons-material";
const SelectCity = () => {
  const [showModal, setShowModal] = useState(false);
  const [openCity, setOpenCity] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit : ", e.target.value());
    setSelectedCities(e.target.value());
  };
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="gap-2 flex flex-col items-start justify-center "
      >
        <label htmlFor="search">جستوجو</label>
        <input
          value={selectedCities}
          name="search"
          className="outline-none w-72 md:w-96 bg-gray-50  border border-borderColor text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
        />
      </div>
      {showModal ? (
        <div>
          <div className="fixed inset-0  mt-8 mb-8">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>

            <div className="absolute inset-x-0 w-full max-w-lg px-4 mx-auto bg-white rounded-md shadow-lg p-4 content-center">
              <div className="relative top-0 right-0">
                {openCity ? (
                  <div
                    onClick={() => setOpenCity(null)}
                    className="w-full cursor-pointer mb-2"
                  >
                    <ArrowForward />
                  </div>
                ) : (
                  <h1 className="font-bold text-lg mb-4 mr-2">
                    استان و شهر مزون
                  </h1>
                )}
                <div className="bg-secondary w-full border-spacing-1 px-8 py-2 rounded-md hover:opacity-90 ">
                  <Search className="text-textSecondary ml-2" />
                  <input
                    type="text"
                    className="outline-none text-sm text-textPrimary bg-secondary py-3 "
                    placeholder="جستجو در استان ها"
                  />
                </div>
              </div>
              <div className="h-[29rem] min-h-40 overflow-y-auto no-scrollbar mt-4 bg-white">
                {!openCity ? (
                  provinces.map((province) => (
                    <div
                      onClick={() => setOpenCity(province.cities)}
                      className="cursor-pointer flex items-center justify-between mx-8 p-4 border-b border-borderColor"
                    >
                      <span>{province.province}</span>
                      <span>
                        <KeyboardArrowDown />
                      </span>
                    </div>
                  ))
                ) : (
                  <form onSubmit={submitHandler}>
                    {openCity.map((city) => (
                      <div className=" w-full flex items-center justify-start gap-4 px-8 mb-4 ">
                        <label className="cursor-pointer" for={city}>
                          <input
                            className="rounded-full"
                            type="checkbox"
                            id={city}
                            name={city}
                            value={city}
                          />

                          {city}
                        </label>
                      </div>
                    ))}
                    <div className="bg-white sticky bottom-0 ">
                      <div className="items-center gap-2 mt-3 sm:flex ">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          انصراف
                        </button>
                        <button
                          type="submit"
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          تایید
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default SelectCity;
