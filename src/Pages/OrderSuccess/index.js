import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";

const OrderSuccess = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        sx={{
          width: "15rem",
          height: "15rem",
          p: 4,
          mt: 15,
        }}
      >
        <img
          src="/images/order_success.png"
          alt=""
          style={{ width: "15rem", height: "15rem" }}
        />
      </Box>
      <Box>
        <Typography variant="h5">
          Đơn hàng của bạn đã được đặt thành công
        </Typography>
      </Box>

      <Box
        sx={{
          mb: 10,           
        }}
      >
        <Link to="/orders/me">
          <Typography
            variant="subtitle1"
            sx={{
              color: Colors.info,
              "&:hover": {
                color: Colors.black,
                fontWeight: 600,
              },
            }}
          >
            Xem đơn đặt hàng
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default OrderSuccess;
