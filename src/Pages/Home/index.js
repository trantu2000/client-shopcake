import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment, useEffect } from "react";
import LoopWithSlidesPerGroup from "../../Components/LoopWithSlidesPerGroup";
import MetaData from "../../Components/MetaData";
import Promotions from "../../Components/promotions";
import SwiperBanner from "../../Components/Swiper";
import { Colors } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/productActions";
import Previews from "../../Components/Previews";
import { TypographyContentIntro, TypographySubTileIntro, TypographyTileIntro } from "./style";



const Home = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Fragment>
      <MetaData title="Trang chủ" />
      {/* <Banner /> */}
      <SwiperBanner />
      <Promotions />
      <Container>
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Box display="flex" flexDirection="column" sx={{ mb: 3 }}>
            <TypographyTileIntro>GIỚI THIỆU CỬA HÀNG BÁNH</TypographyTileIntro>
            <TypographySubTileIntro>
              Cakes and bakes from the house of Queens!
            </TypographySubTileIntro>
            <TypographyContentIntro>
              "Cake Shop" là một Thương hiệu của Jordan, khởi đầu là một doanh
              nghiệp gia đình nhỏ. Chủ sở hữu là Tiến sĩ Iyad Sultan và Tiến sĩ
              Sereen Sharabati, được hỗ trợ bởi đội ngũ 80 nhân viên.
            </TypographyContentIntro>
          </Box>
        </Box>

        <LoopWithSlidesPerGroup />
        <Divider sx={{mt:4}}/>

        <Previews />

        {/* Instagram Section Begin */}
        <Box
          sx={{
            m: 2,
          }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Typography
                sx={{
                  color: Colors.primary,
                  fontSize: 16,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  mt: 5,
                }}
              >
                Theo dõi chúng tôi trên Instagram
              </Typography>
              <Typography
                sx={{
                  fontSize: "3.5rem",
                  fontFamily: "Brush Script MT",
                  mt: 2,
                  mr: 2,
                  pr: 2,
                }}
              >
                Những khoảnh khắc ngọt ngào được lưu lại làm kỷ niệm.
              </Typography>
              <Box display="flex" alignItems="center">
                <Box>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666112987/products-cake/cake-piece_arv5z3.png"
                    alt=""
                  ></img>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      color: Colors.black,
                      mt: -3,
                      ml: -14,
                    }}
                  >
                    @CakeTu2000_
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ mr: 3 }}>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666112987/products-cake/instagram-1_wrryrg.jpg"
                    alt=""
                  />
                </Box>
                <Box sx={{ mr: 3, mt: 4 }}>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666112987/products-cake/instagram-2_fy5ia5.jpg"
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666112987/products-cake/instagram-3_rdvtnf.jpg"
                    alt=""
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ mr: 3 }}>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666112988/products-cake/instagram-4_fnxplw.jpg"
                    alt=""
                  />
                </Box>
                <Box sx={{ mr: 3, mt: 4 }}>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666112987/products-cake/instagram-5_hpwfr9.jpg"
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1666112987/products-cake/instagram-2_fy5ia5.jpg"
                    alt=""
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Instagram Section End */}
      </Container>

      {/* <SearchBox /> */}
    </Fragment>
  );
};

export default Home;
