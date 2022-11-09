import { Box, Typography } from "@mui/material";
import React from "react";

const CategoryItem = ({ title, quantity }) => {
  return (
    <Box sx={{ ml: 2,p:1 }} display="flex" justifyContent="space-between">
      <Box>
        <Typography sx={{ fontSize: 17 }}>{title}</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: 17 }}>{quantity}</Typography>
      </Box>
    </Box>
  );
};

export default CategoryItem;
