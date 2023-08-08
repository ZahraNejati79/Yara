import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const SliderSection = ({ image }) => {
  const [sliderLoaded, setSliderLoaded] = useState(false);

  useEffect(() => {
    console.log("slider");
    setSliderLoaded(true);
  }, []);

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
    <section className="overflow-hidden">
      {sliderLoaded && (
        <Slider {...settings}>
          {image.map((img, index) => (
            <div key={index}>
              <img src={img} alt="" className="md:w-5/6 mx-auto" />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default SliderSection;
