import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Colors } from "../../styles/theme";
import { Paper } from "@mui/material";
import BasicCard from "./Components/Cart";

import SideBar from "./Components/SideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../Redux/Actions/orderActions";
import { useUIContext } from "../../context/ui";
import { getAdminProducts } from "../../Redux/Actions/productActions";
import { allUsers } from "../../Redux/Actions/userActions";

export default function MiniDrawer() {
  const dispatch = useDispatch();
  const { orders, totalAmount, loading } = useSelector(
    (state) => state.allOrders
  );
  const { products } = useSelector(state => state.products)
  const { users } = useSelector(state => state.allUsers)

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(allOrders());
    dispatch(allUsers())
  }, [dispatch]);

  const { drawerOpen } = useUIContext();

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box component="main" sx={{ mt: 10, ml: 2 }}>
        <Paper
          elevation={2}
          sx={{
            width: `${drawerOpen === true ? "94rem" : "107.5rem"}`,
            height: "50rem",
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <Paper
                sx={{
                  width: "30rem",
                  height: "10rem",
                  borderRadius: "5px",
                  bgcolor: Colors.primary,
                  color: Colors.white,
                }}
                variant="outlined"
                square
              >
                <Typography
                  align="center"
                  sx={{ fontSize: 20, fontWeight: 800, p: 2 }}
                  gutterBottom
                >
                  Doanh thu
                </Typography>
                <Typography align="center" variant="h5" component="div">
                  {totalAmount?.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Typography>
              </Paper>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                p: 2,
              }}
            >
              <BasicCard
                title="Sản phẩm"
                quantity={products && products.length}
                to="/admin/products"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                p: 2,
              }}
            >
              <BasicCard
                title="Người dùng"
                quantity={users && users.length}
                to="/admin/users"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                p: 2,
              }}
            >
              <BasicCard
                title="Đơn đặt hàng"
                quantity={orders && orders.length}
                to="/admin/orders"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                p: 2,
              }}
            >
              <BasicCard
                title="Đánh giá"
                quantity="150 (bình luận)"
                to="/admin-preview"
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
