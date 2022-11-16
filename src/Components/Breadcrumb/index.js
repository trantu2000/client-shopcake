import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";

const Breadcrumb = ({title}) => {
  return (
    <Box
      sx={{
        pt: 2,
        pb:5
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={10}>
          <Typography
            sx={{
              color: Colors.black,
              fontSize: "2.5rem",
              paddingTop: "1rem",
              fontWeight: 800,
              fontFamily: "Montez",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Breadcrumbs
            
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
