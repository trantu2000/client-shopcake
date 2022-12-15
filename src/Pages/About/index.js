import React from "react";
import MetaData from "../../Components/MetaData";
import Breadcrumb from "../../Components/Breadcrumb";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import Iframe from "react-iframe";
import { Colors } from "../../styles/theme";
import CustomizedSlider from "./Slider";
import Previews from "../../Components/Previews";
import TeamItem from "./TeamItem";

const About = () => {
  return (
    <Container>
      <MetaData title="Giới thiệu" />
      <Box sx={{ mt: 10 }}>
        <Breadcrumb title="Giới thiệu" />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ width: "100%", height: "37rem" }}>
          <Iframe
            url="/videos/videolambanh.mp4"
            width="100%"
            height="100%"
            id=""
            className=""
            display="block"
            position="relative"
            styles={{ border: 0 }}

            
          />
        </Box>
        {/* <iframe width="100%" height="500px" src="https://www.youtube.com/embed/oTvjpxN7DPo?autoplay=1&loop=1&playlist=oTvjpxN7DPo"
    frameborder="0" allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe> */}

        <Box sx={{ mb: 3 }}>
          <Grid container>
            <Grid item xs={6}>
              <Box sx={{ mt: 5, mb: 1, color: Colors.primary }}>
                <Typography variant="h4">GIỚI THIỆU CỬA HÀNG BÁNH</Typography>
              </Box>
              <Box sx={{ mt: 5, mb: 1 }}>
                <Typography variant="h2" sx={{ fontFamily: "Montez" }}>
                  Bánh và bánh từ nhà Queens!
                </Typography>
              </Box>
              <Box sx={{ color: Colors.primary }}>
                <Typography variant="h6">
                  "Cake Shop" là một Thương hiệu của Jordan, khởi đầu là một
                  doanh nghiệp gia đình nhỏ. Chủ sở hữu là Tiến sĩ Iyad Sultan
                  và Tiến sĩ Sereen Sharabati, được hỗ trợ bởi đội ngũ 80 nhân
                  viên.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ mt: 5 }}>
                <CustomizedSlider />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box>
          <Previews />
        </Box>
        <Box textAlign="center">
          <Typography variant="h4">ĐỘI NGŨ CỦA CHÚNG TÔI</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Grid container>
            <Grid item xs={3}>
              <TeamItem src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667826948/products-cake/team-1_ivdvdt.jpg" />
            </Grid>
            <Grid item xs={3}>
              <TeamItem src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667826948/products-cake/team-2_aydxez.jpg" />
            </Grid>
            <Grid item xs={3}>
              <TeamItem src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667826948/products-cake/team-3_surk6f.jpg" />
            </Grid>
            <Grid item xs={3}>
              <TeamItem src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667826948/products-cake/team-4_uhxs9u.jpg" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
