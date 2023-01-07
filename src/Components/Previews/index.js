import { Box, Typography, styled } from "@mui/material";
import { maxWidth } from "@mui/system";
import React from "react";
import { Colors } from "../../styles/theme";
import SlidePreview from "./SlidePreview";

const TypographyTitle = styled("Typography")(({ theme }) => ({
  textAlign: "center",
  fontSize: 40,
  fontFamily: "Montez",
  fontWeight: 550,
  mb: 3,
  // border: "1px solid black"
  // [theme.breakpoints.down("md")]: {
  //   width: "350px",
  // },
  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
  },
}));

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
        }}
      >
        <TypographyTitle>Đánh giá của khách hàng</TypographyTitle>

        <Box>
          <SlidePreview />
        </Box>
      </Box>
    </>
  );
};

export default Previews;
