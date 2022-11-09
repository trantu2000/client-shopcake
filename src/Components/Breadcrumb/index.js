import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";

const Breadcrumb = ({title}) => {
  return (
    <Box
      sx={{
        pt: 12,
        pb:5
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography
            sx={{
              color: Colors.black,
              fontSize: "3rem",
              paddingTop: "1rem",
              fontWeight: 800,
              fontFamily: "Montez",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Breadcrumbs
            sx={{
              p: 1,
            }}
            aria-label="breadcrumb"
          >
            <Link to="#" underline="hover" color="inherit">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" to="#">
              {title}
            </Link>
            {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
          </Breadcrumbs>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Breadcrumb;
