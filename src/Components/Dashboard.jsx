import CreateMesonItem from "../common/CreateMesonItem";

import { useState } from "react";

const Dashboard = () => {
  const [createMesonStep, setCreateMesonStep] = useState(2);
  return (
    <>
      <section className="bg-white p-4 flex flex-col items-center justify-center gap-4 w-full pt-4 text-textPrimary ">
        <h2 className="w-full flex items-center justify-start md:w-4/5 font-bold py-4 text-xl ">
          <span>مراحل فعال شدن غرفه</span>
        </h2>
        <CreateMesonItem
          label="ایجاد مزون"
          step={0}
          createMesonStep={createMesonStep}
        />
        <CreateMesonItem
          label="آشنایی با مزون داری"
          step={1}
          createMesonStep={createMesonStep}
        />
        <CreateMesonItem
          label="افزودن محصول"
          step={2}
          createMesonStep={createMesonStep}
          description="برای فعال شدن مزون‌تان، حداقل 3 محصول به مزون اضافه کنید. با فعال شدن مزون، محصولاتتان در یارا نمایش داده می‌شوند."
          to="/create-product"
        />
        <CreateMesonItem
          label="احراز هویت"
          step={3}
          createMesonStep={createMesonStep}
        />
        <CreateMesonItem
          label="بررسی مزون"
          step={4}
          createMesonStep={createMesonStep}
        />
      </section>
    </>
  );
};

export default Dashboard;
