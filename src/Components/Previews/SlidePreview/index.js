import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Avatar, Box, Rating, Typography } from "@mui/material";
import { Colors } from "../../../styles/theme";

const Previews = [
  {
    id: 1,
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    name: "Nguyễn Mai Linh",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 2,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 3,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 4,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 5,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 6,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 7,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 8,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 9,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 10,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 11,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 12,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 13,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },

  {
    id: 14,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
  {
    id: 15,
    name: "Nguyễn Mai Linh",
    avatar:"https://res.cloudinary.com/da5zt66t6/image/upload/v1663604794/avatars/q2is4myiyxgayrmcyski.png",
    address: "Q.Gò Vấp",
    rate: "5",
  },
];

export default function SlidePreview() {
  const [value, setValue] = React.useState(4);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Previews.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                width: 450,
                height: 160,
                padding: 4,
                backgroundColor: Colors.body_bg,
              }}
            >
              <Box>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      pt: 1,
                      pb: 1,
                    }}
                  >
                    <Avatar
                      alt={item.name}
                      src={item.avatar}
                    />
                  </Box>
                  <Box flexGrow={0}>
                    <Typography
                      sx={{
                        pl: 1,
                        fontSize: 15,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 13,
                      }}
                    >
                      {item.address}
                    </Typography>
                  </Box>
                  <Box flexGrow={2}>
                    <Rating name="read-only" value={item.rate} readOnly />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: 15,
                    }}
                  >
                    Nhỏ nhắn, xinh tươi như những búp măng non, những chiếc bánh
                    cupcake đã mang đến một luồng gió mới cho thế giới bánh kem.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
