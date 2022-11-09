import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Progress = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ p: 10 }}>
      <CircularProgress />
    </Box>
  );
};

export default Progress;
