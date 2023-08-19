import { useEffect, useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { fetchAsyncDresses, getAllDresses } from "../Features/Dress/dressSlice";

const MyProductsPage = () => {
  const [myDress, setMyDress] = useState([]);
  const dispatch = useDispatch();
  const dresses = useSelector(getAllDresses);
  useEffect(() => {
    dispatch(fetchAsyncDresses());
  }, []);

  useEffect(() => {
    const filteredDress = dresses.filter((dress) => dress.mesonId == 6);
    setMyDress(filteredDress);
  }, [dresses]);

  return (
    <DashboardLayout>
      <div className=" flex items-center justify-center w-full px-4">
        <div className="grid grid-cols-2  gap-2 ">
          {myDress.map((dress) => {
            return (
              <Link to={`/myProducts/${dress.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      className="h-[20rem]  min-w-[20rem]"
                      component="img"
                      height="140"
                      image={dress.primaryImage}
                      alt={dress.name}
                    />

                    <CardContent>
                      <Typography gutterBottom variant="div" component="div">
                        {dress.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {`لباس عروس خارجی`}
                      </Typography>
                      <div>{dress.price},000 هزار تومان </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProductsPage;
