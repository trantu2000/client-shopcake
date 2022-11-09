import {
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  StepLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../Components/MetaData";
import { countries } from "countries-list";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../Redux/Actions/cartActions";

const steps = ["Thông tin vận chuyển", "Xác nhận thông tin", "Đặt hàng"];

const Shipping = ({ history }) => {
  const { shippingInfo } = useSelector((state) => state.cart);

  const countriesList = Object.values(countries);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [country, setCountry] = useState(shippingInfo.country);

  // console.log(address);
  // console.log(city);
  // console.log(postalCode);
  // console.log(phoneNo);
  // console.log(country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo({ address, city, phoneNo, postalCode, country }));
    history.push("/confirm");
  };
  return (
    <Container>
      <MetaData title="Thông tin vận chuyên" />
      <ToastContainer />
      <Box
        sx={{
          p: 4,
          pt: 12,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              sx={{
                color: Colors.black,
                fontSize: "2rem",
                paddingTop: "1rem",
                fontWeight: 800,
              }}
            >
              Thông tin vận chuyển
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
                Thông tin vận chuyển
              </Link>
              {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Box sx={{ width: "100%", mb: 2 }}>
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                "& > :not(style)": {
                  m: 1,
                  mt: 2,
                  width: "35rem",
                  height: "40rem",
                },
              }}
            >
              <Paper elevation={10}>
                <Typography
                  textAlign="center"
                  variant="subtitle1"
                  sx={{
                    fontSize: 19,
                    pt: 4,
                  }}
                >
                  Vui lòng điền thông tin
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { mt: 1, mb: 1 },
                    p: 2,

                    ".MuiInputLabel-root": {
                      fontSize: "1.2rem",
                      color: Colors.black,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={submitHandler}
                >
                  <Box>
                    <TextField
                      id="outlined-search"
                      label="Địa chỉ"
                      type="text"
                      fullWidth
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                      id="outlined-search"
                      label="Thành phố"
                      type="text"
                      fullWidth
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                      id="outlined-search"
                      label="Số điện thoại"
                      type="text"
                      fullWidth
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                    <TextField
                      id="outlined-search"
                      label="Mã bưu điện"
                      type="number"
                      fullWidth
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Quốc gia
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country}
                        label="Age"
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        {countriesList.map((country) => (
                          <MenuItem key={country.name} value={country.name}>
                            {country.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ mt: 2, pl: 5, pr: 5 }}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Tiếp tục
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Shipping;
