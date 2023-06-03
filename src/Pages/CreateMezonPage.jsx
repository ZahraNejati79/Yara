import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CreateMezon from "../Components/CreateMezon";

const CreateMezonPage = () => {
  return (
    <main className="w-full container flex flex-col items-center justify-center pt-8 ">
      <header className="w-full md:w-9/12 bg-white border border-borderColor rounded-lg p-4 flex items-center justify-between px-8 mx-4">
        <span className="text-xl md:text-3xl font-bold text-primary italic">
          YaRa
        </span>
        <Link to="/">
          <button className="border-2 border-primary text-primary p-2 md:py-2 md:px-8 font-bold rounded-lg">
            بازگشت به یارا
          </button>
        </Link>
      </header>
      <CreateMezon />
    </main>
  );
};

export default CreateMezonPage;
