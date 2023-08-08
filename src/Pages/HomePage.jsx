import React from "react";
import Layout from "../Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderSection from "../common/SliderSection";
import Categories from "../Components/Categories";

const images = [
  require("../images/1.jpg"),
  require("../images/2.jpg"),
  require("../images/3.jpg"),
  require("../images/4.jpg"),
];

const HomePage = () => {
  return (
    <Layout>
      <section className="overflow-hidden">
        <SliderSection image={images} />
        <div className=" flex flex-col items-center justify-center mt-8 gap-8">
          <Categories />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
