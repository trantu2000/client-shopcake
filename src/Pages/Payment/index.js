import {
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../Components/MetaData";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../Redux/Actions/orderActions";
const steps = ["Thông tin vận chuyển", "Xác nhận thông tin", "Đặt hàng"];
const options = {
  style: {
    base: {
      fontSize: "16px",
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const Payment = ({ history }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const order = {
    orderItems: cartItems,
    shippingInfo,
  };
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfoCake"));
  if (orderInfo) {
    order.itemsPrice = orderInfo.itemsPrice;
    order.shippingPrice = orderInfo.shippingPrice;
    order.taxPrice = orderInfo.taxPrice;
    order.totalPrice = orderInfo.totalPrice;
  }
  const paymentData = {
    amount: Math.round(orderInfo.totalPrice),
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let res;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      res = await axios.post("/api/v1/payment/process", paymentData, config);

      const clientSecret = res.data.client_secret;

      //console.log(clientSecret);
      if (!stripe || !elements) {
        return;
      }
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        //console.log(result.error.message);
      } else {
        // The payment is processed or not
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));
          toast.success("Đặt hàng thành công !", {
            position: toast.POSITION.TOP_RIGHT,
          });

          history.push("/order-success");
        } else {
          toast.error("Có một số vấn đề trong khi xử lý thanh toán !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log("Có một số vấn đề trong khi xử lý thanh toán !");
        }
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error.response.data.message);
    }
  };

  return (
    <Container>
      <MetaData title="Thanh toán" />
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
              Thanh toán
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
                Thanh toán
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
              <Stepper activeStep={2} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    "& > :not(style)": {
                      mt: 4,
                      mb: 4,
                      width: "35rem",
                      height: "30rem",
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
                      Thông tin thẻ thanh toán
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
                      <Box sx={{ pl: 5, pr: 5 }}>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontSize: 17, fontWeight: 600 }}
                          >
                            Số thẻ
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid black",
                              borderRadius: 2,
                              p: 1,
                            }}
                          >
                            <CardNumberElement
                              id="outlined-search"
                              type="text"
                              fullWidth
                              options={options}
                            />
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            mt: 1,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{ fontSize: 17, fontWeight: 600 }}
                          >
                            Hạng ngày sử dụng thẻ
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid black",
                              borderRadius: 2,
                              p: 1,
                            }}
                          >
                            <CardExpiryElement
                              id="outlined-search"
                              type="text"
                              fullWidth
                              options={options}
                            />
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            mt: 1,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{ fontSize: 17, fontWeight: 600 }}
                          >
                            Mật khẩu
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid black",
                              borderRadius: 2,
                              p: 1,
                            }}
                          >
                            <CardCvcElement
                              id="outlined-search"
                              type="text"
                              fullWidth
                              options={options}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ mt: 2, pl: 7, pr: 7 }}>
                   
                          <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            fullWidth
                          >
                            Thanh toán{" "}
                            {` - ${
                              orderInfo &&
                              orderInfo.totalPrice.toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                              })
                            }`}
                          </Button>
                      
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Payment;
