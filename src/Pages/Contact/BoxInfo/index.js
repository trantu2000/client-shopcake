import { Box, Typography } from "@mui/material";
import React from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailIcon from "@mui/icons-material/Mail";

const BoxInfo = ({country}) => {
  return (
    <Box>
      <Box>
        <Typography variant="h5">{country}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Box>
          <AddLocationAltIcon sx={{ fontSize: 30, p: 2 }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 17 }}>
            412 Nguyễn Văn Công, P.3, Q.Gò Vấp
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box>
          <AddIcCallIcon sx={{ fontSize: 30, p: 2 }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 17 }}>0862966071</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box>
          <MailIcon sx={{ fontSize: 30, p: 2 }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 17 }}>tttuab@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxInfo;
