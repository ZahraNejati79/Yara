import React, { useState } from "react";
import CityList from "./CityList";
import { provincesFile } from "../../province";
import SearchBox from "../SearchBox";
// const provinces = [
//   {
//     id: 1,
//     name: "تهران",
//     cities: [
//       { id: 1, name: "تهران" },
//       { id: 2, name: "ورامین" },
//       { id: 3, name: "ری" },
//       { id: 4, name: "شهریار" },
//     ],
//   },
//   {
//     id: 2,
//     name: "اصفهان",
//     cities: [
//       { id: 5, name: "اصفهان" },
//       { id: 6, name: "کاشان" },
//       { id: 7, name: "نائین" },
//       { id: 8, name: "شاهین شهر" },
//     ],
//   },
//   {
//     id: 3,
//     name: "فارس",
//     cities: [
//       { id: 9, name: "شیراز" },
//       { id: 10, name: "فسا" },
//       { id: 11, name: "کازرون" },
//       { id: 12, name: "لارستان" },
//     ],
//   },
// ];

function ProvinceList({ setShowModal }) {
  const [provinces, setProvinces] = useState(provincesFile);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);

  const handleProvinceClick = (province) => {
    setSelectedProvince(province);
  };

  const handleCitySelect = (city) => {
    setSelectedCities((prevCities) => [...prevCities, city]);
  };

  const handleCityDeselect = (city) => {
    setSelectedCities((prevCities) =>
      prevCities.filter((c) => c.id !== city.id)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCities);
    setSelectedProvince(null);
    setSelectedCities([]);
    setShowModal(false);
  };
  console.log(selectedProvince);
  return (
    <div>
      {selectedProvince ? (
        <CityList
          setSelectedProvince={setSelectedProvince}
          province={selectedProvince}
          selectedCities={selectedCities}
          onCitySelect={handleCitySelect}
          onCityDeselect={handleCityDeselect}
          onSubmit={handleSubmit}
        />
      ) : (
        <div className="mx-8">
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="font-bold mb-3">استان و شهر مزون‌دار</h1>
            <h2 className="text-textSecondary text-sm mb-2">
              استان مورد نظر خود را انتخاب کنید
            </h2>
            <SearchBox
              words={provinces}
              setWord={setProvinces}
              label="استان‌ها"
            />
          </div>
          {provinces.map((province) => (
            <div className="cursor-pointer flex items-center justify-between  p-4 border-b border-borderColor">
              <button onClick={() => handleProvinceClick(province)}>
                {province.province}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProvinceList;
