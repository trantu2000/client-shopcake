import React from "react";
import MetaData from "../../Components/MetaData";
import Breadcrumb from "../../Components/Breadcrumb";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import BlogItem from "./BlogItem";
import Search from "./Search";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PostItem from "./PostItem";
import CategoryItem from "./CategoryItem";
import { Colors } from "../../styles/theme";
import CheckboxLabels from "./CheckboxLabels";

const posts = [
  {
    id: "1",
    src: "https://res.cloudinary.com/da5zt66t6/image/upload/v1667741272/products-cake/br-1_mxqtdw.jpg",
    title: "Secret To Cooking Vegetables",
    date: "11/06/2022",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/da5zt66t6/image/upload/v1667741272/products-cake/br-2_t8zvgq.jpg",
    title: "Bbq Myths Getting You Down",
    date: "11/06/2022",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/da5zt66t6/image/upload/v1667741272/products-cake/br-3_pjlgim.jpg",
    title: "Save Money The Crock Pot Way",
    date: "11/06/2022",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/da5zt66t6/image/upload/v1667741272/products-cake/br-4_lhdnnd.jpg",
    title: "Grilling Tips For The Dog Days Of Summer",
    date: "11/06/2022",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/da5zt66t6/image/upload/v1667741272/products-cake/br-5_dredod.jpg",
    title: "Barbeque Techniques Two Methods To Consider",
    date: "11/06/2022",
  },
];

const Blog = () => {
  return (
    <Container>
      <MetaData title="Blog" />
      <Box sx={{ mt: 10 }}>
        <Breadcrumb title="Blog" />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Grid container>
          <Grid item xs={8}>
            <BlogItem
              src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667735613/products-cake/blog-1_v9jp4d.jpg"
              title="Mang ?????n nh???ng n??? h??n v?? nh???ng ??i???u k??? di???u"
              content="C??c lo???i th???o m???c r???t vui nh???n v?? d??? tr???ng. Khi thu ho???ch, ch??ng l??m cho ngay c??? b???a ??n ????n gi???n nh???t c??ng c?? v??? nh?? l?? m???t ni???m vui cho ng?????i s??nh ??n. B???ng c??ch s??? d???ng c??c lo???i th???o m???c trong n???u ??n, b???n c?? th??? d??? d??ng thay ?????i h????ng v??? c???a c??ng th???c n???u ??n theo nhi???u c??ch kh??c nhau, t??y theo lo???i th???o m???c m?? b???n th??m v??o ..."
            />
            <BlogItem
              src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667735613/products-cake/blog-2_hp7eit.jpg"
              title="Make Grilling A Healthy Experience"
              content="C??c lo???i th???o m???c r???t vui nh???n v?? d??? tr???ng. Khi thu ho???ch, ch??ng l??m cho ngay c??? b???a ??n ????n gi???n nh???t c??ng c?? v??? nh?? l?? m???t ni???m vui cho ng?????i s??nh ??n. B???ng c??ch s??? d???ng c??c lo???i th???o m???c trong n???u ??n, b???n c?? th??? d??? d??ng thay ?????i h????ng v??? c???a c??ng th???c n???u ??n theo nhi???u c??ch kh??c nhau, t??y theo lo???i th???o m???c m?? b???n th??m v??o ..."
            />
            <BlogItem
              src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667735613/products-cake/blog-3_crj0y9.jpg"
              title="Bbq Myths Getting You Down"
              content="C??c lo???i th???o m???c r???t vui nh???n v?? d??? tr???ng. Khi thu ho???ch, ch??ng l??m cho ngay c??? b???a ??n ????n gi???n nh???t c??ng c?? v??? nh?? l?? m???t ni???m vui cho ng?????i s??nh ??n. B???ng c??ch s??? d???ng c??c lo???i th???o m???c trong n???u ??n, b???n c?? th??? d??? d??ng thay ?????i h????ng v??? c???a c??ng th???c n???u ??n theo nhi???u c??ch kh??c nhau, t??y theo lo???i th???o m???c m?? b???n th??m v??o ..."
            />
            <BlogItem
              src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667735613/products-cake/blog-4_dlrkpe.jpg"
              title="Gi??? khu v???c n???u ??n s???ch s???"
              content="C??c lo???i th???o m???c r???t vui nh???n v?? d??? tr???ng. Khi thu ho???ch, ch??ng l??m cho ngay c??? b???a ??n ????n gi???n nh???t c??ng c?? v??? nh?? l?? m???t ni???m vui cho ng?????i s??nh ??n. B???ng c??ch s??? d???ng c??c lo???i th???o m???c trong n???u ??n, b???n c?? th??? d??? d??ng thay ?????i h????ng v??? c???a c??ng th???c n???u ??n theo nhi???u c??ch kh??c nhau, t??y theo lo???i th???o m???c m?? b???n th??m v??o ..."
            />
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ ml: 3 }}>
              <Box>
                <Search />
              </Box>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h4">FOLLOW ME</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Box>
                  <IconButton type="button" sx={{ p: "10px" }}>
                    <FacebookOutlinedIcon
                      sx={{ p: "10px", fontSize: "3rem" }}
                    />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton type="button" sx={{ p: "10px" }}>
                    <TwitterIcon sx={{ p: "10px", fontSize: "3rem" }} />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton type="button" sx={{ p: "10px" }}>
                    <YouTubeIcon sx={{ p: "10px", fontSize: "3rem" }} />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton type="button" sx={{ p: "10px" }}>
                    <InstagramIcon sx={{ p: "10px", fontSize: "3rem" }} />
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h4">B??I VI???T PH??? BI???N</Typography>
              </Box>
              <Box>
                {posts.map((item) => (
                  <PostItem
                    key={item.id}
                    src={item.src}
                    title={item.title}
                    date={item.date}
                  />
                ))}
              </Box>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h4">TH??? LO???I</Typography>
              </Box>
              <Box>
                <CategoryItem title="Repice" quantity="36" />
                <CategoryItem title="H?????ng d???n" quantity="30" />
                <CategoryItem title="Tin t???c" quantity="20" />
                <CategoryItem title="Videos" quantity="60" />
                <CategoryItem title="Xu h?????ng" quantity="25" />
              </Box>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h4"> B???N TIN</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 17 }}>
                  ????ng k?? nh???n b???n tin c???a ch??ng t??i v?? nh???n c??c c???p nh???t m???i
                  nh???t c???a ch??ng t??i ngay trong h???p th?? ?????n c???a b???n.
                </Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Nh???p email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    pb: 2,
                    ".MuiInputLabel-root": {
                      color: Colors.black,
                      fontSize: 16,
                    },
                    ".MuiInputBase-root": {
                      color: Colors.black,
                      fontSize: 16,
                    },
                  }}
                />
                <Box>
                  <CheckboxLabels />
                </Box>
                <Button variant="outlined" sx={{fontSize: 16,mt:1}}>????ng k??</Button>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
