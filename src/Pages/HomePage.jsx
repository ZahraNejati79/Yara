import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { fetchMeson, getAllMesons } from "../Features/Meson/mesonSlice";
import { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const HomePage = () => {
  const mesons = useSelector(getAllMesons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeson());
  }, [dispatch]);

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        {mesons.map((m) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  className="h-[20rem] "
                  component="img"
                  height="140"
                  image={m.img}
                  alt={m.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {m.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`مزون بهار با `}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export default HomePage;
