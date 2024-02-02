import React, { useRef, useState } from "react";
import product from "./product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {product.gallary.map((image) => {
          return (
            <SwiperSlide>
              <img className="main-img" src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
