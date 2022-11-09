import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 40,mb:40 }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
