import { GiAmpleDress, GiDress } from "react-icons/gi";
import { PiDressFill } from "react-icons/pi";
const Categories = () => {
  return (
    <section className="flex items-center justify-center gap-8 w-full">
      <div className="hover:text-primary cursor-pointer flex flex-col items-center justify-between gap-2">
        <div className="flex items-center justify-center w-20 h-20 bg-white hover:bg-hoverColor">
          <GiAmpleDress className="w-12 h-12 text-primary" />
        </div>
        <div>لباس عروس</div>
      </div>
      <div className="hover:text-primary cursor-pointer flex flex-col items-center justify-between gap-2">
        <div className="flex items-center justify-center w-20 h-20 bg-white hover:bg-hoverColor">
          <GiDress className="w-12 h-12 text-primary" />
        </div>
        <div>لباس مجلسی</div>
      </div>
      <div className="hover:text-primary cursor-pointer flex flex-col items-center justify-between gap-2">
        <div className="flex items-center justify-center w-20 h-20 bg-white hover:bg-hoverColor">
          <PiDressFill className="w-12 h-12 text-primary" />
        </div>
        <div>لباس کوتاه</div>
      </div>
    </section>
  );
};

export default Categories;
