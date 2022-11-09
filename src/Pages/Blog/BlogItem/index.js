import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../styles/theme";

const BackgroundImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "100%",
  height: "28rem",
  // [theme.breakpoints.down("md")]: {
  //   width: "350px",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "320px",
  //   height: "300px",
  // },
}));

const BlogItem = ({ src, title, content }) => {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ width: "100%", height: "28rem", mb: 2 }}>
        <BackgroundImage src={src} />
      </Box>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography
            sx={{
              p: 1,
              mr: 5,
              backgroundColor: Colors.primary,
              color: Colors.white,
            }}
            variant="h6"
          >
            Công thức nấu ăn
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              pr: 2,
              borderRight: " 1px solid black",
              ml: 2,
            }}
          >
            By Trần Thanh Tú
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              pr: 2,
              ml: 2,
              borderRight: " 1px solid black",
            }}
          >
            11/6/2022
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              pr: 2,
              ml: 2,
            }}
          >
            100 luợt xem
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" sx={{ fontFamily: "Montez", p: 3 }}>
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ ml: 3, fontSize: 17 }}>
          {content}
          Các loại thảo mộc rất vui nhộn và dễ trồng. Khi thu hoạch, chúng làm
          cho ngay cả bữa ăn đơn giản nhất cũng có vẻ như là một niềm vui cho
          người sành ăn. Bằng cách sử dụng các loại thảo mộc trong nấu ăn, bạn
          có thể dễ dàng thay đổi hương vị của công thức nấu ăn theo nhiều cách
          khác nhau, tùy theo loại thảo mộc mà bạn thêm vào ...
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            p: 1,
            pl: 2,
            ml: 2,
            fontSize: 17,
            borderBottom: " 1px solid black",
            width: "7rem",
          }}
        >
          ĐỌC THÊM
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogItem;
