import { Box, Typography } from "@mui/material";
import React from "react";

const TypographyValue = ({value}) => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: 17,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default TypographyValue;
