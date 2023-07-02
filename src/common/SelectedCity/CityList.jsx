import { ArrowForward } from "@mui/icons-material";
import React from "react";
import SearchBox from "../SearchBox";

function CityList({
  setSelectedProvince,
  province,
  selectedCities,
  onCitySelect,
  onCityDeselect,
  onSubmit,
}) {
  const handleCityChange = (e, city) => {
    if (e.target.checked) {
      onCitySelect(city);
    } else {
      onCityDeselect(city);
    }
  };
  console.log(province);
  return (
    <div className="modal mx-8">
      <div className="sticky top-0 bg-white pb-4">
        <div className="flex flex-col items-start justify-center gap-2">
          <div
            onClick={() => setSelectedProvince(null)}
            className="w-full cursor-pointer mb-2"
          >
            <ArrowForward />
          </div>
          <h2 className="mb-2">
            شهرهای استان{" "}
            <span className="text-primary font-bold">{province.province}</span>
          </h2>
          <SearchBox label="شهرها" />
        </div>
      </div>
      <div className="min-h-[20rem]">
        {province.cities.map((city) => (
          <div className="flex items-center justify-between  p-4 ">
            <label className="flex items-center justify-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCities.some((c) => c === city)}
                onChange={(e) => handleCityChange(e, city)}
              />
              {city}
            </label>
          </div>
        ))}
      </div>
      <div className="bg-white sticky bottom-0 ">
        <div className="items-center gap-2 mt-3 sm:flex ">
          <button
            className="w-full mt-2 p-2.5 flex-1 text-gray-800 bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
            onClick={() => setSelectedProvince(null)}
          >
            انصراف
          </button>
          <button
            type="submit"
            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
            onClick={onSubmit}
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityList;
