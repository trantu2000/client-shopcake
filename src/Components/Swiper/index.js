import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { styled } from "@mui/system";

const SwiperSlideImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "100%",
  height: "500px",

  // border: "1px solid black"
  // [theme.breakpoints.down("md")]: {
  //   width: "350px",
  // },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100px",
  },
}));

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <SwiperSlideImage src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666035609/products-cake/hero-1_pitsjd.jpg" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666035609/products-cake/hero-1_pitsjd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666035609/products-cake/hero-1_pitsjd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666035609/products-cake/hero-1_pitsjd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666035609/products-cake/hero-1_pitsjd.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
