import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <Box
      sx={{
        //background: Colors.dim_grey,
        backgroundImage: `url("https://res.cloudinary.com/da5zt66t6/image/upload/v1665565854/products-cake/footer-bg_rtu0s1.jpg")`,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
        height: "150px",
        position: "relative",
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <FooterTitle variant="h6">Giờ làm việc</FooterTitle>
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                mb: 2,
                color: Colors.dim_grey,
                // borderRight: 1,
                // borderColor: Colors.white,
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  color: Colors.dim_grey,
                }}
              >
                <Typography variant="caption2">
                  Thứ hai - Thứ sáu: 08:00 – 20:30
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: 2,
                  color: Colors.dim_grey,
                }}
              >
                <Typography variant="caption2">
                  Thứ bảy: 10:00 – 19:30
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: 2,
                  color: Colors.dim_grey,
                }}
              >
                <Typography variant="caption2">
                  Chủ nhật: 10:00 – 16:30
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                mb: 2,
                color: Colors.dim_grey,
                borderRight: 1,
                borderLeft: 1,
                borderColor: Colors.white,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <img
                  src="https://res.cloudinary.com/da5zt66t6/image/upload/v1665569518/products-cake/footer-logo_xlyizm.png"
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  mb: 2,
                  color: Colors.dim_grey,
                }}
              >
                <Typography variant="caption2">
                  Thương hiệu bánh hoàng gia đến từ Châu Âu
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  color: Colors.dove_gray,
                }}
              >
                <FacebookIcon sx={{ mr: 1 }} />
                <TwitterIcon sx={{ mr: 1 }} />
                <InstagramIcon />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box
              sx={{
                ml: 5,
              }}
            >
              <FooterTitle variant="h6">Nhận thông báo</FooterTitle>
              <Stack>
                <SubscribeTf
                  color="primary"
                  label="Email address"
                  variant="standard"
                />
                <Button
                  startIcon={<SendIcon sx={{ color: Colors.white }} />}
                  sx={{ mt: 4, mb: 4 }}
                  variant="contained"
                >
                  Đăng ký
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
     
    </Box>
  );
};

export default Footer;
