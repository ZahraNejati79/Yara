import React from "react";
import Layout from "../Layout/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Layout>
      <section className="overflow-hidden">
        <Slider {...settings}>
          <div>
            <img
              src={require("../images/1.jpg")}
              alt=""
              className="md:w-5/6 mx-auto "
            />
          </div>
          <div>
            <img
              src={require("../images/2.jpg")}
              alt=""
              className="md:w-5/6 mx-auto "
            />
          </div>
          <div>
            <img
              src={require("../images/3.jpg")}
              alt=""
              className="md:w-5/6 mx-auto "
            />
          </div>
          <div>
            <img
              src={require("../images/4.jpg")}
              alt=""
              className="md:w-5/6 mx-auto "
            />
          </div>
        </Slider>
      </section>
    </Layout>
  );
};

export default HomePage;
