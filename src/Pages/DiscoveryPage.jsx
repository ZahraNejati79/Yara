import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { fetchAsyncDresses, getAllDresses } from "../Features/Dress/dressSlice";
import { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const DiscoveryPage = () => {
  const dispatch = useDispatch();
  const dresses = useSelector(getAllDresses);
  useEffect(() => {
    dispatch(fetchAsyncDresses());
  }, [dispatch]);
  return (
    <Layout>
      <div className=" flex items-center justify-center w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {dresses.map((dress) => {
            return (
              <Link to={`/discovery/${dress.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      className="h-[15rem] md:h-[15rem] lg:h-[20rem] xl:h-[30rem] "
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
    </Layout>
  );
};

export default DiscoveryPage;
