import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MetaData from "../../Components/MetaData";
import Iframe from "react-iframe";
import BoxInfo from "./BoxInfo";
import { Colors } from "../../styles/theme";
import Breadcrumb from "../../Components/Breadcrumb";

const Contact = () => {
  return (
    <Container>
      <MetaData title="Liên hệ" />
      <Box sx={{ mt: 10 }}>
        <Breadcrumb title="Liên hệ" />
      </Box>
      <Box sx={{ mt: 13, mb: 5 }}>
        <Box sx={{}}>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6909279302563!2d106.68470491468427!3d10.834947761073817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752857945b8703%3A0x7b52f871a0c48258!2zSOG6u20gMTYzIMSQLiBT4buRIDIwLCBQaMaw4budbmcgNSwgR8OyIFbhuqVwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1667574545247!5m2!1svi!2s"
            width="100%"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"
            styles={{ border: 0 }}
          />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Grid container>
            <Grid item xs={4}>
              <BoxInfo country="Hà Nội" />
            </Grid>
            <Grid item xs={4}>
              <BoxInfo country="Đà Nẵng" />
            </Grid>
            <Grid item xs={4}>
              <BoxInfo country="TP Hồ Chí Minh" />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box sx={{ mt: 10 }}>
          <Grid container>
            <Grid item xs={4}>
              <Box>
                <Box>
                  <Typography variant="h4">Kết nối với chúng tôi</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 17, p: 1 }}>
                    Thứ hai - Thứ 6: 8:00 - 17:00
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 17, p: 1 }}>
                    Thứ bảy - Chủ nhât: 8:00 - 12:00
                  </Typography>
                </Box>
                <Box sx={{ p: 3 }}>
                  <img
                    src="https://res.cloudinary.com/da5zt66t6/image/upload/v1667579289/avatars/cake-piece_bknpo1.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <Grid container>
                  <Grid item xs={6}>
                    <Box sx={{ p: 2 }}>
                      <TextField
                        id="outlined-basic"
                        label="Họ và tên"
                        type="text"
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
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ p: 2 }}>
                      <TextField
                        id="outlined-basic"
                        label="email"
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
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ p: 2 }}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={8}
                  placeholder="Nội dung"
                  style={{ width: "100%" }}
                />
              </Box>
              <Box sx={{pl:2}}>
                <Button variant="outlined">Gửi</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
