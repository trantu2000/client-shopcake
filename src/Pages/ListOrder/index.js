import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../../Components/MetaData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useDispatch, useSelector } from "react-redux";
import { myOrders } from "../../Redux/Actions/orderActions";
import { CLEAR_ERRORS } from "../../Redux/Constants/orderConstants";
import CircularProgress from "@mui/material/CircularProgress";
import Products from "./Products";
import _ from "lodash";
import Progress from "./Progress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, ml: 3, mr: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ListOrder = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { loading, error, orders } = useSelector((state) => state.myOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myOrders());

    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(CLEAR_ERRORS());
    }
  }, [dispatch, error]);

  useEffect(() => {}, [orders]);

  return (
    <Container>
      <MetaData title="Đơn đặt hàng" />
      <ToastContainer />

      <Box
        sx={{
          mt: 8,
          mb: 3,
          p: 4,
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
              Đơn đặt hàng
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
                Đơn dặt hàng
              </Link>
              {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
            </Breadcrumbs>
          </Grid>
        </Grid>

        <Box sx={{ width: "100%", mt: 5 }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            display="flex"
            justifyContent="center"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ fontSize: "1rem", pl: 7, pr: 7 }}
                label="Tất cả"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontSize: "1rem", pl: 7, pr: 7 }}
                label="Chờ xác nhận"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontSize: "1rem", pl: 7, pr: 7 }}
                label="Chờ lấy bánh"
                {...a11yProps(2)}
              />
              <Tab
                sx={{ fontSize: "1rem", pl: 7, pr: 7 }}
                label="Đang giao"
                {...a11yProps(3)}
              />
              <Tab
                sx={{ fontSize: "1rem", pl: 7, pr: 7 }}
                label="Đã giao"
                {...a11yProps(4)}
              />
              <Tab
                sx={{ fontSize: "1rem", pl: 7, pr: 7 }}
                label="Đã hủy"
                {...a11yProps(5)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Paper elevation={2} sx={{ mt: 3 }}>
              {loading ? (
                <Progress />
              ) : orders.length === 0 ? (
                <>
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" sx={{ p: 10 }}>
                      Chưa có đơn hàng
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  {orders?.map(
                    ({ orderItems, totalPrice, orderStatus, _id }) => (
                      <Products
                        products={orderItems}
                        price={totalPrice}
                        orderStatus={orderStatus}
                        id={_id}
                      />
                    )
                  )}
                </>
              )}
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
              <Paper elevation={2} sx={{ mt: 3 }}>
                {loading ? (
                  <Progress />
                ) : _.filter(orders, (e) => e.orderStatus === "Chờ xác nhận")
                    .length === 0 ? (
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" sx={{ p: 10 }}>
                      Chưa có đơn hàng
                    </Typography>
                  </Box>
                ) : (
                  _.filter(
                    orders,
                    (e) => e.orderStatus === "Chờ xác nhận"
                  )?.map((product) => (
                    <Products
                      products={product.orderItems}
                      price={product.totalPrice}
                      orderStatus={product.orderStatus}
                      id={product._id}
                    />
                  ))
                )}
              </Paper>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box>
              <Paper elevation={2} sx={{ mt: 3 }}>
                {loading ? (
                  <Progress />
                ) : _.filter(orders, (e) => e.orderStatus === "Chờ lấy bánh")
                    .length === 0 ? (
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" sx={{ p: 10 }}>
                      Chưa có đơn hàng
                    </Typography>
                  </Box>
                ) : (
                  _.filter(
                    orders,
                    (e) => e.orderStatus === "Chờ lấy bánh"
                  )?.map((product) => (
                    <Products
                      products={product.orderItems}
                      price={product.totalPrice}
                      orderStatus={product.orderStatus}
                      id={product._id}
                    />
                  ))
                )}
              </Paper>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box>
              <Paper elevation={2} sx={{ mt: 3 }}>
                {loading ? (
                  <Progress />
                ) : _.filter(orders, (e) => e.orderStatus === "Đang giao")
                    .length === 0 ? (
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" sx={{ p: 10 }}>
                      Chưa có đơn hàng
                    </Typography>
                  </Box>
                ) : (
                  _.filter(orders, (e) => e.orderStatus === "Đang giao")?.map(
                    (product) => (
                      <Products
                        products={product.orderItems}
                        price={product.totalPrice}
                        orderStatus={product.orderStatus}
                        id={product._id}
                      />
                    )
                  )
                )}
              </Paper>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box>
              <Paper elevation={2} sx={{ mt: 3 }}>
                {loading ? (
                  <Progress />
                ) : _.filter(
                    orders,
                    (e) => e.orderStatus === "Giao hàng thành công"
                  ).length === 0 ? (
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" sx={{ p: 10 }}>
                      Chưa có đơn hàng
                    </Typography>
                  </Box>
                ) : (
                  _.filter(
                    orders,
                    (e) => e.orderStatus === "Giao hàng thành công"
                  )?.map((product) => (
                    <Products
                      products={product.orderItems}
                      price={product.totalPrice}
                      orderStatus={product.orderStatus}
                      id={product._id}
                    />
                  ))
                )}
              </Paper>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Box>
              <Paper elevation={2} sx={{ mt: 3 }}>
                {loading ? (
                  <Progress />
                ) : _.filter(orders, (e) => e.orderStatus === "Đã hủy")
                    .length === 0 ? (
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" sx={{ p: 10 }}>
                      Chưa có đơn hàng
                    </Typography>
                  </Box>
                ) : (
                  _.filter(orders, (e) => e.orderStatus === "Đã hủy")?.map(
                    (product) => (
                      <Products
                        products={product.orderItems}
                        price={product.totalPrice}
                        orderStatus={product.orderStatus}
                        id={product._id}
                      />
                    )
                  )
                )}
              </Paper>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
};

export default ListOrder;
