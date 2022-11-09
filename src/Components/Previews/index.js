import { Box, Typography } from "@mui/material";
import { maxWidth } from "@mui/system";
import React from "react";
import { Colors } from "../../styles/theme";
import SlidePreview from "./SlidePreview";

const Previews = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        sx={{
          width: maxWidth,
          height: "35rem",
          //backgroundColor: Colors.body_bg,

          mt: 10,
        }}
      >
        <Box >
          <Typography
          textAlign="center"
            sx={{
              fontSize: "3.5rem",
              fontFamily: "Montez",
              fontWeight: 550,
              mb:3
            }}
          >
            Đánh giá của khách hàng
          </Typography>
        </Box>
        <Box>
          <SlidePreview />
        </Box>
      </Box>
    </>
  );
};

export default Previews;
