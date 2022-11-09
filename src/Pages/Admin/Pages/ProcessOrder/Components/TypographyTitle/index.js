import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../../../../styles/theme";


const TypographyTitle = ({title}) => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: 17,
          color: Colors.black,
          fontWeight: 500,
          mr:2
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TypographyTitle;
