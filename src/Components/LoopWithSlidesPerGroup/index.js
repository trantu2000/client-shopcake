import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function LoopWithSlidesPerGroup() {
  const categories = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666100389/products-cake/cupcake_cbyhmi.png",
      name: "CupCake",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666100996/products-cake/butter_mvtuza.png",
      name: "Butter",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666101157/products-cake/donut_vsmzj4.png",
      name: "Donut",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666101375/products-cake/cookie_ljlvjw.png",
      name: "Cookie",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666101503/products-cake/red-velvet_ne0in8.png",
      name: "RedVelVed",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666100389/products-cake/cupcake_cbyhmi.png",
      name: "CupCake",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666100996/products-cake/butter_mvtuza.png",
      name: "Butter",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666101157/products-cake/donut_vsmzj4.png",
      name: "Donut",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666101375/products-cake/cookie_ljlvjw.png",
      name: "Cookie",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/da5zt66t6/image/upload/v1666101503/products-cake/red-velvet_ne0in8.png",
      name: "RedVelVed",
    },
  ];
  const SwiperSlideBox = styled("Box")(({ theme }) => ({
    width: "110px",
    height: "110px",
    borderRadius: "100vh",
    backgroundColor: Colors.primary,
    mb: 5,
    mt: 5,
    "&:hover": {
      color: "#fff",
    },

    // border: "1px solid black"
    // [theme.breakpoints.down("md")]: {
    //   width: "350px",
    // },
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
    },
  }));
  const ImageBox = styled("Box")(({ theme }) => ({
    width: "5px",
    height: "5px",

    // border: "1px solid black"
    // [theme.breakpoints.down("md")]: {
    //   width: "350px",
    // },
    [theme.breakpoints.down("sm")]: {
      width: "5px",
      height: "5px",
    },
  }));
  // const ImageUrl = styled("img")(({ src, theme }) => ({
  //   src: `url(${src})`,
  //   width: "50px",
  //   height: "50px",

  //   // border: "1px solid black"
  //   // [theme.breakpoints.down("md")]: {
  //   //   width: "350px",
  //   // },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "5px",
  //     height: "5x",
  //   },
  // }));

  return (
    <>
      <Swiper
        slidesPerView={5}
        // spaceBetween={1}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperSlideBox
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  ml:4,
                  mt:1
                }}
              >
                <img src={item.image} alt={item.name} />
              </Box>
              <Typography
                sx={{
                  mt: 1,
                  mb: 3,
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {item.name}
              </Typography>
            </SwiperSlideBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
