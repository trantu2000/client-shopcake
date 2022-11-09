import {
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../Components/MetaData";
import styled from "@emotion/styled";

import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const steps = ["Thông tin vận chuyển", "Xác nhận thông tin", "Đặt hàng"];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "25rem",
    maxHeight: "30rem",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Confirm = ({history}) => {
  const ProductImageShopingCard = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "5rem",
    height: "5rem",
    background: Colors.light_gray,

    // [theme.breakpoints.down("md")]: {
    //     width: "80%",
    //     padding: '24px'
    // }
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  // Calculate Order Prices
  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingPrice = itemsPrice > 100000 ? 0 : 30000;

  const totalPrice = itemsPrice + shippingPrice;

  const processToPayment = () => {
    const data = {
      itemsPrice: itemsPrice,
      shippingPrice,
      totalPrice,
    };

    sessionStorage.setItem("orderInfoCake", JSON.stringify(data));
    history.push("/payment");
  };

  return (
    <Container>
      <MetaData title="Tiếp tục đặt hàng" />
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
              Xác nhận thông tin
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
                Xác nhận thông tin
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
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Divider />
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mt: 4,
          ml: 5,
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Box>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 700,
                }}
                variant="subtitle1"
              >
                Thông tin vận chuyển
              </Typography>
              <Box
                sx={{
                  ml: 4,
                  mt: 2,
                }}
              >
                <Box display="flex">
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                        mr: 1,
                        fontWeight: 700,
                      }}
                      variant="subtitle1"
                    >
                      Họ và tên:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                      }}
                      variant="subtitle1"
                    >
                      {user && user.name}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                        mr: 1,
                        fontWeight: 700,
                      }}
                      variant="subtitle1"
                    >
                      Số điện thoại:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                      }}
                      variant="subtitle1"
                    >
                      {shippingInfo.phoneNo}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                        mr: 1,
                        fontWeight: 700,
                      }}
                      variant="subtitle1"
                    >
                      Địa chỉ:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                      }}
                      variant="subtitle1"
                    >
                      {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.country}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <Grid container>
                <Grid item xs={8}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                      variant="subtitle1"
                    >
                      Sản phẩm đặt mua
                    </Typography>
                    <Box
                      sx={{
                        ml: 4,
                        mt: 2,
                        mb: 6,
                      }}
                    >
                      <Box>
                        <Grid container>
                          <Grid item xs={6}>
                            <Typography variant="h6">Sản phẩm</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="h6" align="center">
                              Số lượng
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant="h6" align="center">
                              Tạm tính
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider />
                      </Box>
                      {cartItems.map((item) => (
                        <Fragment>
                          <Box key={item.product}>
                            <Grid
                              container
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              padding="1rem"
                            >
                              <Grid item xs={6}>
                                <Grid
                                  container
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
                                >
                                  <Grid item xs={4}>
                                    <ProductImageShopingCard
                                      src={item.image}
                                      alt={item.name}
                                    />
                                  </Grid>
                                  <Grid item xs={8}>
                                    <Typography
                                      variant="subtitle1"
                                      sx={{
                                        fontSize: "1.2rem",
                                      }}
                                    >
                                      {item.name}
                                    </Typography>
                                    <Typography
                                      variant="subtitle1"
                                      sx={{
                                        fontSize: "1rem",
                                      }}
                                    >
                                      {item.price.toLocaleString("vi", {
                                        style: "currency",
                                        currency: "VND",
                                      })}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={2}>
                                <Box
                                  display="Flex"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      border: "none",
                                      pl: 2,
                                      pr: 2,
                                      pt: 1,
                                      pb: 1,
                                    }}
                                  >
                                    {item.quantity}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={4}>
                                <Box
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
                                >
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontSize: "1rem",
                                      ml: 2,
                                    }}
                                  >
                                    {(
                                      item.quantity * item.price
                                    ).toLocaleString("vi", {
                                      style: "currency",
                                      currency: "VND",
                                    })}
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                          <Divider />
                        </Fragment>
                      ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 300,
                  height: 300,
                },
              }}
            >
              <Paper elevation={3}>
                <Box
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,

                      fontWeight: 600,
                    }}
                    align="center"
                    variant="subtitle1"
                  >
                    Thanh toán
                  </Typography>
                  <Divider />
                  <Box
                    display="flex"
                    sx={{
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          fontWeight: 600,
                        }}
                      >
                        Tạm tính:
                      </Typography>
                    </Box>
                    <Box>
                      {" "}
                      <Typography
                        sx={{
                          fontSize: 16,
                        }}
                      >
                        {itemsPrice.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          fontWeight: 600,
                        }}
                      >
                        Phí vận chuyển:
                      </Typography>
                    </Box>
                    <Box>
                      {" "}
                      <Typography
                        sx={{
                          fontSize: 16,
                        }}
                      >
                        {shippingPrice.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    sx={{
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          fontWeight: 600,
                        }}
                      >
                        Tổng cộng:
                      </Typography>
                    </Box>
                    <Box>
                      {" "}
                      <Typography
                        sx={{
                          fontSize: 16,
                        }}
                      >
                        {totalPrice.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />

                  <Box sx={{ mt: 4, pl: 5, pr: 5, color: Colors.white }}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      sx={{ color: Colors.white }}
                      onClick={handleClickOpen}
                    >
                      Tiếp tục
                    </Button>

                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        Phương thức thanh toán
                      </BootstrapDialogTitle>
                      <DialogContent dividers>
                        <Box sx={{ mt: 1, pl: 5, pr: 5, color: Colors.white }}>
                          <Link to="/payment">
                            <Button
                              type="submit"
                              color="primary"
                              variant="contained"
                              fullWidth
                              sx={{ color: Colors.white }}
                              onClick={processToPayment}
                            >
                              Thanh toán bằng thẻ
                            </Button>
                          </Link>
                        </Box>

                        <Box
                          sx={{
                            mt: 2,
                            pl: 5,
                            pr: 5,
                            mb: 1,
                            color: Colors.white,
                          }}
                        >
                          <Link to="#">
                            <Button
                              type="submit"
                              color="primary"
                              variant="contained"
                              fullWidth
                              sx={{ color: Colors.white }}
                            >
                              Nhận hàng thanh toán sau
                            </Button>
                          </Link>
                        </Box>
                      </DialogContent>
                      {/* <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          Tiếp tục
                        </Button>
                      </DialogActions> */}
                    </BootstrapDialog>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Confirm;
