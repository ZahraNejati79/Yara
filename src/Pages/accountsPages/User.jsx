import { ArrowForward } from "@mui/icons-material";
import ReviewSection from "../accountsPages/ReviewSection/ReviewSection";
import { Link } from "react-router-dom";
import AccountLayout from "../../Layout/AccountLayout";
const User = () => {
  return (
    <AccountLayout>
      <div className=" flex flex-col gap-2 ">
        <div className="bg-white h-fit p-8 w-full">
          <Link to="/account">
            <div className="md:hidden flex items-center justify-start gap-4 border-b border-b-borderColor pb-4 mb-4">
              <div className="cursor-pointer ">
                <ArrowForward />
              </div>
              <span>پروفایل عمومی</span>
            </div>
          </Link>
          <div className="flex items-center justify-start gap-4">
            <div className="w-20 h-20 rounded-full bg-hoverColor"></div>
            <span>زهرا نجاتی</span>
          </div>
        </div>
        <div>
          <ReviewSection />
        </div>
      </div>
    </AccountLayout>
  );
};

export default User;
