import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress, Divider, Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Components/SideBar";
import { Colors } from "../../../../styles/theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../../../Components/MetaData";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "@emotion/styled";
import {
  getOrderDetails,
  updateOrder,
} from "../../../../Redux/Actions/orderActions";
import Moment from "react-moment";
import {
  CLEAR_ERRORS,
  UPDATE_ORDER_RESET,
} from "../../../../Redux/Constants/orderConstants";
import { useState } from "react";

import TypographyValue from "./Components/TypographyValue";
import { useUIContext } from "../../../../context/ui";
import TypographyTitle from "./Components/TypographyTitle";



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

const options = [
  "Chờ xác nhận",
  "Chờ lấy bánh",
  "Đang giao",
  "Giao hàng thành công",
  "Đã hủy",
];

export default function ProcessOrder({ match }) {
  const dispatch = useDispatch();
  const orderId = match.params.id;
  const { error, isUpdated } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));

    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(CLEAR_ERRORS());
    }

    if (isUpdated) {
      toast.success("Cập nhật trạng thái thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: UPDATE_ORDER_RESET });
    }
  }, [dispatch, orderId, isUpdated, error]);

  const { loading, order = {} } = useSelector((state) => state.orderDetails);

  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    user,
    totalPrice,
    orderStatus,
    createdAt,
  } = order;
  const shippingDetails =
    shippingInfo &&
    `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;
  const isPaid =
    paymentInfo && paymentInfo.status === "succeeded" ? true : false;
  const [status, setValue] = useState(options[0]);

  const [inputValue, setInputValue] = useState("");

  const updateOrderHandler = (id) => {
    const formData = new FormData();
    formData.set("status", status);

    dispatch(updateOrder(id, formData));
  };
  const { drawerOpen} = useUIContext();
  

  return (
    <Box sx={{ display: "flex" }}>
      <MetaData title={"Chi tiết đơn đặt hàng"} />
      <ToastContainer />
      <SideBar />
      <Box
        component="main"
        sx={{ mt: 13, ml: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={2} sx={{ width: `${ drawerOpen === true ? "93rem" : "106.5rem"}`, height: "100%" }}>
          <Box display="center" justifyContent="center">
            <Typography variant="h4" sx={{ p: 3 }}>
              Chi tiết đơn đặt hàng
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  p: 3,
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Box sx={{ p: 2 }}>
                <Grid container>
                  <Grid item xs={8}>
                    <Box>
                      <Box display="flex" alignItems="center" sx={{ p: 2 }}>
                        <TypographyTitle title=" ID order:" />
                        <TypographyValue value={order._id} />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        sx={{ p: 1, ml: 1, mb: 1 }}
                      >
                        <TypographyTitle title="Thông tin vận chuyển" />

                        <Box
                          display="flex"
                          sx={{
                            ml: 2,
                          }}
                        >
                          <TypographyTitle title="Họ và tên:" />
                          <TypographyValue value={user && user.name} />
                        </Box>
                        <Box
                          display="flex"
                          sx={{
                            ml: 2,
                          }}
                        >
                          <TypographyTitle title="Số điện thoại:" />
                          <TypographyValue
                            value={shippingInfo && shippingInfo.phoneNo}
                          />
                        </Box>
                        <Box
                          display="flex"
                          sx={{
                            ml: 2,
                          }}
                        >
                          <TypographyTitle title="Địa chỉ:" />
                          <TypographyValue value={shippingDetails} />
                        </Box>
                        <Box
                          display="flex"
                          sx={{
                            ml: 2,
                          }}
                        >
                          <TypographyTitle title="Ngày đặt hàng:" />
                          <TypographyValue
                            value={
                              <Moment format="DD/MM/YYYY hh:mm:ss">
                                {createdAt}
                              </Moment>
                            }
                          />
                        </Box>
                        <Box display="flex">
                          <TypographyTitle title="Tổng đơn hàng:" />
                          <TypographyValue
                            value={totalPrice?.toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          />
                        </Box>

                        <Box display="flex" sx={{ mt: 1 }}>
                          <TypographyTitle title="Thanh toán:" />

                          <Box>
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: 17,
                                color: `${isPaid ? "green" : "red"}`,
                              }}
                            >
                              {isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
                            </Typography>
                          </Box>
                        </Box>

                        <Box display="flex" sx={{ mt: 1 }}>
                          <TypographyTitle title="Stripe ID:" />
                          <TypographyValue
                            value={paymentInfo && paymentInfo.id}
                          />
                        </Box>

                        <Box display="flex" sx={{ mt: 1 }}>
                          <TypographyTitle title="Trạng thái đơn hàng:" />

                          <Box>
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: 17,
                                color: `${
                                  order.orderStatus &&
                                  String(order.orderStatus).includes(
                                    "Giao hàng thành công"
                                  )
                                    ? "green"
                                    : "red"
                                }`,
                              }}
                            >
                              {orderStatus}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          display="flex"
                          flexDirection="column"
                          sx={{ mt: 1 }}
                        >
                          <TypographyTitle title="Sản phẩm:" />

                          <Box
                            textAlign="center"
                            sx={{
                              p: 2,
                              fontSize: 16,
                              color: Colors.black,
                              fontWeight: 500,
                              mr: 1,
                            }}
                          >
                            <Grid container>
                              <Grid item xs={3}>
                                Ảnh
                              </Grid>
                              <Grid item xs={4}>
                                Tên bánh
                              </Grid>
                              <Grid item xs={3}>
                                Đơn giá
                              </Grid>
                              <Grid item xs={2}>
                                Số lượng
                              </Grid>
                            </Grid>
                          </Box>
                          <Divider />
                          {orderItems &&
                            orderItems.map((order) => (
                              <>
                                <Box
                                  key={order._id}
                                  textAlign="center"
                                  sx={{
                                    p: 2,
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: 500,
                                    mr: 1,
                                  }}
                                >
                                  <Grid container>
                                    <Grid item xs={3}>
                                      <ProductImageShopingCard
                                        src={order.image}
                                        alt={order.name}
                                      />
                                    </Grid>
                                    <Grid item xs={4}>
                                      <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                      >
                                        <Box>
                                          <Typography
                                            sx={{
                                              fontSize: 16,
                                              color: Colors.black,
                                              fontWeight: 400,
                                            }}
                                            variant="body1"
                                          >
                                            {order.name}
                                          </Typography>
                                        </Box>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Box>
                                        <Typography
                                          sx={{
                                            fontSize: 16,
                                            color: Colors.black,
                                            fontWeight: 400,
                                          }}
                                          variant="body1"
                                        >
                                          {order.price.toLocaleString("vi", {
                                            style: "currency",
                                            currency: "VND",
                                          })}
                                        </Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                      <Box>
                                        <Typography
                                          sx={{
                                            fontSize: 16,
                                            color: Colors.black,
                                            fontWeight: 400,
                                          }}
                                          variant="body1"
                                        >
                                          {order.quantity}
                                        </Typography>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Box>
                                <Divider sx={{ ml: 3, mr: 3 }} />
                              </>
                            ))}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    {orderStatus === "Giao hàng thành công" ? (
                      <></>
                    ) : (
                      <>
                        <Box display="flex" justifyContent="center">
                          <TypographyTitle title="Trạng thái đơn hàng" />
                        </Box>

                        <Box
                          sx={{ p: 2 }}
                          display="flex"
                          justifyContent="center"
                        >
                          <Autocomplete
                            name="status"
                            value={orderStatus}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                              setInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                              <TextField {...params} label="Trạng thái" />
                            )}
                          />
                        </Box>
                        <Box display="flex" justifyContent="center">
                          <Button
                            sx={{
                              fontSize: 12,
                              color: Colors.black,
                              fontWeight: 500,
                            }}
                            variant="outlined"
                            onClick={() => updateOrderHandler(order._id)}
                          >
                            Cập nhật
                          </Button>
                        </Box>
                      </>
                    )}
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
