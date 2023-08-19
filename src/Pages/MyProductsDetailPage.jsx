import { useEffect } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDress,
  fetchAsyncSelectedDress,
  getSelectedDress,
} from "../Features/Dress/dressSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Delete } from "@mui/icons-material";

const MyProductsDetailPage = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { dressId } = useParams();
  const selectedDress = useSelector(getSelectedDress);
  useEffect(() => {
    dispatch(fetchAsyncSelectedDress(dressId));
  }, [dispatch]);
  const deleteHandler = () => {
    dispatch(deleteDress(dressId));
    Navigate("/myProducts");
  };
  return (
    <DashboardLayout>
      <section className="bg-white p-8">
        <div>
          <img
            className="w-[20rem] h-[24rem]"
            src={selectedDress.primaryImage}
            alt=""
          />
        </div>
        <button
          onClick={deleteHandler}
          className="px-4 py-2 bg-primary rounded-lg text-white disabled:bg-[#bdbdbd]"
        >
          <Delete />
          <span>حذف لباس</span>
        </button>
      </section>
    </DashboardLayout>
  );
};

export default MyProductsDetailPage;
