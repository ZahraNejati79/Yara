import { TabPanel } from "@mui/lab";
import { TabContext, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import { useState } from "react";
import Unreview from "./Unreview";
import Review from "./Review";
const ReviewSection = () => {
  const [tabvalue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <TabContext className="m-0" value={tabvalue}>
      <TabList className="bg-white m-0 " onChange={handleChange}>
        <Tab className="w-1/2 text-xl" label="در انتظار ثبت تجربه" value="1" />
        <Tab className="w-1/2 text-xl" label="تجربه های ثبت شده" value="2" />
      </TabList>
      <TabPanel className="mt-2 p-0 " value="1">
        <Unreview />
      </TabPanel>
      <TabPanel className="mt-2 p-0" value="2">
        <Review />
      </TabPanel>
    </TabContext>
  );
};

export default ReviewSection;
