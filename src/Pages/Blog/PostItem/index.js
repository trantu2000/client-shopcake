import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../styles/theme";

const BackgroundImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "7rem",
  height: "7rem",
  // [theme.breakpoints.down("md")]: {
  //   width: "350px",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "320px",
  //   height: "300px",
  // },
}));

const PostItem = ({ src, title, date }) => {
  return (
    <Box sx={{ mb: 3 }} display="flex" >
      <Box sx={{ width: "7rem", height: "7rem", mb: 2 }}>
        <BackgroundImage src={src} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box>
          <Typography variant="h5" sx={{ ml:3, mb:1}}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ pl: 3 }}>
            {date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PostItem;
