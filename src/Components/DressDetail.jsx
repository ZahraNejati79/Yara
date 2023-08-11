import { Avatar, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAsyncSelectedDress,
  getSelectedDress,
} from "../Features/Dress/dressSlice";
import { useParams } from "react-router-dom";
import { Chat, LocationOn, Star } from "@mui/icons-material";
import {
  fetchComments,
  getAllComments,
} from "../Features/Comment/commentSlice";
import Comments from "./Comments";

const DressDetail = () => {
  //   console.log("useParams", useParams());

  const { dressId } = useParams();
  const dispatch = useDispatch();
  const selectedDress = useSelector(getSelectedDress);
  const comments = useSelector(getAllComments);
  const shopKeeper = {
    firstName: "مریم ",
    lastName: "شوقی",
    img: "https://the-vv.com/storage/image/64E6E752-BD4C-4256-8504-7DB79F930EEB.jpeg",
    mesonName: "بهار ایران",
  };
  useEffect(() => {
    dispatch(fetchAsyncSelectedDress(dressId));
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <section className="flex flex-col md:grid md:grid-cols-[minmax(850px,_1fr)_425px] gap-8">
      <div className="md:col-span-1 flex flex-col ">
        <div className="grid grid-cols-1 md:flex md:items-start md:justify-start md:gap-8 bg-white h-[30rem] rounded-lg overflow-hidden">
          <div className=" flex items-center justify-center max-w-96 h-full">
            <img
              className="w-[10rem] min-h-1/2 md:w-[20rem] md:min-h-full "
              src={selectedDress.url}
              alt=""
            />
          </div>
          <div className="flex flex-col md:mt-8 md:mr-0 mr-8 gap-2">
            <h2 className="mb-8">{selectedDress.descripteon}</h2>
            <div>
              <span>
                <Star />
              </span>
              <span>{selectedDress.rate}</span>
            </div>
            <div>
              <span>
                <LocationOn />
              </span>
              <span>{selectedDress.province} , </span>
              <span>{selectedDress.city}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:col-span-1 max-h-96 flex flex-col justify-evenly gap-4 rounded-lg  px-4">
        <div>
          <h2 className="m-4 font-bold">مزون دار</h2>
          <div className="mr-2 flex ">
            <div>
              <img
                className="w-[8rem] h-[8rem] rounded-full"
                src={shopKeeper.img}
                alt=""
              />
            </div>
            <div className="m-4">
              <span>
                {shopKeeper.firstName}
                {shopKeeper.lastName}
              </span>
              <span className="block text-textSecondary text-sm">
                {shopKeeper.mesonName}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="p-2 w-1/2 border-2 border-primary rounded-lg">
            <span className="text-primary ml-2">
              <Chat />
            </span>
            <span className="text-primary"> گفت‌وگو</span>
          </button>
          <button className="p-2 w-1/2 border-2 border-textSecondary rounded-lg text-textSecondary">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
      <Comments comments={comments} />
    </section>
  );
};

export default DressDetail;
