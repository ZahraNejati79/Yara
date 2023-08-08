import { Done } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CreateMesonItem = ({
  step,
  createMesonStep,
  label,
  description,
  to = "/",
}) => {
  const [enable, setEnable] = useState(false);
  useEffect(() => {
    if (createMesonStep === step) setEnable(true);
  }, []);
  return (
    <div
      className={`rounded-lg p-4 flex items-center justify-between w-full md:w-4/5 border ${
        createMesonStep >= step
          ? "border-primary bg-bgPrimary"
          : "border-textSecondary bg-white text-textSecondary"
      } ${enable && "border-primary bg-white "} `}
    >
      <div className="flex flex-col items-start justify-center gap-4">
        <div className={enable && "font-bold"}>{label}</div>
        {enable && (
          <div className="flex flex-col items-start justify-center gap-3">
            <div>{description}</div>
            <Link className="self-end" to={to}>
              <button className="border-2 border-primary text-primary bg-white hover:bg-bgPrimary p-2 rounded-md font-bold text-sm ">
                {label}
              </button>
            </Link>
          </div>
        )}
      </div>
      {createMesonStep > step && (
        <div className="text-sm text-primary">
          <Done />
          <span className="px-1"> انجام شد</span>
        </div>
      )}
    </div>
  );
};

export default CreateMesonItem;
